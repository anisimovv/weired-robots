import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className='search'
      type='text'
      onChange={onChange}
      value={value}
      placeholder='search monsters'
    />
  );
};

export default SearchBox;