import AuthForm from "components/AuthForm/AuthForm";
import Modal from "components/Modal/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "redux/operations/authOperations";
import { useMediaQuery } from 'react-responsive';

export const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });

    const handleLoginUser = (dataForm) => {
        dispatch(login(dataForm))
            .then(result => {
                if (!result.error)
                    navigate('/');
        })
    }

    const closeModal = () => {
        navigate('/');
    }

    return (
        <>
            {!isDesktopOrLaptop && <AuthForm onSubmit={handleLoginUser} nameForm='login' />}
            {isDesktopOrLaptop &&
                <Modal closeModal={closeModal}>
                    <AuthForm onSubmit={handleLoginUser} nameForm='login'/>
                </Modal>
            }
        </>
    );
};