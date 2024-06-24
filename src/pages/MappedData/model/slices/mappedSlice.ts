import { Hobby, Town } from '../../../../shared/types/tableTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RowDataWithId } from '../../../../shared/types/tableTypes';
import { tableData } from '../../../../shared/const/tableData';
import { v1 } from 'uuid';

export type MappedTableSchema = {
  table: RowDataWithId[] | null;
}

const initialState: MappedTableSchema = {
  table: tableData.map((data) => ({ ...data, id: v1() })),
}

const mappedSlice = createSlice({
  name: 'mappedTable',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<{ index: number, key: keyof RowDataWithId, value: unknown }>) => {
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

export const { reducer: mappedReducer, actions: mappedActions } = mappedSlice
