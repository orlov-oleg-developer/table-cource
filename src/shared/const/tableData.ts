import { v1 } from "uuid";
import { RowData, Town, Hobby, RowDataWithId } from "../types/tableTypes";

export const towns: Record<Town, string> = {
  'Moscow': 'Москва',
  'Ekaterinburg': 'Екатеринбург',
  'Kazan': 'Казань',
  'Krasnodar': 'Краснодар',
}

export const hobbies: Record<Hobby, string> = {
  'Programming': 'Программирование',
  'Design': 'Дизайн',
  'Sport': 'Спорт',
}

export const tableData: RowData[] = [
  {
    name: 'Denis',
    age: 24,
    town: 'Moscow',
    hobby: 'Programming',
  },
  {
    name: 'Andrey',
    age: 26,
    town: 'Ekaterinburg',
    hobby: 'Design',
  },
  {
    name: 'Igor',
    age: 23,
    town: 'Kazan',
    hobby: 'Sport',
  },
  {
    name: 'Oleg',
    age: 27,
    town: 'Krasnodar',
    hobby: 'Sport',
  },
]

export const getDefaultRow = (): RowDataWithId => ({
  name: '',
  age: 0,
  town: 'Moscow',
  hobby: 'Programming',
  id: v1(),
});
