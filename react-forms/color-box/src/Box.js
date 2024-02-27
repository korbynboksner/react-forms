import React from 'react';

function Box({ id, width, height, backgroundColor, removeBox }) {
  const boxStyle = {
    width,
    height,
    backgroundColor,
  };

  return (
    <div>
      <div style={boxStyle}></div>
      <button onClick={removeBox}>X</button>
    </div>
  );
}

export default Box;