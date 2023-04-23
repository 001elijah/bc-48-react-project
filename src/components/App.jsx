import { Navigate, Route, Routes } from "react-router-dom";
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

// на модалку з поздоровленням
import { useState } from 'react';
import { GreetingCard } from 'components/GreetingCard/GreetingCard';
import { selectIsPersonalPlanExists } from "redux/selectors/personalPlanSelectors";
import { Notify } from "notiflix";


const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isAuth = useSelector(selectAuthorized);

  return isAuth ? component : <Navigate to={redirectTo} />;
};

const PublicRoute = ({ component, redirectTo = "/plan" }) => {
  const isAuth = useSelector(selectAuthorized);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};

const PrivateRouteAndHasPlan = ({ component, redirectTo = "/plan" }) => {
  const isPersonalPlan = useSelector(selectIsPersonalPlanExists);
  // const isPersonalPlan = false;
  !isPersonalPlan && Notify.warning('Set your personal first');
  return isPersonalPlan ? component : <Navigate to={redirectTo} />;
}

export const App = () => {
  //const dispatch = useDispatch();

  // на модалку з поздоровленням
  const [showCard, setShowCard] = useState(false);
  const handleCardOpen = () => setShowCard(true);
  const handleCardClose = () => setShowCard(false);
  
  // console.log(isPersonalPlan);


  return (
    <>
      {/* на модалку з поздоровленням */}
      <div>
      <button onClick={handleCardOpen}>Open Greeting Card</button>

      {showCard && <GreetingCard onClose={handleCardClose} />}
      </div>
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
          element={<PrivateRoute component={<PrivateRouteAndHasPlan component={<CashflowPage />}/>}/>}
        />
        <Route
          path="/dynamics"
          element={ <PrivateRoute component={<PrivateRouteAndHasPlan component={<DynamicsPage />}/>}/>}
        />
        <Route
          path="/statistics"
          element={ <PrivateRoute component={<PrivateRouteAndHasPlan component={<StatisticsPage />}/>}/>}
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
