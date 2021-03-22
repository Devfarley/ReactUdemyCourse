import React from 'react';

const UserInput = ({ changed, currentName }) => {
  const style = {
    border: '2px solid red',
  };
  return (
    <div>
      <input type='text' onChange={changed} value={currentName} style={style} />
    </div>
  );
};

export default UserInput;
