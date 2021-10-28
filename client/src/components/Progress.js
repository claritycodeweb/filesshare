import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useStorage from '../hooks/useStorage';

const Progress = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
    return () => {};
  }, [url, setFile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  );
};

export default Progress;
