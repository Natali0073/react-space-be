import { PersonInfo } from './Home';
export const homeData: PersonInfo = {
  id: 90,
  department: 'Delivery',
  email: 'natalia.makarchuk@sombrainc.com',
  fullName: 'Nataliia Makarchuk',
  hrManager: {
    id: 108,
    firstname: 'Nataliia',
    lastname: 'Shulzhenko',
    corporateEmail: 'natalia.shulzhenko@sombrainc.com',
  },
  manager: {
    id: 83,
    firstname: 'Orysia',
    lastname: 'Marukhno',
    corporateEmail: 'orysia.marukhno@sombrainc.com',
  },
  mentor: null,
  office: 'LVIV',
  position: 'Middle Front-end developer',
  roles: [
    {
      id: 9,
      roleType: 'ROLE_USER'
    }
  ],
  sombraMoney: null,
  vacationDaysLeft: 1,
};
