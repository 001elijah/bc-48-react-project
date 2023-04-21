import { useDispatch } from 'react-redux';
import { logout } from 'redux/operations/authOperations';
import s from './LogoutButton.module.scss';
import svg from 'assets/icons/sprite.svg';

export const LogoutButton = () => {
    const dispatch = useDispatch();

    return (
        <button className={s.Logout} type="button" onClick={() => dispatch(logout())}>
            Log out 
            <svg width="14" height="14" className={s.IconLogout}>
                <use xlinkHref={`${svg}#icon-log-out`} />
            </svg>
        </button>
    );
};