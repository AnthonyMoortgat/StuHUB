export class User {
  user_id: number;
  txtFirstname?: string;
  txtLastname?: string;
  txtEmail?: string;
  txtPassword?: string;
  txtOrgname?: string;

  constructor(
    user_id: number,
    first_name?: string,
    last_name?: string,
    user_email?: string,
    user_password?: string,
    org_name?: string) {}
}
