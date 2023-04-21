import s from 'components/DynamicsComponents/Info/DreamHomePicUpload.module.scss';
import sprite from 'assets/icons/sprite.svg';
import { useMediaQuery } from 'react-responsive';

const DreamHomePicUpload = () => {
  const isMobileSize = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className={s.fileUpload}>
      <input type="file" />
      {isMobileSize ? (
        <svg width="50px" height="50px" className={s.icons}>
          <use href={sprite + '#icon-upload-pic-small'}></use>
        </svg>
      ) : (
        <svg width="50px" height="50px" className={s.icons} color="green">
          <use href={sprite + '#icon-upload-pic-small'}></use>
        </svg>
      )}
    </div>
  );
};

export default DreamHomePicUpload;
