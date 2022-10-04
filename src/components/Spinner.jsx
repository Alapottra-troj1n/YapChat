import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return (
      <div className="h-[60vh] flex justify-center items-center" >
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    );
};

export default Spinner;