export class User {
  user_id: number;
  first_name?: string;
  last_name?: string;
  user_email?: string;
  user_password?: string;
  new_password?: string;
  org_name?: string;
  db_name?: string;

  constructor(
    user_id: number,
    first_name?: string,
    last_name?: string,
    user_email?: string,
    user_password?: string,
    new_password?: string,
    org_name?: string,
    db_name?: string) {}
}
