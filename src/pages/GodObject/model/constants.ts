import { SortType } from "./godTableTypes";

export const nextSortType: Record<SortType, SortType> = {
  'default': 'up',
  'up': 'down',
  'down': 'up',
};
