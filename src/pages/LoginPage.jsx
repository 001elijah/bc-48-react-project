import AuthForm from "components/AuthForm/AuthForm";
import Modal from "components/Modal/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "redux/operations/authOperations";

export const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const widthWindow = window.innerWidth;


    const handleLoginUser = (dataForm) => {
        dispatch(login(dataForm));
    }

    const closeModal = () => {
        navigate('/');
    }

    return (
        <>
            {widthWindow < 768 ? <AuthForm onSubmit={handleLoginUser} nameForm='login' /> :
                <Modal closeModal={closeModal}>
                    <AuthForm onSubmit={handleLoginUser} nameForm='login'/>
                </Modal>
            }
        </>
    );
};