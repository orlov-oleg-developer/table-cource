import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v1 } from 'uuid';
import { Hobby, RowData, Town } from '../virtualTableType';
import { getValidationObject } from '../utils/getValidationObject';
import { getDefaultRow } from '../utils/getDefaultRow';
import { tableData } from '../tableData';

export type virtualTableSchemeSchema = {
  table: RowData[] | null;
}

const initialState: virtualTableSchemeSchema = {
  table: tableData.map((data) => ({
    name: getValidationObject(data.name),
    age: getValidationObject(data.age),
    town: getValidationObject(data.town),
    hobby: getValidationObject(data.hobby),
    id: v1(),
  }))
}

const virtualTableSlice = createSlice({
  name: 'virtualTable',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<{ index: number, key: keyof RowData, value: unknown }>) => {
      const { index, key, value } = action.payload;
      if (!state.table) return;
      if (key === 'age' && typeof value === 'number') {
        state.table[index].age.value = value;
        if (value < 18) {
          state.table[index].age.errorText = 'Возраст должен быть выше 18 лет';
          state.table[index].age.status = 'Error';
        } else {
          state.table[index].age.errorText = undefined;
          state.table[index].age.status = 'Success';
        }
      }
      if (key === 'name' && typeof value === 'string') {
        state.table[index].name.value = value;
      }
      if (key === 'town') {
        state.table[index].town.value = value as Town;
      }
      if (key === 'hobby') {
        state.table[index].hobby.value = value as Hobby;
      }
    },
    addRow: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state.table) {
        const row = getDefaultRow();
        row.age.errorText = 'Возраст должен быть выше 18 лет';
        state.table.splice(index + 1, 0, row)
      }
    },
    deleteRow: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.table) {
        state.table = state.table.filter((row) => row.id !== id)
      }
    },
  }
})

export const { reducer: virtualTableReducer, actions: virtualTableActions } = virtualTableSlice
