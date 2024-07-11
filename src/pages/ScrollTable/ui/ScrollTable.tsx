import { HStack } from '../../../shared/ui/Stack'
import './ScrollTable.css'

export function ScrollTable() {

  const tableData = [
    {
      number: 1,
      name: 'Denis',
      age: 24,
      town: 'Москва',
      hobby: 'Программирование',
    },
    {
      number: 2,
      name: 'Andrey',
      age: 26,
      town: 'Екатеринбург',
      hobby: 'Программирование',
    },
    {
      number: 3,
      name: 'Igor',
      age: 23,
      town: 'Казань',
      hobby: 'Программирование',
    },
    {
      number: 4,
      name: 'Oleg',
      age: 27,
      town: 'Краснодар',
      hobby: 'Программирование',
    },
    {
      number: 5,
      name: 'Denis',
      age: 24,
      town: 'Москва',
      hobby: 'Программирование',
    },
    {
      number: 6,
      name: 'Andrey',
      age: 26,
      town: 'Екатеринбург',
      hobby: 'Программирование',
    },
    {
      number: 7,
      name: 'Igor',
      age: 23,
      town: 'Казань',
      hobby: 'Программирование',
    },
    {
      number: 8,
      name: 'Oleg',
      age: 27,
      town: 'Краснодар',
      hobby: 'Программирование',
    },
  ]

  return (
    <>
      <h1>Скролл</h1>

      <HStack justify='center' className='tableContainer'>
        <table className='table'>
          <thead>
            <tr>
              <th>№</th>
              <th>Возраст</th>
              <th>Город</th>
              <th>Хобби</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr>
                <td>{data.number}</td>
                <td>{data.age}</td>
                <td>{data.town}</td>
                <td>{data.hobby}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </HStack>
    </>
  )
}
