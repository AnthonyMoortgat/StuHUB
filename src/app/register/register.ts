export class User {
  id: number;
  txtFirstname?: string;
  txtLastname?: string;
  txtEmail?: string;
  txtPassword?: string;

  constructor(
    user_id: number,
    first_name?: string,
    last_name?: string,
    user_email?: string,
    user_password?: string) {}
}
