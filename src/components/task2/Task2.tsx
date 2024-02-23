import React from 'react';
import { useSearchParams } from 'react-router-dom';

// Please refer to task 2. Realtime search results of readme.md
const Task2: React.FC = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('tag'));
  return <div className="Task2"></div>;
};

export default Task2;
