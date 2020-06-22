import React from 'react';

const Row = (props) => {
  const row = props.active.map((display, index) => {
    let color;
    display ? (color = 'black') : (color = '#f5f6fa');
    //conditional here: leave off some boxes on each side of the row
    if (
      index >= props.additional &&
      index < props.active.length - props.additional
    )
      return (
        <div
          className='pixel'
          key={index}
          style={{
            backgroundColor: color,
            height: '20px',
            width: '20px',
            margin: '2px',
          }}
          onClick={() => props.update(index, props.index)}
        />
      );
    else return null;
  });
  //conditional here: leave off some rows on each side
  if (
    props.index >= props.additional &&
    props.index < props.active.length - props.additional
  )
    return (
      <div className='row' style={{ display: 'flex' }}>
        {row}
      </div>
    );
  else return null;
};

export default Row;