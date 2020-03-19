import React from 'react';
import Card from "./Card";

function CardList({ robots }) {
  return (
    <div className={"card-list"}>
      {robots.map(robot => (
        <Card key={robot.id} name={robot.name} id={robot.id}/>
      ))}
    </div>
  );
}

export default CardList;