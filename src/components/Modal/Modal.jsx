import { useEffect } from 'react';
import s from './Modal.module.scss'

const Modal = ({ children, closeModal }) => {
    
    useEffect(() => {
        window.addEventListener("keydown", closeEscape);
        document.body.style.overflow = 'hidden';
    });

    useEffect(() => {
        return () => {
            window.removeEventListener("keydown", closeEscape);
            document.body.style.overflow = 'unset';
        };
    });

    const closeEscape = (event) => {
        if (event.code === 'Escape') {
            closeModal();
        }
    }

    const closeMouse = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }

    return (
        <div onClick={closeMouse} className={s.backdrop}>
            {children}
        </div>
    );
}

export default Modal;