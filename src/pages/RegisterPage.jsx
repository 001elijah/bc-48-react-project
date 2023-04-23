import AuthForm from "components/AuthForm/AuthForm";
import Modal from "components/Modal/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "redux/operations/authOperations";
import { useMediaQuery } from 'react-responsive';

export const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const widthWindow = window.innerWidth;
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });

    const handleRegisterUser = (dataForm) => {
        dispatch(register(dataForm))  
    }

    const closeModal = () => {
        navigate('/');
    }

    return (
        <>
            {/* {widthWindow < 768 ? <AuthForm onSubmit={handleRegisterUser} nameForm='register' /> :
                <Modal closeModal={closeModal}>
                    <AuthForm onSubmit={handleRegisterUser} nameForm='register' />
                </Modal>
            } */}
            {!isDesktopOrLaptop && <AuthForm onSubmit={handleRegisterUser} nameForm='register' />}
            {isDesktopOrLaptop &&
                <Modal closeModal={closeModal}>
                    <AuthForm onSubmit={handleRegisterUser} nameForm='register' />
                </Modal>
            }
        </>
    );
};