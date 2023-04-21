import { NavLink } from 'react-router-dom';
import s from './UserNav.module.scss';

export const UserNav = () => {
    return (
        <div className={s.Container}>
            <div className={s.ItemsContainer}>
                <NavLink className={ ({ isActive }) => isActive ? s.Active : s.Item} to="/plan">
                    Personal plan
                </NavLink>
                <NavLink className={ ({ isActive }) => isActive ? s.Active : s.Item} to="/cash-flow">
                    Cashflow
                </NavLink>
                <NavLink className={ ({ isActive }) => isActive ? s.Active : s.Item} to="/dynamics">
                    Dynamics
                </NavLink>
            </div>     
        </div>
    );
};