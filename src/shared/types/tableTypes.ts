export type Town = 'Moscow' | 'Ekaterinburg' | 'Kazan' | 'Krasnodar';
export type Hobby = 'Programming' | 'Design' | 'Sport';

export type RowData = {
  name: string;
  age: number;
  town: Town;
  hobby: Hobby;
}

export type RowDataWithId = {
  name: string;
  age: number;
  town: Town;
  hobby: Hobby;
  id: string;
}