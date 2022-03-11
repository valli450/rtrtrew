import React from 'react';
import './Main-Bottom.css';

function MainBottom() {
  return (
    <div className="benefits">
      <div className="benefits__text">
        <div className="benefits__check">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
            <path fill="none" stroke="#10D8C4" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1" />
          </svg>
          <p>Unlimited websites</p>
        </div>
        <div className="benefits__check">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
            <path fill="none" stroke="#10D8C4" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1" />
          </svg>
          <p>100% data ownership</p>
        </div>  
        <div className="benefits__check">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
            <path fill="none" stroke="#10D8C4" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1" />
          </svg>
          <p>Email reports</p>
        </div> 
      </div>
      <div className="benefits__btn">
        <p>Start my trial</p>
      </div>
    </div>
  )
};


export default MainBottom;