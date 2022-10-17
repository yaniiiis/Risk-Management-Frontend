import { Privilege } from './Privilege';

export interface Role {
  id: number;
  name: string;
  privilege: Privilege[];
}
