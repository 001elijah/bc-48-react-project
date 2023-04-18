import { Navigate, Route, Routes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { OwnPlanPage } from "pages/OwnPlanPage";
import { CashflowPage } from "pages/CashflowPage";
import { DynamicsPage } from "pages/DynamicsPage";
import { RegisterPage } from "pages/RegisterPage";
import { LoginPage } from "pages/LoginPage";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { HomePage } from "pages/HomePage";

// const PrivateRoute = ({ component, redirectTo = "/" }) => {
//   const isAuth = useSelector(selectorIsAuth);

//   return isAuth ? component : <Navigate to={redirectTo} />;
// };

// const PublicRoute = ({ component, redirectTo = "/" }) => {
//   const isAuth = useSelector(selectorIsAuth);

//   return !isAuth ? component : <Navigate to={redirectTo} />;
// };

export const App = () => {
  return (
    <>
      <SharedLayout />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/plan"
          element={<OwnPlanPage />}
        />
        <Route
          path="/cash-flow"
          element={<CashflowPage />}
        />
        <Route
          path="/dynamics"
          element={<DynamicsPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
