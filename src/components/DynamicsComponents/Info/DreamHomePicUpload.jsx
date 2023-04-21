import s from 'components/DynamicsComponents/Info/DreamHomePicUpload.module.scss';
import sprite from 'assets/icons/sprite.svg';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { addOrChangeImageOfFlat } from 'redux/operations/dynamicsOperations';
import { useDispatch } from 'react-redux';

const DreamHomePicUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState(null);
  const isMobileSize = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();

  // console.log(selectedImage);
  useEffect(() => {
    if (selectedImage === null) return;
    const formData = new FormData();
    formData.append('image', selectedImage);
    dispatch(addOrChangeImageOfFlat(formData));
  }, [selectedImage]);

  return (
    <>
      <div className={s.fileUpload}>
        {image ? (
          <img className={s.image} src={image} alt="My future home" />
        ) : (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={e => setSelectedImage(e.target.files[0])}
            />
            {isMobileSize ? (
              <svg width="50px" height="50px" className={s.icons}>
                <use href={sprite + '#icon-upload-pic-small'}></use>
              </svg>
            ) : (
              <svg width="50px" height="50px" className={s.icons} color="green">
                <use href={sprite + '#icon-upload-pic-small'}></use>
              </svg>
            )}
          </>
        )}
      </div>
      {image && (
        <div className={s.inputChangeContainer}>
          <input
            type="file"
            accept="image/*"
            name="file"
            id="file"
            className={s.inputfile}
            onChange={e => setSelectedImage(e.target.files[0])}
          />
          <label for="file">Change image</label>
        </div>
      )}
    </>
  );
};

export default DreamHomePicUpload;
