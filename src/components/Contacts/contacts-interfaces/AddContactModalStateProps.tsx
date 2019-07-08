export interface AddContactModalProps {
  open: boolean;
  classes: AddContactModalClasses;
  onClose: any;
  addContact: any;
}

interface AddContactModalClasses {
  formControl: string;
  selectFormControl: string;
}

export interface AddContactModalState {
  name: string;
  surname: string;
  email: string;
  personalEmail: string;
  position: string;
  office: string;
  phoneOne: string;
  phoneTwo: string;
  skype: string;
  birthDate: string;
  [key: string]: string;
}