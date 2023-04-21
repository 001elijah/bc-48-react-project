import { useDispatch } from 'react-redux';
import { logout } from 'redux/operations/authOperations';
import { useNavigate } from 'react-router-dom';
import s from './LogoutButton.module.scss';
import svg from 'assets/icons/sprite.svg';

export const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <button className={s.Logout} type="button" onClick={handleLogout}>
            Log out 
            <svg width="14" height="14" className={s.IconLogout}>
                <use xlinkHref={`${svg}#icon-log-out`} />
            </svg>
        </button>
    );
};