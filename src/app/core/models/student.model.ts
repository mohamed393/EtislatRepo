import { User } from './auth.models';

export interface Student {
  selected: boolean;
  id?: number;
  User?: User;
  Groups: { title: string }[];
}
