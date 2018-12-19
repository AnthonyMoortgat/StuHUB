export class Member {
  id: number;
  firstName?: string;
  lastName?: string;
  rol?: string;
  email?: string;
  birthdate?: Date;
  organisation?: string;

  constructor(
  id: number,
  firstName?: string,
  lastName?: string,
  rol?: string,
  email?: string,
  birthdate?: Date,
  organisation?: string) {}
}
