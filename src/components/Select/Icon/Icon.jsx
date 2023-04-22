import icon from '../../../assets/icons/sprite.svg';

export const Icon = ({ name, width, height, className }) => {
  <svg width={width} height={height}>
    <use xlinkHref={`${icon}#{name}`} />
  </svg>;
};
