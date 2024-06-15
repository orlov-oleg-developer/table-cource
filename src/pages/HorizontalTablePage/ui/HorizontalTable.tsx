import { HStack } from '../../../shared/ui/Stack'
import './HorizontalTable.css'

export function HorizontalTable() {

  const tableData = [
    {
      name: 'Denis',
      age: 24,
      town: 'Москва',
      hobby: 'Программирование',
    },
    {
      name: 'Andrey',
      age: 26,
      town: 'Екатеринбург',
      hobby: 'Программирование',
    },
    {
      name: 'Igor',
      age: 23,
      town: 'Казань',
      hobby: 'Программирование',
    },
    {
      name: 'Oleg',
      age: 27,
      town: 'Краснодар',
      hobby: 'Программирование',
    },
  ]

  return (
    <>
      <h1>Горизонтальная таблица</h1>

      <HStack justify='center'>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              {tableData.map((data) => (
                <th>{data.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ backgroundColor: 'white', color: 'black' }}>Возраст</td>
              {tableData.map((data) => (
                <td>{data.age}</td>
              ))}
            </tr>
            <tr>
              <td style={{ backgroundColor: 'white', color: 'black' }}>Город</td>
              {tableData.map((data) => (
                <td>{data.town}</td>
              ))}
            </tr>
            <tr>
              <td style={{ backgroundColor: 'white', color: 'black' }}>Хобби</td>
              {tableData.map((data) => (
                <td>{data.hobby}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </HStack>
    </>
  )
}
