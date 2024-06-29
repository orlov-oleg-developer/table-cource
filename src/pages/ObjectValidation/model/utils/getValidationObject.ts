import { ValidationObject } from "../objectValidationType";

export const getValidationObject = <T>(value: T): ValidationObject<T> => ({
  value: value,
  errorText: undefined,
  status: 'Success',
})