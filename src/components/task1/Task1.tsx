import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDebounceValue, useOnClickOutside } from 'usehooks-ts';
import { fetchItems } from '../../services/api';
import styles from './Task1.module.scss';
import ResultsDropdown from './results-dropdown/ResultsDropdown';
import SearchBar from './search-bar/SearchBar';

// Please refer to task 1. Realtime search of readme.md
const Task1: React.FC = () => {
  // Handle prepopulated search state
  const [searchParams] = useSearchParams();
  const tag = searchParams.get('tag');

  // Handle search state
  const [query, setQuery] = React.useState(tag || '');
  const [debouncedValue] = useDebounceValue(query, 200);
  const [showResults, setShowResults] = React.useState(false);

  // Handle debounce query
  const { data } = useQuery(['tags', debouncedValue], {
    queryFn: () =>
      debouncedValue !== '' && debouncedValue !== tag
        ? fetchItems<string>({ path: 'tags', query: debouncedValue })
        : [],
    placeholderData: [],
  });

  // Handle tag selection
  const navigate = useNavigate();
  const handleResultClick = (result: string) => {
    setShowResults(false);
    setQuery(result);
    navigate({
      pathname: '',
      search: `?tag=${result}`,
    });
  };

  // Handle SearchBar events
  const handleFocus = () => {
    setShowResults(true);
  };
  const handleQueryChange = (value: string) => {
    setQuery(value);
  };

  // Handle click outside to hide dropdown
  const inputRef = React.useRef(null);
  const handleClickOutside = () => {
    setShowResults(false);
  };
  useOnClickOutside(inputRef, handleClickOutside);

  return (
    <div className={styles.task1} ref={inputRef}>
      <form role="search">
        <SearchBar query={query} setQuery={handleQueryChange} handleFocus={handleFocus} />
      </form>
      {showResults && <ResultsDropdown data={data} handleResultClick={handleResultClick} query={query} />}
    </div>
  );
};
export default Task1;
