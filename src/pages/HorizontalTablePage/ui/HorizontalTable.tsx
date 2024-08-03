import { HStack } from '../../../shared/ui/Stack'
import style from '../../../shared/styles/TableStyles.module.scss'

type TableData = {
  language: string;
  author: string;
  releaseDate: string;
}

export function HorizontalTable() {

  const tableData: TableData[] = [
    {
      language: 'Python',
      author: 'Guido van Rossum',
      releaseDate: '20.02.1991',
    },
    {
      language: 'Java',
      author: 'James Arthur Gosling',
      releaseDate: '23.05.1995',
    },
    {
      language: 'JavaScript',
      author: 'Brendan Eich',
      releaseDate: '4.12.1995',
    },
    {
      language: 'C#',
      author: 'Anders Hejlsberg',
      releaseDate: '2001',
    },
  ]

  return (
    <>
      <h1>Горизонтальная таблица</h1>

      <HStack justify='center'>
        <table className={style.table}>
          <thead>
            <tr>
              <th></th>
              {tableData.map((_, i) => (
                <th>{i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={style.boldText}>Язык программирования</td>
              {tableData.map((data) => (
                <td>{data.language}</td>
              ))}
            </tr>
            <tr>
              <td className={style.boldText}>Автор</td>
              {tableData.map((data) => (
                <td>{data.author}</td>
              ))}
            </tr>
            <tr>
              <td className={style.boldText}>Релиз</td>
              {tableData.map((data) => (
                <td>{data.releaseDate}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </HStack>
    </>
  )
}
