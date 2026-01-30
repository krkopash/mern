import { User } from '../types/user.types';

export const fetchUsers = (): User[] => {
  return [
  {
    "name": "France",
    "capital": "Paris",
    "population": 67364357,
    "area": 551695,
    "currency": "Euro",
    "subregion": "Western Europe"
  },
  {
    "name": "Germany",
    "capital": "Berlin",
    "population": 83240525,
    "area": 357022,
    "currency": "Euro",
    "subregion": "Western Europe"
  },
  {
    "name": "United States",
    "capital": "Washington, D.C.",
    "population": 331893745,
    "area": 9833517,
    "currency": "USD",
    "subregion": "Northern America",
  },
  {
    "name": "Belgium",
    "capital": "Brussels",
    "population": 11589623,
    "area": 30528,
    "currency": "Euro",
    "subregion": "Western Europe",
  }
];
};
