import AuthForm from "components/AuthForm/AuthForm";
import Modal from "components/Modal/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { register } from "redux/operations/authOperations";

export const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });

    const handleRegisterUser = (dataForm) => {
        dispatch(register(dataForm)).then(result => {
            console.log(result)
            if (!result.error)
                navigate('/');
        });
    }

    const closeModal = () => {
        navigate('/');
    }

    return (
        <>
            {!isDesktopOrLaptop && <AuthForm onSubmit={handleRegisterUser} nameForm='register' />}
            {isDesktopOrLaptop &&
                <Modal closeModal={closeModal}>
                    <AuthForm onSubmit={handleRegisterUser} nameForm='register' />
                </Modal>
            }
        </>
    );
};