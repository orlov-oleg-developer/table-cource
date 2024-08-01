import { StateSchema } from "../../../../app/store";

export const getTableData = (state: StateSchema) => state.objectValidationReducer.table || [];
