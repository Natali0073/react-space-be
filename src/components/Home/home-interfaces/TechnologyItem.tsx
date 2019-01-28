import { TechnologiesListDTO } from '../../../interfaces/personal-info';
export interface TechnologyItemProps {
  item: TechnologiesListDTO;
  index: number;
  handleDelete: any;
}