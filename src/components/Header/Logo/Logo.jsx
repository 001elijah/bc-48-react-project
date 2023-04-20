import { useMediaQuery } from 'react-responsive';
import logoMobile from 'assets/img/logo-mobile.png';
import logoTabletDesktop from 'assets/img/logo-desktop-tablet.png'
import s from './Logo.module.scss';

export const Logo = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 769px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div className={s.Logo}>
            {isMobile &&
                <img
                    src={logoMobile}
                    width="93"
                    heigth="22"
                    alt="Finance logo"
                />  
            }
            {isDesktopOrLaptop && 
                <img
                    src={logoTabletDesktop}
                    width="138"
                    heigth="28"
                    alt="Finance logo"
                />
            }
        </div>
    )
};