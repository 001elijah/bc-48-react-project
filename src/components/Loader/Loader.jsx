import { Bars } from 'react-loading-icons';
import s from './Loader.module.scss';

export const Loader = () => {
    return (
        <div className={s.LoaderContainer}>
            <Bars className={s.Bars} />
            <h2 className={s.LoadingText}>Loading...</h2>
        </div>
    );
};
