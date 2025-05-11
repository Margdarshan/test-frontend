import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import desktop from '../../../assest/predictor-image/desktop.png';
import tablet from '../../../assest/predictor-image/tablet.png';
import mobile from '../../../assest/predictor-image/mobile.png';

const PredictorUsage = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const isTablet = useMediaQuery('(min-width:600px) and (max-width:1199px)');
  const isMobile = useMediaQuery('(max-width:599px)');

  let imageSrc;

  if (isDesktop) {
    imageSrc = desktop;
  } else if (isTablet) {
    imageSrc = tablet;
  } else if (isMobile) {
    imageSrc = mobile;
  }

  return (
    <div>
      <img
        src={imageSrc}
        alt="Predictor"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default PredictorUsage;
