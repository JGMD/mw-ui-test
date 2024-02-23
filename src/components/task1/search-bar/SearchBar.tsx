import React from 'react';
import Close from '../../../assets/icons/close.svg?react';
import Search from '../../../assets/icons/search.svg?react';
import styles from '../Task1.module.scss';

type Props = {
  query: string;
  setQuery: (value: string) => void;
  handleFocus: () => void;
};

const SearchBar: React.FC<Props> = ({ query, setQuery, handleFocus }) => {
  return (
    <label aria-label="Search component" className={styles.searchBar} htmlFor="search-field">
      <div className={styles.searchWrapper}>
        <Search className={styles.icon} />
        <input
          id="search-field"
          name="search"
          type="text"
          value={query}
          placeholder="Search for vehicles"
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
        />
        <button type="button" onClick={() => setQuery('')}>
          <Close className={styles.icon} />
        </button>
      </div>
    </label>
  );
};

export default SearchBar;
