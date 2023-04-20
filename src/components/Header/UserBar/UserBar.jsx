import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { UserNav } from 'components/Header/UserNav/UserNav';
import { LogoutButton } from 'components/Header/LogoutButton/LogoutButton';
import svg from 'assets/icons/sprite.svg';
import s from './UserBar.module.scss';

export const UserBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1279px)' });

  const handleMenuClick = () => {
    setIsOpen(!isOpen); 
  };

  const handleCloseClick = () => {
    setIsOpen(false); 
  };

  return (
    <>
      {isTabletOrMobile && (
        <div className={s.Container}>
          <NavLink className={s.Stats} to="/statistics/transactions" onClick={handleCloseClick}>
            <svg width="40" height="40" fill="#fff">
              <use xlinkHref={`${svg}#icon-stats`} />
            </svg>
          </NavLink>
          <span className={s.User}>N</span>
          {isOpen ? (
          <>
            <div className={s.CloseButton} onClick={handleCloseClick}>
              <svg width="24" height="24" fill="#F3F3F3">
                <use xlinkHref={`${svg}#icon-close`} />
              </svg>        
            </div>
            <div className={s.UserNav}>
              <div onClick={handleCloseClick}>
                <UserNav />
              </div>
              <div className={s.Logout} onClick={handleCloseClick}>              
                  <LogoutButton />
              </div>
            </div>  
          </>
          ) : (
          <div className={s.MenuButton}  onClick={handleMenuClick}>
            <svg width="24" height="24" fill="#F3F3F3">
              <use xlinkHref={`${svg}#icon-menu`} />
            </svg>
          </div>
          )}
        </div>
      )}
      {isBigScreen && (
        <div className={s.Container}>
          <NavLink className={s.Stats} to="/statistics/transactions">
            <svg width="40" height="40" fill="#fff">
              <use xlinkHref={`${svg}#icon-stats`} />
            </svg>
          </NavLink>
          <span className={s.User}>N</span>
          <LogoutButton />
        </div>
      )}
    </>
  );
};