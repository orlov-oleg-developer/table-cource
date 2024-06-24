import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
// import { RowDataWithId } from '../../../shared/types/tableTypes';
import tableData from '../model/tableMobx'
import { HStack } from '../../../shared/ui/Stack';
import { StringInput } from '../../../shared/ui/Inputs/StringInput';
import { NumberInput } from '../../../shared/ui/Inputs/NumberInput';
import { getDefaultRow, hobbies, towns } from '../../../shared/const/tableData';
import { RowData } from '../../../shared/types/tableTypes';
import { v1 } from 'uuid';

const TableComponent: React.FC = () => {
  const onChange = useCallback((args: { index: number, key: keyof RowData, value: unknown }) => {
    tableData.changeValue(args);
  }, [])

  const onAddRow = useCallback((index: number) => {
    tableData.addRow(
      getDefaultRow(),
      index
    );
  }, [])

  const onDeleteRow = useCallback((id: string) => {
    tableData.deleteRow(id);
  }, [])

  return (
    <>
      <h1>Mapped Table</h1>

      <HStack justify='center'>
        <table className='table'>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Город</th>
              <th>Хобби</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <tr key={row.id}>
                <td>
                  <StringInput value={row.name} onBlur={(e) => onChange({ index: rowIndex, key: 'name', value: e.currentTarget.value })} />
                </td>
                <td>
                  <NumberInput value={row.age} onBlur={(e) => onChange({ index: rowIndex, key: 'age', value: +e.currentTarget.value })} />
                </td>
                <td>
                  <select
                    value={row.town}
                    onChange={(e) => onChange({ index: rowIndex, key: 'town', value: e.currentTarget.value })}
                  >
                    {Object.entries(towns).map(([value, name]) => (
                      <option key={value} value={value}>{name}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    value={row.hobby}
                    onChange={(e) => onChange({ index: rowIndex, key: 'hobby', value: e.currentTarget.value })}
                  >
                    {Object.entries(hobbies).map(([value, name]) => (
                      <option key={value} value={value}>{name}</option>
                    ))}
                  </select>
                </td>
                <td><button onClick={() => onAddRow(rowIndex)}>+</button></td>
                <td><button onClick={() => onDeleteRow(row.id)}>-</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </HStack>
    </>
  )
};

export default observer(TableComponent);