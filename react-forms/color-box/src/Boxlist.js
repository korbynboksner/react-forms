import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';


function BoxList() {
    const [boxes, setBoxes] = useState([]);
    const addBox = box => {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
  };
    const removeBox = (id) => {
        setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
  };
  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box) => (
        <Box key={box.id} {...box} removeBox={() => removeBox(box.id)} />
      ))}
    </div>
  );


}

export default BoxList;