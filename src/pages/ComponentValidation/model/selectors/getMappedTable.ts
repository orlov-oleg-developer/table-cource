import { StateSchema } from "../../../../app/store";

export const getMappedTable = (state: StateSchema) => state.mappedReducer.table || [];
