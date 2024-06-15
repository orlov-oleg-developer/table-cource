import { Link } from "react-router-dom"

export const MainPage = () => {
  return (
    <>
      <ul>
        <li><Link to={`/base`}>Base</Link></li>
        <li><Link to={`/combined-columns`}>Объединенные столбцы и строки</Link></li>
        <li><Link to={`/horizontal-table`}>Горизонтальная таблица</Link></li>
      </ul>
    </>
  )
}