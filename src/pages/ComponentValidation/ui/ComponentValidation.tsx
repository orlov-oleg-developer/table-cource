import { useSelector } from 'react-redux'
import { HStack } from '../../../shared/ui/Stack'
import './ComponentValidation.css'
import { hobbies, towns } from '../../../shared/const/tableData';
import { useAppDispatch } from '../../../app/store';
import { RowData } from '../../../shared/types/tableTypes';
import { useCallback } from 'react';
import { mappedActions } from '../model/slices/mappedSlice';
import { getMappedTable } from '../model/selectors/getMappedTable';
import { ValidatingInput } from './ValidatingInput/ValidatingInput';

export function ComponentValidation() {
  const dispatch = useAppDispatch();
  const tableData = useSelector(getMappedTable);

  const onChange = useCallback((args: { index: number, key: keyof RowData, value: unknown }) => {
    dispatch(mappedActions.changeValue(args))
  }, [dispatch])

  const onValidateName = useCallback((event: React.FocusEvent<HTMLInputElement, Element>) => {
    const name = event.currentTarget.value;
    if (name.length < 3) {
      return 'Длина имени должна быть больше 2 символов'
    }
  }, [])
  const onValidateAge = useCallback((event: React.FocusEvent<HTMLInputElement, Element>) => {
    const age = +event.currentTarget.value;
    if (age <= 18) {
      return 'Возраст должен быть выше 18 лет'
    }
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
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={row.id}>
                <td>
                  <ValidatingInput
                    value={row.name}
                    onBlur={(e) => onChange({ index: rowIndex, key: 'name', value: e.currentTarget.value })}
                    onValidate={onValidateName}
                  />
                </td>
                <td>
                  <ValidatingInput
                    value={row.age}
                    onBlur={(e) => onChange({ index: rowIndex, key: 'age', value: +e.currentTarget.value })}
                    onValidate={onValidateAge}
                  />
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
