import React from 'react';
import { Car } from '../../../types';
import styles from '../Task2.module.scss';
import CarCard from '../car-card/CarCard';

type Props = {
  carList: Car[];
};

const CarList: React.FC<Props> = ({ carList }) => {
  return (
    <div className={styles.grid}>
      {carList.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
