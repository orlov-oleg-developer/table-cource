import { Hobby, Town } from './../../../../shared/types/tableTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RowData } from '../../../../shared/types/tableTypes';
import { tableData } from '../../../../shared/const/tableData';

export type TableSchema = {
  table: RowData[] | null;
}

const initialState: TableSchema = {
  table: tableData,
}

const defaultSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<{ index: number, key: keyof RowData, value: unknown }>) => {
      const { index, key, value } = action.payload;
      if (!state.table) return;
      if (key === 'age' && typeof value === 'number') {
        state.table[index].age = value;
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
  }
})

export const { reducer: defaultSliceReducer, actions: defaultSliceActions } = defaultSlice
