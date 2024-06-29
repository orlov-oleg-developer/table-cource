import { Link } from "react-router-dom"

export const MainPage = () => {
  return (
    <>
      <ul>
        <li><Link to={`/base`}>Base</Link></li>
        <li><Link to={`/combined-columns`}>Объединенные столбцы и строки</Link></li>
        <li><Link to={`/horizontal-table`}>Горизонтальная таблица</Link></li>
        <li><Link to={`/edit-on-chage`}>Edit on chage</Link></li>
        <li><Link to={`/edit-on-blur`}>Edit on blur</Link></li>
        <li><Link to={`/mapped-table`}>Mapped Table</Link></li>
        <li><Link to={`/mobx`}>Mobx Data</Link></li>
        <li><Link to={`/react-hook-form`}>React hook form</Link></li>
        <li><Link to={`/full-validation`}>Full validation</Link></li>
        <li><Link to={`/object-validation`}>Object validation</Link></li>
      </ul>
    </>
  )
}