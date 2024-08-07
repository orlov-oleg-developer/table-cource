import { StateSchema } from "../../../../app/store";

export const getGodObjectData = (state: StateSchema) => state.godObjectSliceReducer.table || [];
