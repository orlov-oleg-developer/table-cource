import { useSelector } from 'react-redux'
import { HStack } from '../../../shared/ui/Stack'
import './ObjectValidation.css'
import { hobbies, towns } from '../../../shared/const/tableData';
import { useAppDispatch } from '../../../app/store';
import { RowData } from '../../../shared/types/tableTypes';
import { StringInput } from '../../../shared/ui/Inputs/StringInput';
import { useCallback } from 'react';
import { NumberInput } from '../../../shared/ui/Inputs/NumberInput';
import { getTableData } from '../model/selectors/getTableData';
import { objectValidationActions } from '../model/slices/objectValidationSlice';

export function ObjectValidation() {
  const dispatch = useAppDispatch();
  const tableData = useSelector(getTableData);

  const onChange = useCallback((args: { index: number, key: keyof RowData, value: unknown }) => {
    dispatch(objectValidationActions.changeValue(args))
  }, [dispatch])

  return (
    <>
      <h1>Object Validation Table</h1>

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
                  <StringInput
                    value={row.name.value}
                    onBlur={(e) => onChange({ index: rowIndex, key: 'name', value: e.currentTarget.value })}
                    error={row.name.errorText}
                  />
                </td>
                <td>
                  <NumberInput
                    value={row.age.value}
                    onBlur={(e) => onChange({ index: rowIndex, key: 'age', value: +e.currentTarget.value })}
                    error={row.age.errorText}
                  />
                </td>
                <td>
                  <select
                    value={row.town.value}
                    onChange={(e) => onChange({ index: rowIndex, key: 'town', value: e.currentTarget.value })}
                  >
                    {Object.entries(towns).map(([value, name]) => (
                      <option key={value} value={value}>{name}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    value={row.hobby.value}
                    onChange={(e) => onChange({ index: rowIndex, key: 'hobby', value: e.currentTarget.value })}
                  >
                    {Object.entries(hobbies).map(([value, name]) => (
                      <option key={value} value={value}>{name}</option>
                    ))}
                  </select>
                </td>
                <td><button onClick={() => dispatch(objectValidationActions.addRow(rowIndex))}>+</button></td>
                <td><button onClick={() => dispatch(objectValidationActions.deleteRow(row.id))}>-</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </HStack>
    </>
  )
}
