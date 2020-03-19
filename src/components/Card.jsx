import React from 'react';

const Card = ({ name, id }) => {
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${id}?set=set1&size=180x180`} alt={name}/>
      <h2>{name}</h2>
    </div>
  );
};

export default Card;