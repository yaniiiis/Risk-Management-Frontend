import { Role } from '../models/Role';

export const rolesList: Role[] = [
  {
    id: 1,
    name: 'Manager Risque ',
    privilege_ids: [1, 2, 3, 4, 5, 6, 7, 8, 10],
  },
  {
    id: 2,
    name: 'Analyste Risque ',
    privilege_ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },

  {
    id: 3,
    name: 'Contrôleur ',
    privilege_ids: [1, 2, 3, 4, 5, 6, 7, 8, 10],
  },
  {
    id: 4,
    name: 'Viewer',
    privilege_ids: [1, 2, 4, 8],
  },
  {
    id: 5,
    name: 'User ',
    privilege_ids: [1, 2, 4, 7, 8],
  },
  {
    id: 6,
    name: 'Administrateur ',
    privilege_ids: [1, 2, 3, 6, 7, 8, 10],
  },
];
