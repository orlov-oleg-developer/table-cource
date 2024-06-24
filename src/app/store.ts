import { configureStore } from '@reduxjs/toolkit'
import { TableSchema, defaultSliceReducer } from '../pages/EditOnChange/model/slices/defaultSlice'
import { useDispatch } from 'react-redux';
import { MappedTableSchema, mappedReducer } from '../pages/MappedData/model/slices/mappedSlice';

export type StateSchema = {
  defaultSliceReducer: TableSchema;
  mappedReducer: MappedTableSchema;
}

export const store = configureStore({
  reducer: {
    defaultSliceReducer,
    mappedReducer,
  }
})

export type AppDispatch = ReturnType<typeof configureStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();