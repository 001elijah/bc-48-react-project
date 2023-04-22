import Modal from 'components/Modal/Modal';
import { useMediaQuery } from 'react-responsive';
import svg from 'assets/icons/sprite.svg';
import s from './GreetingCard.module.scss';

export const GreetingCard = ({ onClose }) => {
      const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <Modal closeModal={onClose}>
        <div className={s.card}>
            {isMobile &&
            <div onClick={onClose} className={s.close}>
                <svg width="18" height="18" fill="#F3F3F3">
                    <use xlinkHref={`${svg}#icon-close`} />
                </svg> 
            </div> 
            } 
            {!isMobile &&
            <div onClick={onClose} className={s.close}>
                <svg width="24" height="24" fill="#F3F3F3">
                    <use xlinkHref={`${svg}#icon-close`} />
                </svg> 
            </div>
            }
            <h2 className={s.title}>Hooray! Congratulations!</h2>
            <p className={s.desc}>
                You did it! We are so proud of you and
                wish you all the best as you embark on
                this exciting new chapter of your life.
            </p>
        </div>
    </Modal>
  );
};
