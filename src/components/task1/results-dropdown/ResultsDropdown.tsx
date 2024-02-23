import React from 'react';
import { boldMatchCharacters } from '../../../utils/utils';
import styles from '../Task1.module.scss';

type Props = { data: string[]; query: string; handleResultClick: (tag: string) => void };
const ResultsDropdown: React.FC<Props> = ({ data, query, handleResultClick }) => {
  return (
    <div className={styles.results}>
      <ul>
        {data.slice(0, 5).map((tag) => (
          <li key={`key-${tag}`} className={styles.result} onClick={() => handleResultClick(tag)}>
            <span dangerouslySetInnerHTML={{ __html: boldMatchCharacters({ sentence: tag, characters: query }) }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsDropdown;
