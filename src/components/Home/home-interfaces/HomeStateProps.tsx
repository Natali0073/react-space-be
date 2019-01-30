import { PersonInfo, TechnologiesListDTO } from '../../../interfaces/personal-info';
export interface HomeProps {
  deleteTechnology: any;
  addTechnology: any;
  getPersonData: any;
  getTechnologies: any;
  personInfo: PersonInfo;
  technologiesList: TechnologiesListDTO[];
}

export interface HomeState {
  newTechnology: string;
}