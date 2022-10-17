import { Role } from '../models/Role';

export const rolesList: Role[] = [
  {
    id: 1,
    name: 'admin',
    privilege: [
      {
        id: 1,
        name: 'add',
      },
      {
        id: 2,
        name: 'delete',
      },
      {
        id: 3,
        name: 'update',
      },
      {
        id: 4,
        name: 'view',
      },
    ],
  },
  {
    id: 2,
    name: 'viewer',
    privilege: [
      {
        id: 4,
        name: 'view',
      },
    ],
  },
];
