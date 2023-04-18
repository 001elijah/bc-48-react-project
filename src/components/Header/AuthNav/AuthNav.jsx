import { NavLink } from "react-router-dom";
import s from './AuthNav.module.scss'

const AuthNav = () => {

  return (
    <>
      <nav>
        <ul>
            <li>
            <NavLink className={s.NavItem} to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className={s.NavItem} to="/register">
                Registration
              </NavLink>
            </li>
        </ul>
        </nav>
    </>
  );
};

export default AuthNav;