import React from 'react';

const Dog = (props) => {
  return (
    <div>
      <p>
        I am {props.name} the {props.breed}!
      </p>
      <input type='text' onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default Dog;
