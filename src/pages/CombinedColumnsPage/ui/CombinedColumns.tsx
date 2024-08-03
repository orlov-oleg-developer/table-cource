import { HStack } from '../../../shared/ui/Stack'
import style from '../../../shared/styles/TableStyles.module.scss'

export function CombinedColumns() {
  return (
    <>
      <h1>Таблица</h1>

      <HStack justify='center'>
        <table className={style.table}>
          <thead>
            <tr>
              <th rowSpan={2}>№</th>
              <th rowSpan={2}>Язык программирования</th>
              <th rowSpan={2}>Автор</th>
              <th colSpan={2} style={{ textAlign: 'center' }}>Релизы</th>
            </tr>
            <tr>
              <th>Первый</th>
              <th>Последний</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Java</td>
              <td>James Arthur Gosling</td>
              <td>23.05.1995</td>
              <td>19.03.2024</td>
            </tr>
            <tr>
              <td>2</td>
              <td>JavaScript</td>
              <td>Brendan Eich</td>
              <td>4.12.1995</td>
              <td>27.03.2024</td>
            </tr>
          </tbody>
          <caption>*Более подробную информацию вы можете найти в интернете</caption>
        </table>
      </HStack>

      <br />
      <br />

      <HStack justify='center'>
        <table className={style.table}>
          <thead>
            <tr>
              <th rowSpan={2}>№</th>
              <th rowSpan={2}>Типизация</th>
              <th rowSpan={2}>Язык программирования</th>
              <th rowSpan={2}>Автор</th>
              <th colSpan={2} style={{ textAlign: 'center' }}>Релизы</th>
            </tr>
            <tr>
              <th>Первый</th>
              <th>Последний</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}>1</td>
              <td rowSpan={2}>Статическая</td>
              <td>Java</td>
              <td>James Arthur Gosling</td>
              <td>23.05.1995</td>
              <td>19.03.2024</td>
            </tr>
            <tr>
              <td>C#</td>
              <td>Anders Hejlsberg</td>
              <td>2001</td>
              <td>14.11.2023</td>
            </tr>
            <tr>
              <td rowSpan={2}>2</td>
              <td rowSpan={2}>Динамическая</td>
              <td>JavaScript</td>
              <td>Brendan Eich</td>
              <td>4.12.1995</td>
              <td>27.03.2024</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>Guido van Rossum</td>
              <td>20.02.1991</td>
              <td>6.06.2024</td>
            </tr>
          </tbody>
          <caption>*Более подробную информацию вы можете найти в интернете</caption>
        </table>
      </HStack>
    </>
  )
}
