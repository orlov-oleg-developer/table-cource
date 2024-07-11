import { ValidationObject } from "../virtualTableType";

export const getValidationObject = <T>(value: T): ValidationObject<T> => ({
  value: value,
  errorText: undefined,
  status: 'Success',
})