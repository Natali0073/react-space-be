export interface PersonInfo {
  fullName: string;
  position: string;
  manager: PersonCommon;
  hrManager: PersonCommon;
  department: string;
  id: number,
  email: string;
  mentor: string | null;
  office: string;
  roles: Role[],
  sombraMoney: string | null;
  vacationDaysLeft: number;
}

export interface PersonCommon {
  firstname: string;
  lastname: string;
  id: number;
  corporateEmail: string;
}

export interface Role {
  id: number;
  roleType: string;
}