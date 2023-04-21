import { Navigate, Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
import { OwnPlanPage } from 'pages/OwnPlanPage';
import { CashflowPage } from 'pages/CashflowPage/CashflowPage';
import { DynamicsPage } from 'pages/DynamicsPage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from 'pages/HomePage';
import { StatisticsPage } from 'pages/StatisticsPage';

 //import { addBalance, getCurrentUserInfo, login, logout, register } from "redux/operations/authOperations";

// const PrivateRoute = ({ component, redirectTo = "/" }) => {
//   const isAuth = useSelector(selectorIsAuth);

//   return isAuth ? component : <Navigate to={redirectTo} />;
// };

// const PublicRoute = ({ component, redirectTo = "/" }) => {
//   const isAuth = useSelector(selectorIsAuth);

//   return !isAuth ? component : <Navigate to={redirectTo} />;
// };

export const App = () => {
  //const dispatch = useDispatch();
  return (
    <>
      {/* <button type="button"
        onClick={() =>
          dispatch(register({
            "name": "jane",
            "email": "jane1234@mail.com",
            "password": "qwerty123"
      }))}
      >
        register
      </button>
      <button type="button"
        onClick={() =>
        {
          dispatch(login({
            "email": "jane123@mail.com",
            "password": "qwerty123"
          }));
}}
      >
        login
      </button>
      <button type="button"
        onClick={() =>
          dispatch(logout())}
      >
        logout
      </button>
      <button
          type="button"
        onClick={() => dispatch(addBalance({"balance": "10000"}))}
      >
        addBalance
      </button>
      <button
          type="button"
        onClick={() => dispatch(getCurrentUserInfo())}
      >
        getUserInfo
      </button> */}
      <SharedLayout />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        >
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
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
          path="/statistics"
          element={<StatisticsPage />}
        />
        {/* <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
