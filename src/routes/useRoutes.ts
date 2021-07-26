import { ErrorPage } from "./../Components/ErrorPage/ErrorPage";
import { MainCabinet } from "./../Components/Cabinet/MainCabinet";
import { LoginPage } from "../Components/AuthComposition/LoginPage";
import { RegisterPage } from "../Components/AuthComposition/RegisterPage";
import { PhilanthropistMain } from "../Components/PhilanthropistComposition/PhilanthropistMain";
import { MainSection } from "../Components/Section/MainSection";
import { TRoutesWrapper } from "./RoutesContext";
import { HomeCabinet } from "../Components/Cabinet/MainPageCabinet/HomeCabinet/HomeCabinet";
import { MyDreamPage } from "../Components/Cabinet/MyDreamPage/MyDreamPage";

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
    {
      path: "/cabinet",
      component: MainCabinet,
      exact: false,
      routes: [
        {
          path: "/cabinet/home",
          exact: false,
          component: HomeCabinet,
          routes: [],
        },
        {
          path: "/cabinet/dreams",
          exact: false,
          component: MyDreamPage,
          routes: [],
        },
      ],
    },
    { path: "*", component: ErrorPage, exact: false, routes: [] },
  ],
};
