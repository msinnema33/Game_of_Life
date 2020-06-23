import React from 'react';

const Row = (props) => {
  const row = props.active.map((display, index) => {
    let color;
    display ? (color = 'black') : (color = '#f5f6fa');
    //conditional here: leave off some boxes on each side of the row
    if (
      index >= props.addBuffer &&
      index < props.active.length - props.addBuffer
    )
      return (
        <div
          className='cell'
          key={index}
          style={{
            backgroundColor: color,
            height: '15px',
            width: '15px',
            margin: '1px',
          }}
          onClick={props.canClick === 'Start' 
            ? () => props.update(index, props.index)
            : null
          }  
        />
      );
    else return null;
  });
  //conditional here: leave off some rows on each side
  if (
    props.index >= props.addBuffer &&
    props.index < props.active.length - props.addBuffer
  )
    return (
      <div className='row' style={{ display: 'flex' }}>
        {row}
      </div>
    );
  else return null;
};

export default Row;