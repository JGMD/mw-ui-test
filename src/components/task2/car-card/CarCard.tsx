import { motion } from 'framer-motion';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Car } from '../../../types';
import styles from '../Task2.module.scss';

type Props = {
  car: Car;
};

const CarCard: React.FC<Props> = ({ car }) => {
  return (
    <motion.div className={styles.carCard} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <LazyLoadImage
        alt={car.alt_description}
        src={car.url + '.webp'}
        placeholder={<div className={styles.placeholder}></div>}
        effect="blur"
      />
      <div className={styles.overlay}>
        <div className={styles.info}>
          <span>{car.user.name}</span>
          <span>{car.likes}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
