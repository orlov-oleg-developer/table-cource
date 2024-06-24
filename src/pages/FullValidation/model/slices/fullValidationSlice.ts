import { Hobby, Town } from '../../../../shared/types/tableTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RowDataWithId } from '../../../../shared/types/tableTypes';
import { getDefaultRow, tableData } from '../../../../shared/const/tableData';
import { v1 } from 'uuid';
import { action } from 'mobx';

export type FullValidationSchemeSchema = {
  table: RowDataWithId[] | null;
  errors: Record<string, string>;
}

const initialState: FullValidationSchemeSchema = {
  table: tableData.map((data) => ({ ...data, id: v1() })),
  errors: {}
}

const fullValidationSlice = createSlice({
  name: 'fullValidation',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<{ index: number, key: keyof RowDataWithId, value: unknown }>) => {
      const { index, key, value } = action.payload;
      if (!state.table) return;
      const id = state.table[index].id

      if (key === 'age' && typeof value === 'number') {
        state.table[index].age = value;
        if (value < 18) {
          state.errors[`${id}_age`] = 'Возраст должен быть выше 18 лет'
        } else {
          if (state.errors[`${id}_age`]) delete state.errors[`${id}_age`]
        }
      }
      if (key === 'name' && typeof value === 'string') {
        state.table[index].name = value;
      }
      if (key === 'town') {
        state.table[index].town = value as Town;
      }
      if (key === 'hobby') {
        state.table[index].hobby = value as Hobby;
      }
    },
    addRow: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state.table) state.table.splice(index + 1, 0, getDefaultRow());
    },
    deleteRow: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.table) state.table = state.table.filter((row) => row.id !== id);
    },
  }
})

export const { reducer: fullValidationReducer, actions: fullValidationActions } = fullValidationSlice
