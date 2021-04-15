import { Account } from '../../pages/users/account/accounts.model';

export class User {
  id: number;
  createdAt: Date;
  username: string;
  password: string;
  gender: string;
  firstName?: string;
  AccountAdmin?: any;
  Instructor?: any;
  Student?: any;
  avatar?: string;
  lastName?: string;
  token?: string;
  email?: string;
  active?: boolean;
  phone?: string;
  Account: Account;
  faceImages: string[];
  knuckleImages: string[];
  idImages?: string[];
  scanProcessDate?: Date;
  scanProcessEndDate?: Date;
  expanded = false;
  verified: boolean;
  SpecialSettings;
  WhiteLists;
  ConfigurationItemUsers?: any;
  StudentCustomConfigurations;
  User: { firstName: string; email: string; lastName: string; id: number; phone: string, username: string, gender: boolean };
  Groups: { title: string; id: string }[];
}
