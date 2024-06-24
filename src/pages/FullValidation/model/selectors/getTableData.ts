import { StateSchema } from "../../../../app/store";

export const getTableData = (state: StateSchema) => state.fullValidationReducer.table || [];
export const getTableErrors = (state: StateSchema) => state.fullValidationReducer.errors || {}
