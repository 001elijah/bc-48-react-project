import s from './Hero.module.scss';
import imgUrlMobile from '../../assets/img/hero-bg-mobile.png';

const Hero = () => {
    const widthWindow = window.innerWidth;

    return (
        <div className={s.container}>
            <h1 className={s.title}><span className={s.text}>Planner</span>{widthWindow > 767 ? <span className={s.textTwo}>for joint</span>:"for joint"} savings for an  apartment</h1>
            <img className={s.icon} src={imgUrlMobile} alt=""/>
        </div>
    );
}

export default Hero;