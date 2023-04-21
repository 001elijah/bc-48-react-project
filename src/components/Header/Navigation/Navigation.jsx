import { useSelector } from 'react-redux';
import { selectAuthorized } from 'redux/selectors/authSelectors';
import { AuthNav } from 'components/Header/AuthNav/AuthNav';
import { UserBar } from 'components/Header/UserBar/UserBar';

export const Navigation = () => {
    const isAuthorized = useSelector(selectAuthorized);

    return (
        <>
            {!isAuthorized && <AuthNav />}
            {isAuthorized && <UserBar />}
        </>
    );
};