import React, { useState, Fragment } from 'react';
import useStyles from './styles';

const Photos = ({ photos }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const {
    activePhotoStyle,
    galleryStyle,
    photoStyle,
    activeThumbnailStyle,
  } = useStyles();
  const activePhotoSize = 500;
  const thumbnailSize = 110;

  const activePhoto = (
    <img
      src={photos[activePhotoIndex]}
      width={activePhotoSize}
      height={activePhotoSize}
      className={activePhotoStyle}
    />
  );

  const gallery = photos.map((photo, index) => {
    const isActivePhoto = index === activePhotoIndex;
    return (
      <img
        src={photo}
        width={thumbnailSize}
        height={thumbnailSize}
        key={index}
        className={isActivePhoto ? activeThumbnailStyle : photoStyle}
        onClick={() => setActivePhotoIndex(index)}
      />
    );
  });

  return (
    <div style={{ width: activePhotoSize }}>
      <div>{activePhoto}</div>
      <div className={galleryStyle}>{gallery}</div>
    </div>
  );
};

export default Photos;
