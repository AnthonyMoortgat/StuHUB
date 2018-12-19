export class MemberlistOptions {
  organisationId: number;
  firstNameOption?: string;
  lastNameOption?: string;
  rolOption?: string;
  emailOption?: string;
  birthdateOption?: number;
  organisation?: number;

  constructor(
    organisationId: number,
    firstNameOption?: string,
    lastNameOption?: string,
    rolOption?: string,
    emailOption?: string,
    birthdateOption?: number,
    organisation?: number) {}
}
