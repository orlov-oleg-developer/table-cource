import { useSelector } from 'react-redux'
import { HStack } from '../../../shared/ui/Stack'
import './EditOnChange.css'
import { getDefaultTable } from '../model/selectors/getDefaultTable';
import { v1 } from 'uuid';
import { hobbies, towns } from '../../../shared/const/tableData';
import { useAppDispatch } from '../../../app/store';
import { defaultSliceActions } from '../model/slices/defaultSlice';
import { RowData } from '../../../shared/types/tableTypes';

export function EditOnChange() {
  const dispatch = useAppDispatch();
  const tableData = useSelector(getDefaultTable);

  const onChange = (args: { index: number, key: keyof RowData, value: unknown }) => {
    dispatch(defaultSliceActions.changeValue(args))
  }

  return (
    <>
      <h1>Edit on chage</h1>

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
              <tr key={v1()}>
                <td>
                  <input
                    value={row.name}
                    type='string'
                    onChange={(e) => onChange({ index: rowIndex, key: 'name', value: e.currentTarget.value })}
                  />
                </td>
                <td>
                  <input
                    value={row.age}
                    type='number'
                    onChange={(e) => onChange({ index: rowIndex, key: 'age', value: +e.currentTarget.value })}
                  />
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
              </tr>
            ))}
          </tbody>
        </table>
      </HStack>
    </>
  )
}
