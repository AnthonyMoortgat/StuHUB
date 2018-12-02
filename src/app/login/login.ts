export class User {
  id: number;
  user_email?: string;
  user_password?: string;

  constructor(
    user_id: number,
    user_email?: string,
    user_password?: string) {
  }
}
