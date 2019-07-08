import React from 'react';
import {
  ADD_TECHNOLOGY, DELETE_TECHNOLOGY, PERSON_INFO_LOADED,
  TECHNOLOGIES_LOADED
} from '../../constants/action-types';
import {addTechnology, deleteTechnology, getPersonData, getTechnologies} from '../../redux/actions/index';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import rootReducer from '../../redux/reducers/index';
import {homeData, technologiesListMock} from './home-mock';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Home} from './Home';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  contactsList: [],
  contactById: null,
  technologiesList: [],
  personInfo: null,
  posts: [],
  postById: null,
};

Enzyme.configure({adapter: new Adapter()});

describe('actions', () => {
  let component;
  const addTechnologyMock = jest.fn();
  const deleteTechnologyMock = jest.fn();
  const getPersonDataMock = jest.fn();
  const getTechnologiesMock = jest.fn();
  const personInfoMock = homeData;
  const technologiesMock = technologiesListMock;

  beforeEach(() => {
    component = shallow(<Home
        addTechnology={addTechnologyMock}
        deleteTechnology={deleteTechnologyMock}
        getPersonData={getPersonDataMock}
        getTechnologies={getTechnologiesMock}
        personInfo={personInfoMock}
        technologiesList={technologiesMock}
    />)
  });

  afterEach(() => {
    fetchMock.restore()
  });

  it('should be defined', () => {
    expect(Home).toBeDefined();
  });

  it('should call the mock add technology function', () => {
    component.find('#add-tech-button').simulate('click');
    expect(addTechnologyMock.mock.calls.length).toBe(1);
  });

  it('should create an action to add a technology', () => {
    const newTechnology = {
      id: 1,
      name: 'New technology'
    };
    const expectedAction = {
      type: ADD_TECHNOLOGY,
      payload: newTechnology,
    };
    expect(addTechnology(newTechnology)).toEqual(expectedAction)
  });

  it('should create an action to delete a technology', () => {
    const technologyId = 1;
    const expectedAction = {
      type: DELETE_TECHNOLOGY,
      payload: technologyId,
    };
    expect(deleteTechnology(technologyId)).toEqual(expectedAction)
  });

  it('creates TECHNOLOGIES_LOADED when fetching technologies has been done', () => {
    const json = technologiesListMock;

    fetchMock.getOnce('/api/person-technologies', {body: json});
    const expectedActions = [
      {
        type: TECHNOLOGIES_LOADED,
        payload: json
      },
    ];

    const store = mockStore({technologiesList: []});

    return store.dispatch(getTechnologies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('creates PERSON_INFO_LOADED when fetching person info has been done', () => {
    const json = homeData;

    fetchMock.getOnce('/api/person-info', {body: json});
    const expectedActions = [
      {
        type: PERSON_INFO_LOADED,
        payload: json
      },
    ];

    const store = mockStore({personInfo: null});
    return store.dispatch(getPersonData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState)
  });

  it('should handle ADD_TECHNOLOGY', () => {
    expect(rootReducer({technologiesList: []}, {
          type: ADD_TECHNOLOGY,
          payload: {
            id: 1,
            name: 'New Technology'
          }
        })
    ).toEqual({
      technologiesList: [{
        name: 'New Technology',
        id: 1,
      }]
    });

    expect(rootReducer({
          technologiesList: [{
            name: 'Presented Technology',
            id: 1,
          }]
        },
        {
          type: ADD_TECHNOLOGY,
          payload: {
            id: 2,
            name: 'New Technology'
          }
        }
        )
    ).toEqual({
      technologiesList: [
        {
          name: 'Presented Technology',
          id: 1,
        },
        {
          id: 2,
          name: 'New Technology'
        }
      ]
    })
  });

  it('should handle DELETE_TECHNOLOGY', () => {
    expect(rootReducer({
          technologiesList: [{
            name: 'Presented Technology',
            id: 1,
          }]
        }, {
          type: DELETE_TECHNOLOGY,
          payload: 1
        })
    ).toEqual({
      technologiesList: []
    });

    expect(rootReducer({
          technologiesList: [
            {
              name: 'Presented Technology',
              id: 1,
            },
            {
              id: 2,
              name: 'New Technology'
            }]
        },
        {
          type: DELETE_TECHNOLOGY,
          payload: 2
        }
        )
    ).toEqual({
      technologiesList: [
        {
          name: 'Presented Technology',
          id: 1,
        }
      ]
    })
  });
});

