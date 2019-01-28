import { PersonInfo } from '../../../interfaces/personal-info';
export interface HomeProps {
  classes: HomeClasses;
  deleteTechnology: any;
  addTechnology: any;
  getPersonData: any;
  getTechnologies: any;
  personInfo: PersonInfo;
  technologiesList: string[];
}

interface HomeClasses {
  homeContainer: string;
  infoContainer: string;
}

export interface HomeState {
  newTechnology: string;
}