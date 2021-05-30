import { LoginPage } from "../Components/AuthComposition/LoginPage";
import { RegisterPage } from "../Components/AuthComposition/RegisterPage";
import { PhilanthropistMain } from "../Components/PhilanthropistComposition/PhilanthropistMain";
import { MainSection } from "../Components/Section/MainSection";
import { TRoutesWrapper } from "./RoutesContext";

export const useRoutes: TRoutesWrapper = {
  routes: [
    { path: "/", component: MainSection, exact: true, routes: [] },
    { path: "/login", component: LoginPage, exact: false, routes: [] },
    { path: "/register", component: RegisterPage, exact: false, routes: [] },
    {
      path: "/philanthropist",
      component: PhilanthropistMain,
      exact: false,
      routes: [],
    },
  ],
};
