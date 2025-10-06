import type { RouteProps } from "react-router";
import {HomePage} from "../../../pages/Home/ui/HomePage";
import { AppRoutes, routePaths } from "@/shared/ui/config/router/routerPath";
import LoginPage from "@/pages/Login/ui/LoginPage";




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
