import { useSelector } from 'react-redux';
import { selectAuthorized } from 'redux/selectors/authSelectors';
import { AuthNav } from 'components/Header/AuthNav/AuthNav';
import { UserBar } from 'components/Header/UserBar/UserBar';
import s from './Navigation.module.scss';

export const Navigation = () => {
    const isAuthorized = useSelector(selectAuthorized);

    return (
        <div className={s.NavigationContainer}>
            {!isAuthorized && <AuthNav />}
            {isAuthorized && <UserBar />}
        </div>
    );
};