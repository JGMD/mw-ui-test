// We can change this to a real API endpoint when we have and move it to env file
const url = 'http://localhost:8000/api/';

export const fetchItems = async <T>({ path, query }): Promise<T[]> => {
  try {
    const queryString = query ? `?tag=${query}` : '';
    const response = await fetch(`${url}${path}${queryString}`);

    if (!response.ok) {
      throw new Error('Failed to fetch items');
    }

    const items: T[] = await response.json();

    if (items.length === 0) {
      items.push('No results' as T);
    }
    return items;
  } catch (error) {
    console.error('Error fetching items:', error);
    return []; // we just return an empty array if there are no matches
  }
};
