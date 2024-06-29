export type Town = 'Moscow' | 'Ekaterinburg' | 'Kazan' | 'Krasnodar';
export type Hobby = 'Programming' | 'Design' | 'Sport';

export type RowData = {
  name: string;
  age: number;
  town: Town;
  hobby: Hobby;
}

export type RowDataWithId = RowData & {
  id: string;
}