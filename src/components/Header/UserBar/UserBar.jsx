import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from "react-redux";
import { UserNav } from 'components/Header/UserNav/UserNav';
import { LogoutButton } from 'components/Header/LogoutButton/LogoutButton';
import { getCurrentUserInfo } from 'redux/operations/authOperations';
import { selectUser } from 'redux/selectors/authSelectors';
import svg from 'assets/icons/sprite.svg';
import s from './UserBar.module.scss';

export const UserBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserInfo());
  }, [dispatch]);

  const firstLetter = user.name?.charAt(0).toUpperCase();

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    document.body.classList.add('no-scroll')
  };

  const handleCloseClick = () => {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <>
      {!isBigScreen && (
        <div className={s.Container}>
          <NavLink className={s.Stats} to="/statistics/transactions" onClick={handleCloseClick}>
            {isMobile &&
              <svg width="38" height="35" fill="#fff">
                <use xlinkHref={`${svg}#icon-stats`} />
              </svg>
            }
            {!isMobile &&
              <svg width="40" height="37" fill="#fff">
                <use xlinkHref={`${svg}#icon-stats`} />
              </svg>
            }
          </NavLink>
          <span className={s.User}>{firstLetter}</span>
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
            <svg width="40" height="37" fill="#fff">
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