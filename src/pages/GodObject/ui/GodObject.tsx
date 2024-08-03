import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/store";
import { SortType, TableHeader } from "../model/godTableTypes"
import { RowData } from "../model/objectValidationType"
import { GodTable } from "./GodTable"
import { getTableData } from "../model/selectors/getTableData";
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
      onSort: (type: SortType) => {
        console.log(type)
      },
    },
    {
      key: 'age',
      kind: 'number',
      title: 'Возраст',
      onSort: (type: SortType) => {
        console.log(type)
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

  const onBlur = useCallback((args: { id: string, key: keyof RowData, value: unknown }) => {
    dispatch(godObjectSliceActions.changeValue(args))
  }, [dispatch])

  const onAdd = useCallback((id: string) => {
    dispatch(godObjectSliceActions.addRow(id))
  }, [dispatch])

  const onDelete = useCallback((id: string) => {
    dispatch(godObjectSliceActions.deleteRow(id))
  }, [dispatch])

  return (
    <>
      <h1>God Table</h1>

      <HStack justify='center'>
        <GodTable
          header={tableHeader}
          data={tableData}
          onBlur={onBlur}
          onAdd={onAdd}
          onDelete={onDelete}
        />
      </HStack>
    </>
  )
}