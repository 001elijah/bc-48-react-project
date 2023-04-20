import svg from '../../../assets/icons/sprite.svg';

const LetterSvg = (letter, color, size, id) => (
    <svg fill={color} width={size} height={size} onClick>
      <use href={`${svg}#icon-${letter}`} />
    </svg>
  );
  
  LetterSvg.defaultProps = {
    size: 20,
    color: 'white',
  };

  export default LetterSvg