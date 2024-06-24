import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Base } from './pages/BasePage/ui/Base.tsx';
import { MainPage } from './pages/MainPage/MainPage.tsx';
import { CombinedColumns } from './pages/CombinedColumnsPage';
import { HorizontalTable } from './pages/HorizontalTablePage';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { EditOnChange } from './pages/EditOnChange';
import { EditOnBlur } from './pages/EditOnBlur/ui/EditOnBlur.tsx';
import { MappedData } from './pages/MappedData/index.ts';
import MobxData from './pages/MobxData/ui/MobxData.tsx';
import { ReactHookForm } from './pages/ReactHookForm/ui/ReactHookForm.tsx';
import { FullValidation } from './pages/FullValidation/ui/FullValidation.tsx';

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
  {
    path: "/edit-on-chage",
    element: <EditOnChange />,
  },
  {
    path: "/edit-on-blur",
    element: <EditOnBlur />,
  },
  {
    path: "/mapped-table",
    element: <MappedData />,
  },
  {
    path: "/mobx",
    element: <MobxData />,
  },
  {
    path: "/react-hook-form",
    element: <ReactHookForm />,
  },
  {
    path: "/full-validation",
    element: <FullValidation />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
