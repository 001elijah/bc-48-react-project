import s from 'components/DynamicsComponents/Info/DreamHomePicUpload.module.scss';

const DreamHomePicUpload = () => {
  return (
    <div class={s.fileUpload}>
      <input type="file" />
    </div>
  );
};

export default DreamHomePicUpload;
