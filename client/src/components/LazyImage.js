import React from 'react';
import { motion } from 'framer-motion';
import useImage, { StatusEnum } from '../hooks/useImage';

const LazyImage = ({ src }) => {
  const [status, image] = useImage(src);

  console.log('status', status);
  if (status === StatusEnum.LOADING) {
    // const Preload = preload;

    // if (Preload) {
    //   return <Preload />;
    // }

    return <div>loading</div>;
  }

  return (
    <motion.img
      src={src}
      alt="image"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    />
  );
};

export default LazyImage;
