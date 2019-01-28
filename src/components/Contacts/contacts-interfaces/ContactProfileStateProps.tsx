import { ContactsListDTO } from '../../../interfaces/contact';
import { RouteComponentProps } from 'react-router';
export interface ContactProfileProps extends RouteComponentProps<any> {
  classes: ContactProfileClasses;
  getContactById: any;
  contactById: ContactsListDTO;
}

interface ContactProfileClasses {
  icon: string;
}
