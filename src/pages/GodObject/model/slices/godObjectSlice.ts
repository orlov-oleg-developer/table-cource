import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { tableData } from '../../../../shared/const/tableData';
import { v1 } from 'uuid';
import { Hobby, RowData, Town } from '../objectValidationType';
import { getValidationObject } from '../utils/getValidationObject';
import { getDefaultRow } from '../utils/getDefaultRow';
import { SortType } from '../godTableTypes';

export type GodObjectSchema = {
  table: RowData[] | null;
}

const initialState: GodObjectSchema = {
  table: tableData.map((data) => ({
    name: getValidationObject(data.name),
    age: getValidationObject(data.age),
    town: getValidationObject(data.town),
    hobby: getValidationObject(data.hobby),
    id: v1(),
  }))
}

const godObjectSlice = createSlice({
  name: 'godObject',
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
    sortTable: (state, action: PayloadAction<{ key: keyof RowData; sortType: SortType }>) => {
      const { key, sortType } = action.payload;
      if (state.table) {
        state.table = state.table.sort((a, b) => {
          if (sortType === 'up') {
            return a[key].value - b[key].value
          } else {
            return b[key].value - a[key].value
          }
        })
      }
    }
  }
})

export const { reducer: godObjectSliceReducer, actions: godObjectSliceActions } = godObjectSlice
