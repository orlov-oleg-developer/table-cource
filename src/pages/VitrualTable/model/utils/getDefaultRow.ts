import { v1 } from "uuid";
import { Hobby, Town } from "../virtualTableType";
import { getValidationObject } from "./getValidationObject";

export const getDefaultRow = () => ({
  name: getValidationObject(''),
  age: getValidationObject(0),
  town: getValidationObject<Town>('Moscow'),
  hobby: getValidationObject<Hobby>('Programming'),
  id: v1(),
})