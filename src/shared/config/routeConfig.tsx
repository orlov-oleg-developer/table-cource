import { RouteObject } from "react-router-dom";
import { Base } from "../../pages/BasePage";
import { CombinedColumns } from "../../pages/CombinedColumnsPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import { HorizontalTable } from "../../pages/HorizontalTablePage";
import { ScrollTable } from "../../pages/ScrollTable";
import { EditOnChange } from "../../pages/EditOnChange";
import { EditOnBlur } from "../../pages/EditOnBlur/ui/EditOnBlur";
import { MappedData } from "../../pages/MappedData";
import MobxData from "../../pages/MobxData/ui/MobxData";
import { ReactHookForm } from "../../pages/ReactHookForm/ui/ReactHookForm";
import { FullValidation } from "../../pages/FullValidation/ui/FullValidation";
import { ObjectValidation } from "../../pages/ObjectValidation/ui/ObjectValidation";
import { VirtualTable } from "../../pages/VitrualTable/ui/VirtualTable";
import { ComponentValidation } from "../../pages/ComponentValidation/ui/ComponentValidation";

export enum AppRoutes {
    MAIN = 'main',
    BASE = 'base',
    COMBINED_COLUMNS = 'combinedColumns',
    HORIZONTAL_TABLE = 'horizontalTable',
    SCROLL = 'scroll',
    EDIT_ON_CHANGE = 'editOnChange',
    EDIT_ON_BLUR = 'editOnBlur',
    MAPPED_TABLE = 'mappedTable',
    MOBX = 'mobx',
    REACT_HOOK_FORM = 'reactHookForm',
    COMPONENT_VALIDATION = 'componentValidation',
    FULL_VALIDATION = 'fullValidation',
    Object_VALIDATION = 'objectValidation',
    VIRTUAL_TABLE = 'virtualTable',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.BASE]: '/base',
    [AppRoutes.COMBINED_COLUMNS]: '/combinedColumns',
    [AppRoutes.HORIZONTAL_TABLE]: '/horizontalTable',
    [AppRoutes.SCROLL]: '/scroll',
    [AppRoutes.EDIT_ON_CHANGE]: '/editOnChange',
    [AppRoutes.EDIT_ON_BLUR]: '/editOnBlur',
    [AppRoutes.MAPPED_TABLE]: '/mappedTable',
    [AppRoutes.MOBX]: '/mobx',
    [AppRoutes.REACT_HOOK_FORM]: '/reactHookForm',
    [AppRoutes.COMPONENT_VALIDATION]: '/componentValidation',
    [AppRoutes.FULL_VALIDATION]: '/fullValidation',
    [AppRoutes.Object_VALIDATION]: '/objectValidation',
    [AppRoutes.VIRTUAL_TABLE]: '/virtualTable',
    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteObject & { title: string }> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        title: 'Основная страница'
    },
    [AppRoutes.BASE]: {
        path: RoutePath.base,
        element: <Base />,
        title: 'База',
    },
    [AppRoutes.COMBINED_COLUMNS]: {
        path: RoutePath.combinedColumns,
        element: <CombinedColumns />,
        title: 'Объединенные столбцы и строки',
    },
    [AppRoutes.HORIZONTAL_TABLE]: {
        path: RoutePath.horizontalTable,
        element: <HorizontalTable />,
        title: 'Горизонтальная таблица',
    },
    [AppRoutes.SCROLL]: {
        path: RoutePath.scroll,
        element: <ScrollTable />,
        title: 'Скролл',
    },
    [AppRoutes.EDIT_ON_CHANGE]: {
        path: RoutePath.editOnChange,
        element: <EditOnChange />,
        title: 'Edit on chage',
    },
    [AppRoutes.EDIT_ON_BLUR]: {
        path: RoutePath.editOnBlur,
        element: <EditOnBlur />,
        title: 'Edit on blur',
    },
    [AppRoutes.MAPPED_TABLE]: {
        path: RoutePath.mappedTable,
        element: <MappedData />,
        title: 'Mapped Table',
    },
    [AppRoutes.MOBX]: {
        path: RoutePath.mobx,
        element: <MobxData />,
        title: 'Mobx Data',
    },
    [AppRoutes.REACT_HOOK_FORM]: {
        path: RoutePath.reactHookForm,
        element: <ReactHookForm />,
        title: 'React hook form',
    },
    [AppRoutes.COMPONENT_VALIDATION]: {
        path: RoutePath.componentValidation,
        element: <ComponentValidation />,
        title: 'Component validation',
    },
    [AppRoutes.FULL_VALIDATION]: {
        path: RoutePath.fullValidation,
        element: <FullValidation />,
        title: 'Full validation',
    },
    [AppRoutes.Object_VALIDATION]: {
        path: RoutePath.objectValidation,
        element: <ObjectValidation />,
        title: 'Object validation',
    },
    [AppRoutes.VIRTUAL_TABLE]: {
        path: RoutePath.virtualTable,
        element: <VirtualTable />,
        title: 'Virtual table',
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <div></div>,
        title: 'Не найдена',
    },
};
