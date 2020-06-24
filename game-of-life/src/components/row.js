import React from 'react';

const Row = (props) => {
  const row = props.active.map((display, index) => {
    let color;
    display ? (color = '#424242') : (color = '#F5F6CE');
    //conditional: checks that index doesn't overflow
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
            height: '11px',
            width: '11px',
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
  //conditional: checks that index doesn't overflow
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