import React from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import Search from '../../assets/icons/search.svg?react';
import { fetchItems } from '../../services/api';
import { Car } from '../../types';
import styles from './Task2.module.scss';
import CarList from './car-list/CarList';

// Please refer to task 2. Realtime search results of readme.md
const Task2: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get('tag');
  const { data } = useQuery(['cars', tag], () => (tag ? fetchItems<Car>({ path: 'cars', query: tag }) : []), {
    placeholderData: [],
  });

  return (
    <div className={styles.task2}>
      {data && data.length === 0 ? (
        <div className={styles.noSearch}>
          <div>
            <Search className={styles.icon} />
          </div>
          <h1>Use the search to find vehicles</h1>
        </div>
      ) : (
        <div className={styles.search}>
          <div className={styles.searchTitle}>
            <h2>Search results for {tag}</h2>
          </div>
          <div className={styles.carList}>
            <CarList carList={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Task2;
