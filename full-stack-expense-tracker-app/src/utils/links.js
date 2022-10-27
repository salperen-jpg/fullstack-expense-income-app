import {
  MdAccountBalanceWallet,
  MdAddTask,
  MdOutlineChargingStation,
} from 'react-icons/md';

export const links = [
  {
    id: 3,
    path: '/dashboard',
    text: 'stats',
    icon: <MdOutlineChargingStation />,
  },
  {
    id: 1,
    path: '/dashboard/all-balance',
    text: 'all balance',
    icon: <MdAccountBalanceWallet />,
  },
  {
    id: 2,
    path: '/dashboard/add-balance',
    text: 'add balance',
    icon: <MdAddTask />,
  },
];
