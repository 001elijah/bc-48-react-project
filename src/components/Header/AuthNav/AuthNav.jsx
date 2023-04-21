import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.scss';

export const AuthNav = () => {
  return (
    <div className={s.Container}>
      <NavLink className={s.Login} to="/login">
        Log In
      </NavLink>
      <NavLink className={s.Register} to="/register">
        Registration
      </NavLink>
    </div>
  );
};