import svg from '../../assets/icons/sprite.svg';

const svgStyle = {
  verticalAlign: 'text-top'
};

const Icon = ({ name, height, width }) => (
  <svg width={width} height={height} fill="red" style={svgStyle}>
    <use xlinkHref={`${svg}#${name}`} />
  </svg>
);

export default Icon;

// icon-establishments   кофе ресторани  cafes
// icon-tooth-wheel-gear  other
