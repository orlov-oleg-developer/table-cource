import { StateSchema } from "../../../../app/store";

export const getDefaultTable = (state: StateSchema) => state.defaultSliceReducer.table || [];
