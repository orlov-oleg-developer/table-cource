import { configureStore } from '@reduxjs/toolkit'
import { TableSchema, defaultSliceReducer } from '../pages/EditOnChange/model/slices/defaultSlice'
import { useDispatch } from 'react-redux';
import { MappedTableSchema, mappedReducer } from '../pages/MappedData/model/slices/mappedSlice';
import { FullValidationSchemeSchema, fullValidationReducer } from '../pages/FullValidation/model/slices/fullValidationSlice';
import { ObjectValidationSchemeSchema, objectValidationReducer } from '../pages/ObjectValidation/model/slices/objectValidationSlice';
import { virtualTableReducer, virtualTableSchemeSchema } from '../pages/VitrualTable/model/slices/virtualTableSlice';
import { godObjectSliceReducer, GodObjectSchema } from '../pages/GodObject/model/slices/godObjectSlice';

export type StateSchema = {
  defaultSliceReducer: TableSchema;
  mappedReducer: MappedTableSchema;
  fullValidationReducer: FullValidationSchemeSchema;
  objectValidationReducer: ObjectValidationSchemeSchema;
  virtualTableReducer: virtualTableSchemeSchema;
  godObjectSliceReducer: GodObjectSchema;
}

export const store = configureStore({
  reducer: {
    defaultSliceReducer,
    mappedReducer,
    fullValidationReducer,
    objectValidationReducer,
    virtualTableReducer,
    godObjectSliceReducer,
  }
})

export type AppDispatch = ReturnType<typeof configureStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();