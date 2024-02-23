export const boldMatchCharacters = ({ sentence = '', characters = '' }) => {
  const regEx = new RegExp(characters, 'gi');
  return sentence.replace(regEx, '<strong>$&</strong>');
};
