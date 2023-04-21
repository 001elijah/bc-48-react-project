import { useEffect } from 'react';
import s from './Modal.module.scss'

const Modal = ({ children, closeModal }) => {
    
    useEffect(() => {
        window.addEventListener("keydown", closeEscape);
    });

    useEffect(() => {
        return () => {window.removeEventListener("keydown", closeEscape); };
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