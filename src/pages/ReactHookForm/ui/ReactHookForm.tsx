import { useSelector } from 'react-redux'
import { HStack } from '../../../shared/ui/Stack'
import './ReactHookForm.css'
import { getDefaultRow, hobbies, towns } from '../../../shared/const/tableData';
import { useAppDispatch } from '../../../app/store';
import { getMappedTable } from '../../MappedData';
import { useFieldArray, useForm } from 'react-hook-form';

export function ReactHookForm() {
  const dispatch = useAppDispatch();
  const tableData = useSelector(getMappedTable);

  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      table: tableData
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'table'
  });

  return (
    <>
      <h1>React Hook Form</h1>

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
            {tableData.map((row, rowIndex) => (
              <tr key={row.id}>
                <td>
                  <input {...register(`table.${rowIndex}.name`)} />
                  {/* <StringInput value={row.name} onBlur={(e) => onChange({ index: rowIndex, key: 'name', value: e.currentTarget.value })} /> */}
                </td>
                <td>
                  <input {...register(`table.${rowIndex}.age`)} type="number" />
                  {/* <NumberInput value={row.age} onBlur={(e) => onChange({ index: rowIndex, key: 'age', value: +e.currentTarget.value })} /> */}
                </td>
                <td>
                  <select
                    {...register(`table.${rowIndex}.town`)}
                  >
                    {Object.entries(towns).map(([value, name]) => (
                      <option key={value} value={value}>{name}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    {...register(`table.${rowIndex}.hobby`)}
                  >
                    {Object.entries(hobbies).map(([value, name]) => (
                      <option key={value} value={value}>{name}</option>
                    ))}
                  </select>
                </td>
                <td><button onClick={() => append(getDefaultRow())}>+</button></td>
                <td><button onClick={() => remove(rowIndex)}>-</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </HStack>
    </>
  )
}
