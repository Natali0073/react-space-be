import { ContactsListDTO } from '../../../interfaces/contact';
export interface ContactsListProps {
  classes: any;
  contactsList: ContactsListDTO[];
  getContacts: any;
}