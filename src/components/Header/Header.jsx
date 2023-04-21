import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { selectAuthorized } from 'redux/selectors/authSelectors';
import { UserNav } from './UserNav/UserNav';
import { Navigation } from './Navigation/Navigation';
import { Logo } from './Logo/Logo';
import s from './Header.module.scss';

export const Header = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1279px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
    const isAuthorized = useSelector(selectAuthorized);
    
    return (
        <header>
            {(isAuthorized && isTabletOrMobile)&&
                <div className={s.AuthHeaderBox}>
                    <Logo />
                    <Navigation />
                </div>}

            {(isAuthorized && isBigScreen)&&
                <div className={s.AuthHeaderBox}>
                    <UserNav />
                    <Logo />
                    <Navigation />
                </div>
            }
            {!isAuthorized &&
                <div className={s.HeaderBox}>
                    <Logo />
                    <Navigation />
                </div>
            }
        </header>  
    );
};