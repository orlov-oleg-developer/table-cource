import { HStack } from '../../../shared/ui/Stack'
import style from '../../../shared/styles/TableStyles.module.scss'

export function Base() {
  return (
    <>
      <h1>Базовая вёрстка</h1>

      <HStack justify='center'>
        <table className={style.table}>
          <thead>
            <tr>
              <th>№</th>
              <th>Язык программирования</th>
              <th>Автор</th>
              <th>Год создания</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Java</td>
              <td>James Arthur Gosling</td>
              <td>1995</td>
            </tr>
            <tr>
              <td>2</td>
              <td>JavaScript</td>
              <td>Brendan Eich</td>
              <td>1995</td>
            </tr>
          </tbody>
          <caption>*Более подробную информацию вы можете найти в интернете</caption>
        </table>
      </HStack>
    </>
  )
}
