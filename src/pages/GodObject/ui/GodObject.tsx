import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/store";
import { TableHeader } from "../model/godTableTypes"
import { RowData } from "../model/objectValidationType"
import { GodTable } from "./GodTable"
import { getTableData } from "../model/selectors/getTableData";
import './ObjectValidation.css'
import { HStack } from "../../../shared/ui/Stack";
import { useCallback } from "react";
import { hobbies, towns } from "../../VitrualTable/model/tableData";
import { godObjectSliceActions } from "../model/slices/godObjectSlice";

export const GodObject = () => {
  const dispatch = useAppDispatch();
  const tableData = useSelector(getTableData);

  const tableHeader: TableHeader<RowData> = [
    {
      key: 'name',
      kind: 'string',
      title: 'Имя',
      onSort: (type: 'up' | 'down' | 'default') => {
        dispatch(godObjectSliceActions.sortTable({ key: 'name', sortType: type }))
      },
    },
    {
      key: 'age',
      kind: 'number',
      title: 'Возраст',
      onSort: (type: 'up' | 'down' | 'default') => {
        dispatch(godObjectSliceActions.sortTable({ key: 'age', sortType: type }))
      },
    },
    {
      key: 'town',
      kind: 'select',
      title: 'Город',
      options: Object.entries(towns).map(([value, name]) => ({
        value: value,
        name: name,
        disabled: false
      }))
    },
    {
      key: 'hobby',
      kind: 'select',
      title: 'Хобби',
      options: Object.entries(hobbies).map(([value, name]) => ({
        value: value,
        name: name,
        disabled: false
      }))
    },
  ]

  const onBlur = useCallback((args: { index: number, key: keyof RowData, value: unknown }) => {
    dispatch(godObjectSliceActions.changeValue(args))
  }, [dispatch])

  return (
    <>
      <h1>God Table</h1>

      <HStack justify='center'>
        <GodTable header={tableHeader} data={tableData} onBlur={onBlur} />
      </HStack>
    </>
  )
}