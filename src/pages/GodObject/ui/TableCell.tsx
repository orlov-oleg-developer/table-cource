import { memo, useCallback } from "react";
import { StringInput } from "../../../shared/ui/Inputs/StringInput";
import { ValidationObject } from "../model/objectValidationType";
import { NumberInput } from "../../../shared/ui/Inputs/NumberInput";
import { TableHeaderCell } from "../model/godTableTypes";

type TableCellProps<RowType> = {
  id: string;
  cellInfo: TableHeaderCell<RowType>
  state: RowType[keyof RowType];
  onBlur: (args: { id: string; key: keyof RowType; value: string | number }) => void;
}

export const TableCell = memo(<T,>({
  id,
  cellInfo,
  state,
  onBlur,
}: TableCellProps<T>) => {
  console.log(`${id}_cell`)
  const onStringBlur = useCallback((e: React.FocusEvent<HTMLInputElement, Element>) => {
    onBlur({ id, key: cellInfo.key, value: e.currentTarget.value })
  }, [onBlur, id, cellInfo.key])

  const onNumberBlur = useCallback((e: React.FocusEvent<HTMLInputElement, Element>) => {
    onBlur({ id, key: cellInfo.key, value: +e.currentTarget.value })
  }, [onBlur, id, cellInfo.key])

  const onSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onBlur({ id, key: cellInfo.key, value: e.currentTarget.value })
  }, [onBlur, id, cellInfo.key])

  return (
    <td>
      {cellInfo.kind === 'string' && (
        <StringInput
          value={(state as ValidationObject<string>).value}
          onBlur={onStringBlur}
          error={(state as ValidationObject<string>).errorText}
        />
      )}
      {cellInfo.kind === 'number' && (
        <NumberInput
          value={(state as ValidationObject<number>).value}
          onBlur={onNumberBlur}
          error={(state as ValidationObject<number>).errorText}
        />
      )}
      {cellInfo.kind === 'select' && (
        <select
          value={(state as ValidationObject<string>).value}
          onChange={onSelectChange}
        >
          {cellInfo.options?.map((option) => (
            <option key={option.value} value={option.value}>{option.name}</option>
          ))}
        </select>
      )}
    </td>
  )
})