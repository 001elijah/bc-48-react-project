import s from './AuthForm.module.scss';
import sprite from '../../assets/icons/sprite.svg'
import { useState, useEffect } from 'react';
import { selectError } from 'redux/selectors/authSelectors';
import { useSelector } from 'react-redux';

const validate = (values, isLoginForm) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!isLoginForm && !values.name) {
        errors.name = "Cannot be blank";
    }
    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    return errors;
};

const AuthForm = ({ onSubmit, nameForm }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);
    const registrationError = useSelector(selectError);
    
    const handleChange = (e) => {
        setIsSubmitting(false);
        const { name, value } = e.target;
        setFormValues((p) => ({ ...p, [name]: value }));
    }

    const revalidate = (e) => {
        setIsSubmitting(false);
        const { name, value } = e.target;
        setFormValues((p) => ({ ...p, [name]: value }));
        setFormErrors(validate(formValues, nameForm === "login"));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues, nameForm === "login"));
        setIsSubmitting(true);
    }

    const togglePasssword = () => {
        setPasswordShow(!passwordShow);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
          onSubmit(formValues);
        }
      }, [formErrors, formValues, onSubmit, isSubmitting]);

    return (
            <div className={s.modal}>
                <p className={s.title}>{ nameForm === 'login' ? 'Log In' : 'Registration' }</p>
                <form className={s.card} onSubmit={handleSubmit} noValidate>
                    <div className={s.block}>
                        {nameForm === 'login' ? null :
                        <label className={s.label}>
                            <p className={s.text}>Name</p>
                            <input className={`${s.input} ${formErrors.name && s.invalid}`} type="text" name='name' placeholder='Enter your name' value={formValues.name} onChange={handleChange} onBlur={revalidate} />
                            {formErrors.name && (<span className={s.error}>{formErrors.name}</span>)}
                        </label>}
                        <label className={s.label}>
                            <p className={s.text}>Email</p>
                            <input className={`${s.input} ${formErrors.email && s.invalid}`} type="text" name='email' placeholder={nameForm === 'login' ?'Enter email':'Enter your email'} value={formValues.email} onChange={handleChange} onBlur={revalidate} />
                            {formErrors.email && (<span className={s.error}>{formErrors.email}</span>)}
                        </label>
                        <label className={s.label}>
                            <p className={s.text}>Password</p>
                            <input className={`${s.input} ${formErrors.password && s.invalid}`} type={passwordShow ? 'text' : 'password'} name='password' autocomplete='new-password' placeholder={nameForm === 'login' ?'Create password':'Enter your password'} value={formValues.password} onChange={handleChange} onBlur={revalidate} />
                            <button onClick={togglePasssword} type='button' className={s.eye}>
                                <svg className={s.icon} width="24" height="24">
                                    <use href={sprite + '#icon-toggle-invisible'}></use>
                                </svg>
                            </button>
                            {formErrors.password && (<span className={s.error}>{formErrors.password}</span>)}
                        </label>
                    </div>
                    {registrationError && <div className={s.invalid}>{registrationError}</div>}
                    <button className={s.btn} type='Submit'>
                        {nameForm === 'login' ? 'Log In' : 'Sign Up' }
                    </button>
                </form>
            </div>
    );
}

export default AuthForm;