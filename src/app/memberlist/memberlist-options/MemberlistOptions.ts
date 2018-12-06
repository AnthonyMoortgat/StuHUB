export class MemberlistOptions {
  organisationId: number;
  firstNameOption?: string;
  lastNameOption?: string;
  rolOption?: string;
  emailOption?: string;
  birthdateOption?: number;

  constructor(
    organisationId: number,
    firstNameOption?: string,
    lastNameOption?: string,
    rolOption?: string,
    emailOption?: string,
    birthdateOption?: number) {}
}
