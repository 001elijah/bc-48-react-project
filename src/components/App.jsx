import { Navigate, Route, Routes } from 'react-router-dom';
import { OwnPlanPage } from 'pages/OwnPlanPage';
import { CashflowPage } from 'pages/CashflowPage';
import { DynamicsPage } from 'pages/DynamicsPage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from 'pages/HomePage';
import { StatisticsPage } from 'pages/StatisticsPage';
import{ ExpensesList} from './StatisticsComponents/ExpensesBoard/ExpensesBoard'
import {CategoriesList} from './StatisticsComponents/CategoryBoard/CategoryBoard'
import { selectAuthorized } from 'redux/selectors/authSelectors';
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from 'react';
import { selectIsPersonalPlanExists } from 'redux/selectors/personalPlanSelectors';
import { Notify } from 'notiflix';
import { getCurrentUserInfo } from 'redux/operations/authOperations';

const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isAuth = useSelector(selectAuthorized);

  return isAuth ? component : <Navigate to={redirectTo} />;
};

const PublicRoute = ({ component, redirectTo = '/plan' }) => {
  const isAuth = useSelector(selectAuthorized);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};

const PrivateRouteAndHasPlan = ({ component, redirectTo = '/plan' }) => {
  const isPersonalPlan = useSelector(selectIsPersonalPlanExists);
  // const isPersonalPlan = false;
  !isPersonalPlan && Notify.warning('Set your personal first');
  return isPersonalPlan ? component : <Navigate to={redirectTo} />;
};

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserInfo());
  }, [dispatch]);

  // console.log(isPersonalPlan);

  return (
    <>
      {/* на модалку з поздоровленням */}
      <div>
        {/* <button onClick={handleCardOpen}>Open Greeting Card</button> */}

        {/* {showCard && <GreetingCard onClose={handleCardClose} />} */}
      </div>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route
            path="login"
            element={<PublicRoute component={<LoginPage />} />}
          />
          <Route
            path="register"
            element={<PublicRoute component={<RegisterPage />} />}
          />
        </Route>
        <Route
          path="/plan"
          element={<PrivateRoute component={<OwnPlanPage />} />}
        />
        <Route
          path="/cash-flow"
          element={
            <PrivateRoute
              component={
                <PrivateRouteAndHasPlan component={<CashflowPage />} />
              }
            />
          }
        />
        <Route
          path="/dynamics"
          element={
            <PrivateRoute
              component={
                <PrivateRouteAndHasPlan component={<DynamicsPage />} />
              }
            />
          }
        />
        <Route
          path="/statistics"
          //   element={<StatisticsPage />}>
          // <Route path='/statistics/expenses' element={<ExpensesList/>}/>
          // <Route path='/statistics/categories' element={<CategoriesList/>}/>
          // <Route index element={<Navigate to='/statistics/expenses'  />} />
          // </Route>
          // <Route />


          element={ <PrivateRoute component={<PrivateRouteAndHasPlan component={<StatisticsPage />}/>}/>}
          // component={<StatisticsPage />}
        >
          <Route path="/statistics/expenses" element={<ExpensesList />} />
          <Route path="/statistics/categories" element={<CategoriesList />} />
          <Route index element={<Navigate to="/statistics/expenses" />} />
        </Route>


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
