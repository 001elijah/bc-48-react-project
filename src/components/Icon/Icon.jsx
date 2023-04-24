import svg from '../../assets/icons/sprite.svg';

const Icon = ({ name, height, width }) => (
  <svg width={width} height={height} fill="red">
    <use xlinkHref={`${svg}#${name}`} />
  </svg>
);

export default Icon;

// icon-establishments   кофе ресторани  cafes
// icon-tooth-wheel-gear  other
