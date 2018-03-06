import React from 'react';
import cxs from 'cxs'
const rule = cxs(
  {
    height: '100%',
    width: '100vw',
    overflow: 'hidden',
  }
)
  

const Screen = ({ children }) => {
  return <div className={`screen ${rule}`}>
          {children}
        </div>
};

export default Screen;
