import React from 'react';
import { motion } from 'framer-motion';
import useFirestore from '../hooks/useFirestore';
import LazyImage from './LazyImage';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  console.log('docs', docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <LazyImage src={doc.url} />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
