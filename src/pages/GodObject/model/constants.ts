import { SortType } from "./godTableTypes";

export const nextSortType: Record<SortType, SortType> = {
  'default': 'asc',
  'asc': 'desc',
  'desc': 'asc',
};
