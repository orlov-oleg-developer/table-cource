import { useSelector } from 'react-redux'
import { HStack } from '../../../shared/ui/Stack'
import './EditOnBlur.css'
import { getDefaultTable } from '../model/selectors/getDefaultTable';
import { v1 } from 'uuid';
import { hobbies, towns } from '../../../shared/const/tableData';
import { useAppDispatch } from '../../../app/store';
import { defaultSliceActions } from '../model/slices/defaultSlice';
import { RowData } from '../../../shared/types/tableTypes';
import { StringInput } from '../../../shared/ui/Inputs/StringInput';
import { useCallback } from 'react';
import { NumberInput } from '../../../shared/ui/Inputs/NumberInput';
import { TableRow } from '../../../shared/ui/TableRow/TableRow';

export function EditOnBlur() {
  const dispatch = useAppDispatch();
  const tableData = useSelector(getDefaultTable);

  const onChange = useCallback((args: { index: number, key: keyof RowData, value: unknown }) => {
    dispatch(defaultSliceActions.changeValue(args))
  }, [dispatch])

  return (
    <>
      <h1>Edit on blur</h1>

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
              <TableRow key={v1()}>
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
                    {Object.entries(towns).map(([valeu, name]) => (
                      <option value={valeu}>{name}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    value={row.hobby}
                    onChange={(e) => onChange({ index: rowIndex, key: 'hobby', value: e.currentTarget.value })}
                  >
                    {Object.entries(hobbies).map(([valeu, name]) => (
                      <option value={valeu}>{name}</option>
                    ))}
                  </select>
                </td>
              </TableRow>
            ))}
          </tbody>
        </table>
      </HStack>
    </>
  )
}
