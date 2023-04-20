import { Outlet, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './StatisticsNav.module.scss';
import { Calendar } from '../StatisticsBoard/Calendar';

const getLinkActiveClass = ({ isActive }) =>
  clsx(s.link, isActive && s.active_link);
  

export const StatisticsNav = () => {
  return (
    <>
      <ul className={s.static_nav}>
      <Calendar/>
        <NavLink className={getLinkActiveClass} to="/statistics/expenses" end >
          <li key="expenses">
            <span className={s.link__title}>Expenses</span>
          </li>
        </NavLink>

        <NavLink className={getLinkActiveClass} to="/statistics/categories" end >
          <li key="categories">
            <span className={s.link__title}>Categories</span>
          </li>
        </NavLink>
      </ul>
      <Outlet />
    </>
  );
};
