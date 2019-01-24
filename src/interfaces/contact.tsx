export interface ContactsListDTO {
  birthDate: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  office: string;
  personalEmail: string;
  phoneOne: string;
  phoneTwo: string | null,
  position: string;
  skype: string;
}
export interface Contact {
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneOne: string;
  phoneTwo: string | null;
  email: string;
  personalEmail: string;
  skype: string;
  position: string;
  office: string;
}