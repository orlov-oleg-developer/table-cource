import { HStack } from '../../../shared/ui/Stack'
import './Base.css'

export function Base() {
  return (
    <>
      <h1>Таблица</h1>

      <HStack justify='center'>
        <table className='table'>
          <thead>
            <tr>
              <th>№</th>
              <th>Наименование</th>
              <th>Количество</th>
              <th>В наличии</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Свитер</td>
              <td>2</td>
              <td>☑</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Джинсы</td>
              <td>6</td>
              <td>☐</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Всего</th>
              <th>8</th>
              <th>-</th>
            </tr>
          </tfoot>
          <caption>*Количество товара в таблице может не совпадать с тем, что есть на складе</caption>
        </table>
      </HStack>
    </>
  )
}
