import { PersonInfo, TechnologiesListDTO } from '../../../interfaces/personal-info';
export interface HomeProps {
  classes: HomeClasses;
  deleteTechnology: any;
  addTechnology: any;
  getPersonData: any;
  getTechnologies: any;
  personInfo: PersonInfo;
  technologiesList: TechnologiesListDTO[];
}

export interface HomeClasses {
  homeContainer: string;
  infoContainer: string;
}

export interface HomeState {
  newTechnology: string;
}