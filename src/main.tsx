import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Base } from './pages/BasePage/ui/Base.tsx';
import { MainPage } from './pages/MainPage/MainPage.tsx';
import { CombinedColumns } from './pages/CombinedColumnsPage';
import { HorizontalTable } from './pages/HorizontalTablePage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/base",
    element: <Base />,
  },
  {
    path: "/combined-columns",
    element: <CombinedColumns />,
  },
  {
    path: "/horizontal-table",
    element: <HorizontalTable />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
