import React from 'react';
import './main-profile.component.scss';

const MainProfileComponent: React.FC = () => {
  
  return (
    <div className="scroll-container">
      <div className="scroll-test">
        <img src="/images/background.png" alt=""></img>
        <div>
          <span className="discription-name">Jaehyeong Ha</span>
          <span className="discription-pfl">PotoFLio</span>
        </div>
      </div>
    </div>
    );
};

export default MainProfileComponent;
