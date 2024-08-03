import { HStack } from '../../../shared/ui/Stack'
import style from '../../../shared/styles/TableStyles.module.scss'
import currentStyle from './ScrollTable.module.scss'

type TableData = {
  language: string;
  author: string;
  releaseDate: string;
}

export function ScrollTable() {
  const tableData: TableData[] = [
    {
      language: 'C++',
      author: 'Bjarne Stroustrup',
      releaseDate: '1983',
    },
    {
      language: 'Haskell',
      author: '-',
      releaseDate: '1990',
    },
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
      language: 'PHP',
      author: 'Rasmus Lerdorf',
      releaseDate: '8.06.1995',
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
      <h1>Скролл</h1>

      <HStack justify='center' className={currentStyle.tableContainer}>
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
            {tableData.map((data, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{data.language}</td>
                <td>{data.author}</td>
                <td>{data.releaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </HStack>
    </>
  )
}
