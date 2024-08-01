import { HStack } from '../../../shared/ui/Stack'
import './CombinedColumns.css'

export function CombinedColumns() {
  return (
    <>
      <h1>Таблица</h1>

      <HStack justify='center'>
        <table className='table'>
          <thead>
            <tr>
              <th rowSpan={2}>№</th>
              <th rowSpan={2}>Наименование</th>
              <th rowSpan={2}>Количество</th>
              <th colSpan={2}>Место выдачи</th>
            </tr>
            <tr>
              <th>Москва</th>
              <th>Саратов</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Свитер</td>
              <td>2</td>
              <td>☑</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Джинсы</td>
              <td>6</td>
              <td>☐</td>
              <td>☑</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2}>Всего</th>
              <th>8</th>
              <th colSpan={2}>-</th>
            </tr>
          </tfoot>
          <caption>*Количество товара в таблице может не совпадать с тем, что есть на складе</caption>
        </table>
      </HStack>

      <br />
      <br />

      <HStack justify='center'>
        <table className='table'>
          <thead>
            <tr>
              <th rowSpan={2}>№</th>
              <th rowSpan={2}>Наименование</th>
              <th rowSpan={2}>Цвет</th>
              <th rowSpan={2}>Количество</th>
              <th colSpan={2}>Место выдачи</th>
            </tr>
            <tr>
              <th>Москва</th>
              <th>Саратов</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}>1</td>
              <td rowSpan={2}>Свитер</td>
              <td>белый</td>
              <td>2</td>
              <td>☑</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>черный</td>
              <td>1</td>
              <td>☑</td>
              <td>☐</td>
            </tr>

            <tr>
              <td rowSpan={2}>2</td>
              <td rowSpan={2}>Джинсы</td>
              <td>белые</td>
              <td>6</td>
              <td>☐</td>
              <td>☑</td>
            </tr>
            <tr>
              <td>черные</td>
              <td>6</td>
              <td>☑</td>
              <td>☐</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={3}>Всего</th>
              <th>8</th>
              <th colSpan={2}>-</th>
            </tr>
          </tfoot>
          <caption>*Количество товара в таблице может не совпадать с тем, что есть на складе</caption>
        </table>
      </HStack>
    </>
  )
}
