import React from 'react';
import Row from './row';

const Grid = (props) => {
  const grid = props.active.map((active, index) => {
    return (
      <Row
        key={index}
        active={active}
        index={index}
        update={props.update}
        canClick={props.canClick}
        addBuffer={props.addBuffer}
      />
    );
  });
  return <div className='grid'>{grid}</div>;
};

export default Grid;