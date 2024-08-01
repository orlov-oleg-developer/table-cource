export type Town = 'Moscow' | 'Ekaterinburg' | 'Kazan' | 'Krasnodar';
export type Hobby = 'Programming' | 'Design' | 'Sport';
export type Status = 'Error' | 'Warning' | 'Success';

export type ValidationObject<T> = {
  value: T;
  errorText?: string;
  status: Status;
}

export type RowData = {
  id: string;
  name: ValidationObject<string>;
  age: ValidationObject<number>;
  town: ValidationObject<Town>;
  hobby: ValidationObject<Hobby>;
}