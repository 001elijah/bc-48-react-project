import { NavLink } from "react-router-dom";
import s from './UserNav.module.scss';

const navItems = [
    { href: "plan", text: "Personal Plan" },
    { href: "cash-flow", text: "Cashflow" },
    { href: "dynamics", text: "Dynamics" },
];

const UserNav = () => {
    return (
    <>
        <nav>
            {navItems.map(({ href, text }) => <NavLink className={s.NavItem} to={href} key={href}>{text}</NavLink>)}
        </nav>
    </>);
};

export default UserNav;