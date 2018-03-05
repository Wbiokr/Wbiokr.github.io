import React from 'react';
import cxs from 'cxs'
const rule = cxs(
  {
    height: '100%',
    width: '100vw',
    overflowY: 'auto',
  }
)
  

const Screen = ({ children }) => {
  return <div className={`screen ${rule}`}>
    {children}
  </div>
};

export default Screen;
