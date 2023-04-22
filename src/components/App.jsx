import { Navigate, Route, Routes } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
import { OwnPlanPage } from "pages/OwnPlanPage";
import { CashflowPage } from "pages/CashflowPage";
import { DynamicsPage } from "pages/DynamicsPage";
import { RegisterPage } from "pages/RegisterPage";
import { LoginPage } from "pages/LoginPage";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { HomePage } from "pages/HomePage";
import { StatisticsPage } from "pages/StatisticsPage";
import { selectAuthorized } from "redux/selectors/authSelectors";
import { useSelector } from "react-redux";

import { useState } from 'react';
import { GreetingCard } from 'components/GreetingCard/GreetingCard';


const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isAuth = useSelector(selectAuthorized);

  return isAuth ? component : <Navigate to={redirectTo} />;
};

const PublicRoute = ({ component, redirectTo = "/plan" }) => {
  const isAuth = useSelector(selectAuthorized);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};

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

  const [showCard, setShowCard] = useState(false);
  const handleCardOpen = () => setShowCard(true);
  const handleCardClose = () => setShowCard(false);

  return (
    <>
      <div>
      <button onClick={handleCardOpen}>Open Greeting Card</button>

      {showCard && <GreetingCard onClose={handleCardClose} />}
    </div>
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
          <Route path="login" element={ <PublicRoute component={<LoginPage />}/>} />
          <Route path="register" element={<PublicRoute component={<RegisterPage />}/>} />
        </Route>
        <Route
          path="/plan"
          element={ <PrivateRoute component={<OwnPlanPage />}/>}
        />
        <Route
          path="/cash-flow"
          element={ <PrivateRoute component={<CashflowPage />}/>}
        />
        <Route
          path="/dynamics"
          element={ <PrivateRoute component={<DynamicsPage />}/>}
        />
        <Route
          path="/statistics"
          element={ <PrivateRoute component={<StatisticsPage />}/>}
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
