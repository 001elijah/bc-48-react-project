import { useEffect } from 'react';
import s from './Modal.module.scss'

const Modal = ({ children, closeModal }) => {
    
    useEffect(() => {
        window.addEventListener("keydown", closeOnBackdropEscape);
        document.body.style.overflow = 'hidden';
    });

    useEffect(() => {
        return () => {
            window.removeEventListener("keydown", closeOnBackdropEscape);
            document.body.style.overflow = 'unset';
        };
    });

    const closeOnBackdropEscape = (event) => {
        if (event.code === 'Escape') {
            closeModal();
        }
    }

    const closeOnBackdropMouse = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }

    return (
        <div onClick={closeOnBackdropMouse} className={s.backdrop}>
            {children}
        </div>
    );
}


export default Modal;