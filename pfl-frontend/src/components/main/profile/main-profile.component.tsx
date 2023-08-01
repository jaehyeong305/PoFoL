import React from 'react';
import './main-profile.component.scss';

const MainProfileComponent: React.FC = () => {
  
  return (
    <div className="scroll-container">
      <div className="scroll-test">
        <img src="images/main-background.png" alt=""></img>
        <img src="images/scroll.png" alt="" className="plz-scroll"></img>
        <div>
          {/*<span className="discription-name">Jaehyeong Ha</span>*/}
          {/*<span className="discription-pfl">PortFoLio</span>*/}
        </div>
      </div>
    </div>
    );
};

export default MainProfileComponent;
