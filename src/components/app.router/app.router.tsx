import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { FormOption } from "../app/App";

const Home = lazy(() => import("../../features/home/home"));
const SegundaPagina = lazy(
  () => import("../../features/secondpage/second.page")
);
const TerceraPagina = lazy(() => import("../../features/thirdpage/third.page"));

type AppRouterProps = {
  formOptions: FormOption[];
};
export function AppRouter({ formOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={formOptions[0].path} element={<Home></Home>}></Route>
        <Route
          path={formOptions[1].path}
          element={<SegundaPagina></SegundaPagina>}
        ></Route>
        <Route
          path={formOptions[2].path}
          element={<TerceraPagina></TerceraPagina>}
        ></Route>
        <Route
          path={"*"}
          element={<Navigate to={"/"} replace={true}></Navigate>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
