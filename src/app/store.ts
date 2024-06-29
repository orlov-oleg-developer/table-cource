import { configureStore } from '@reduxjs/toolkit'
import { TableSchema, defaultSliceReducer } from '../pages/EditOnChange/model/slices/defaultSlice'
import { useDispatch } from 'react-redux';
import { MappedTableSchema, mappedReducer } from '../pages/MappedData/model/slices/mappedSlice';
import { FullValidationSchemeSchema, fullValidationReducer } from '../pages/FullValidation/model/slices/fullValidationSlice';
import { ObjectValidationSchemeSchema, objectValidationReducer } from '../pages/ObjectValidation/model/slices/objectValidationSlice';

export type StateSchema = {
  defaultSliceReducer: TableSchema;
  mappedReducer: MappedTableSchema;
  fullValidationReducer: FullValidationSchemeSchema;
  objectValidationReducer: ObjectValidationSchemeSchema;
}

export const store = configureStore({
  reducer: {
    defaultSliceReducer,
    mappedReducer,
    fullValidationReducer,
    objectValidationReducer
  }
})

export type AppDispatch = ReturnType<typeof configureStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();