export class User {
  id: number;
  first_name?: string;
  last_name?: string;
  user_email?: string;
  user_password?: string;
  org_name?: string;

  constructor(
    user_id: number,
    first_name?: string,
    last_name?: string,
    user_email?: string,
    user_password?: string,
    org_name?: string) {
  }
}
