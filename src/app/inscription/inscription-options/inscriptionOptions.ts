export class InscriptionOptions {
  organisationId: string;
  firstNameOption?: number;
  lastNameOption?: number;
  phoneNumberOption?: number;
  allergyOption?: number;
  physicalLimitationOption?: number;
  birthdateOption?: number;
  genderOption?: number;
  emailOption?: number;

  constructor(
    organisationId: string,
    firstNameOption?: number,
    lastNameOption?: number,
    phoneNumberOption?: number,
    allergyOption?: number,
    physicalLimitationOption?: number,
    birthdateOption?: number,
    genderOption?: number,
    email?: number) {}
}
