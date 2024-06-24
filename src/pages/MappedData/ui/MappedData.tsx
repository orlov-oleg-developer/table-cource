import { useSelector } from 'react-redux'
import { HStack } from '../../../shared/ui/Stack'
import './MappedData.css'
import { hobbies, towns } from '../../../shared/const/tableData';
import { useAppDispatch } from '../../../app/store';
import { RowData } from '../../../shared/types/tableTypes';
import { StringInput } from '../../../shared/ui/Inputs/StringInput';
import { useCallback } from 'react';
import { NumberInput } from '../../../shared/ui/Inputs/NumberInput';
import { mappedActions } from '../model/slices/mappedSlice';
import { getMappedTable } from '../model/selectors/getMappedTable';

export function MappedData() {
  const dispatch = useAppDispatch();
  const tableData = useSelector(getMappedTable);

  const onChange = useCallback((args: { index: number, key: keyof RowData, value: unknown }) => {
    dispatch(mappedActions.changeValue(args))
  }, [dispatch])

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
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </HStack>
    </>
  )
}
