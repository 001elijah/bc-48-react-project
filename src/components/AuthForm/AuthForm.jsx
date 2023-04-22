import s from './AuthForm.module.scss';
import sprite from '../../assets/icons/sprite.svg'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const AuthForm = ({ onSubmit, nameForm }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [passwordShow, setPasswordShow] = useState(false);

    const error = useSelector(state => state.authorized.error);

    const hanelChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    }

    const togglePasssword = () => {
        setPasswordShow(!passwordShow);
    }

    return (
            <div className={s.modal}>
                <p className={s.title}>{ nameForm === 'login' ? 'Log In' : 'Registration' }</p>
                <form className={s.card} onSubmit={handleSubmit}>
                    <div className={s.block}>
                        {nameForm === 'login' ? null :
                        <label>
                            <p className={s.text}>Name</p>
                            <input className={s.input} type="text" name='name' placeholder='Enter your name' value={form.name} onChange={hanelChange}/>
                        </label>}
                        <label>
                            <p className={s.text}>Email</p>
                            <input className={s.input} type="text" name='email' placeholder={nameForm === 'login' ?'Enter email':'Enter your email'} value={form.email} onChange={hanelChange} />
                        </label>
                        <label className={s.label}>
                            <p className={s.text}>Password</p>
                            <input className={error ? `${s.input} ${s.invalid}`: s.input} type={passwordShow ? 'text' : 'password'} name='password' placeholder={nameForm === 'login' ?'Create password':'Enter your password'} value={form.password} onChange={hanelChange} />
                            <button onClick={togglePasssword} type='button' className={s.eye}>
                                <svg className={s.icon} width="24" height="24">
                                    <use href={sprite + '#icon-toggle-invisible'}></use>
                                </svg>
                            </button>
                            {error ? <p className={s.error}>Invalid password!</p>: null}
                        </label>
                    </div>
                    <button className={s.btn} type='Submit'>
                        {nameForm === 'login' ? 'Log In' : 'Sign Up' }
                    </button>
                </form>
            </div>
    );
}

export default AuthForm;