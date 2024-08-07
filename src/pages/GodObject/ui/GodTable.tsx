import { memo, useCallback, useState } from "react";
import { SortType, TableHeader } from "../model/godTableTypes";
import { nextSortType } from "../model/constants";
import './GodTable.css'
import { ActionButton } from "./ActionButton";
import { TableCell } from "./TableCell";

type GodTableProps<RowType> = {
  header: TableHeader<RowType>;
  data: (RowType & { id: string })[];
  onBlur: (args: { id: string, key: keyof RowType, value: unknown }) => void;
  onAdd?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const GodTable = memo(<T,>({
  header,
  data,
  onBlur,
  onAdd,
  onDelete,
}: GodTableProps<T>) => {

  const [sortTypes, setSortTypes] = useState<Record<keyof T, SortType>>(
    header.reduce((acc, headCell) => ({ ...acc, [headCell.key]: 'default' }), {}) as Record<keyof T, SortType>
  );

  const onSortCb = useCallback((key: keyof T, cb?: (type: SortType) => void) => {
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
            <th
              key={headCell.key.toString()}
              onClick={() => onSortCb(headCell.key, headCell.onSort)}
              className={headCell.onSort ? 'clickable' : ''}
            >
              {`${headCell.title} ${headCell.onSort ? '˅' : ''}`}
            </th>
          ))}
          {onAdd && <th></th>}
          {onDelete && <th></th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {header.map((cellInfo) => (
              <TableCell
                key={`${row.id}_${cellInfo.key.toString()}`}
                id={row.id}
                cellInfo={cellInfo}
                state={row[cellInfo.key]}
                onBlur={onBlur}
              />
            ))}
            {onAdd && (
              <td>
                <ActionButton type='add' id={row.id} cb={onAdd} />
              </td>
            )}
            {onDelete && (
              <td>
                <ActionButton type='delete' id={row.id} cb={onDelete} />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
});
