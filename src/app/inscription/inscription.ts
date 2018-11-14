export class Inscription {
  id: number;
  firstName?: string;
  lastName?: string;
  phoneNumber?: number;
  allergy?: string;
  physicalLimitation?: string;
  birthdate?: Date;
  gender?: boolean;
  email?: string;

  constructor(
    id: number,
    firstName?: string,
    lastName?: string,
    phoneNumber?: number,
    allergy?: string,
    physicalLimitation?: string,
    birthdate?: Date,
    gender?: boolean,
    email?: string) {}
}
