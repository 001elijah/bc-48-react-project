import { useMediaQuery } from 'react-responsive';
import logoMobile from 'assets/img/logo-mobile.png';
import logoTabletDesktop from 'assets/img/logo-desktop-tablet.png'

export const Logo = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });

    return (
        <>
            {!isDesktopOrLaptop &&
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
        </>
    )
};