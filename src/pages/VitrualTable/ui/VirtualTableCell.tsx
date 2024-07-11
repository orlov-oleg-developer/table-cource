import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getTableData } from '../model/selectors/getTableData';
import { StringInput } from '../../../shared/ui/Inputs/StringInput';
import { useAppDispatch } from '../../../app/store';
import { RowData } from '../model/virtualTableType';
import { virtualTableActions } from '../model/slices/virtualTableSlice';
import { NumberInput } from '../../../shared/ui/Inputs/NumberInput';
import { hobbies, towns } from '../../../shared/const/tableData';
import './VirtualTable.css'

type VirtualTableCellProps = {
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties
}

export const VirtualTableCell = ({
  columnIndex,
  rowIndex,
  style
}: VirtualTableCellProps) => {
  const tableData = useSelector(getTableData);
  const dispatch = useAppDispatch();
  const onChange = useCallback((args: { index: number, key: keyof RowData, value: unknown }) => {
    dispatch(virtualTableActions.changeValue(args))
  }, [dispatch])
  const row = useMemo(() => tableData[rowIndex], [rowIndex, tableData])

  if (columnIndex === 0) {
    return (
      <div style={style}>
        <StringInput
          value={row.name.value}
          onBlur={(e) => onChange({ index: rowIndex, key: 'name', value: e.currentTarget.value })}
          error={row.name.errorText}
        />
      </div>
    )
  } else if (columnIndex === 1) {
    return (
      <div style={style}>
        <NumberInput
          value={row.age.value}
          onBlur={(e) => onChange({ index: rowIndex, key: 'age', value: e.currentTarget.value })}
          error={row.age.errorText}
        />
      </div>
    )
  } else if (columnIndex === 2) {
    return (
      <div style={style}>
        <select
          value={row.town.value}
          onChange={(e) => onChange({ index: rowIndex, key: 'town', value: e.currentTarget.value })}
        >
          {Object.entries(towns).map(([value, name]) => (
            <option key={value} value={value}>{name}</option>
          ))}
        </select>
      </div>
    )
  } else if (columnIndex === 3) {
    return (
      <div style={style}>
        <select
          value={row.hobby.value}
          onChange={(e) => onChange({ index: rowIndex, key: 'hobby', value: e.currentTarget.value })}
        >
          {Object.entries(hobbies).map(([value, name]) => (
            <option key={value} value={value}>{name}</option>
          ))}
        </select>
      </div>
    )
  } else if (columnIndex === 4) {
    return (
      <div style={style}>
        <button onClick={() => dispatch(virtualTableActions.addRow(rowIndex))}>+</button>
      </div>
    )
  } else if (columnIndex === 5) {
    return (
      <div style={style}>
        <button onClick={() => dispatch(virtualTableActions.deleteRow(row.id))}>-</button>
      </div>
    )
  }
}
