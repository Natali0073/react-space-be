import React from 'react';
import {
  ADD_TECHNOLOGY, DELETE_TECHNOLOGY, PERSON_INFO_LOADED,
  TECHNOLOGIES_LOADED
} from '../../constants/action-types';
import { addTechnology, deleteTechnology, getPersonData, getTechnologies } from '../../redux/actions/index';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import rootReducer from '../../redux/reducers/index';
import { homeData, technologiesListMock } from './home-mock';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Home} from './Home';
import configureStore from 'redux-mock-store'

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
let wrapper;
let store;

Enzyme.configure({adapter: new Adapter()});

describe('actions', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    // wrapper = shallow(<Home store={store}/>)
  });

  afterEach(() => {
    fetchMock.restore()
  });

  it('should be defined', () => {
    expect(Home).toBeDefined();
  });

  it('should render correctly', () => {
    const component = shallow(<Home store={store}/>);

    expect(component).toMatchSnapshot();
  });

  // it('should add technology on button click', () => {
  //   const { enzymeWrapper, props } = setup();
  //   const button = enzymeWrapper.find('#test');
  //   button.props().onClick();
  //   expect(props.technologiesList.length).toBe(props.technologiesList.length + 1);
  // });
  //
  // it('should click on button', () => {
  //   const component = mount(<Home />);
  //   component
  //           .find('#test')
  //           .simulate('onclick');
  //   expect(component).toMatchSnapshot();
  //   component.unmount();
  // });

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

