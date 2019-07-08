export interface LoginComponentProps {
  classes: any;
}

export interface LoginComponentState {
  email: string;
  password: string;
  redirectMe?: boolean;
  [key: string]: string | boolean | undefined;
}