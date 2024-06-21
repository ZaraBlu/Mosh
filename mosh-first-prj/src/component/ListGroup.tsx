import React, { useState } from 'react'


function ListGroup() {
  const items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris"
  ];
  
  
//Hook: a hook is a function that allows us to tap into built in features in React. 
  //Using the state hook, we can tell react that is component can have data or state that will change over time 
  const [selectedIndex, setSelectedIndex] = useState(-1);

  
useState
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">{
        items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            onClick={ ()=> setSelectedIndex  (index)}
            key={item}>{item}</li>))}
      </ul>
    </>
  );
}

export default ListGroup
