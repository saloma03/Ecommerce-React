import type { RouteProps } from "react-router";
import {HomePage} from "../../../pages/Home/ui/HomePage";
import { LoginPage } from "../../../pages/Login/ui/LoginPage";
import { routePaths } from "@/shared/ui/config/router/routerPath";




export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.LOGIN],
    element: <LoginPage />,
  }
];
