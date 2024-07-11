import { Link } from "react-router-dom"
import { routeConfig } from "../../shared/config/routeConfig"

export const MainPage = () => {
  return (
    <>
      <ul>
        {Object.values(routeConfig).filter((route) => route.path !== '*' && route.path !== '/').map((route) => (
          <li key={route.path}><Link to={route.path ?? ''}>{route.title}</Link></li>
        ))}
      </ul>
    </>
  )
}