import { useCallback, useState } from "react";
import { NumberInput } from "../../../shared/ui/Inputs/NumberInput";
import { StringInput } from "../../../shared/ui/Inputs/StringInput";
import { SortType, TableHeader } from "../model/godTableTypes";
import { ValidationObject } from "../model/objectValidationType";
import { nextSortType } from "../model/constants";

type GodTableProps<RowType> = {
  header: TableHeader<RowType>;
  data: (RowType & { id: string })[];
  onBlur: (args: { index: number, key: keyof RowType, value: unknown }) => void;
}

export const GodTable = <RowType,>({
  header,
  data,
  onBlur,
}: GodTableProps<RowType>) => {

  const [sortTypes, setSortTypes] = useState<Record<keyof RowType, SortType>>(
    header.reduce((acc, headCell) => ({ ...acc, [headCell.key]: 'default' }), {}) as Record<keyof RowType, SortType>
  );

  const onSortCb = useCallback((key: keyof RowType, cb?: (type: SortType) => void) => {
    if (cb) {
      const newType = nextSortType[sortTypes[key]];
      cb(newType);
      setSortTypes((types) => ({ ...types, [key]: newType }))
    }
  }, [sortTypes])

  return (
    <table className='table'>
      <thead>
        <tr>
          {header.map((headCell) => (
            <th key={headCell.key.toString()} onClick={() => onSortCb(headCell.key, headCell.onSort)}>{headCell.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={row.id}>
            {header.map((cell) => (
              <td key={`${row.id}_${cell.key.toString()}`}>
                {cell.kind === 'string' && (
                  <StringInput
                    value={(row[cell.key] as ValidationObject<string>).value}
                    onBlur={(e) => onBlur({ index: rowIndex, key: cell.key, value: e.currentTarget.value })}
                    error={(row[cell.key] as ValidationObject<string>).errorText}
                  />
                )}
                {cell.kind === 'number' && (
                  <NumberInput
                    value={(row[cell.key] as ValidationObject<number>).value}
                    onBlur={(e) => onBlur({ index: rowIndex, key: cell.key, value: +e.currentTarget.value })}
                    error={(row[cell.key] as ValidationObject<string>).errorText}
                  />
                )}
                {cell.kind === 'select' && (
                  <select
                    value={(row[cell.key] as ValidationObject<string>).value}
                    onChange={(e) => onBlur({ index: rowIndex, key: cell.key, value: e.currentTarget.value })}
                  >
                    {cell.options?.map((option) => (
                      <option key={option.value} value={option.value}>{option.name}</option>
                    ))}
                  </select>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
};
