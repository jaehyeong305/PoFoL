import React, { useState } from 'react';
import './main-profile.component.scss';
import {useScrollContext} from "context/scroll.context";

const MainProfileComponent: React.FC = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const scrollContext = useScrollContext();

  React.useEffect(() => {
    const handleScrollIcon = ()=> {
      if (scrollContext > 200) {
        setShowScrollIcon(false);
      } else {
        setShowScrollIcon(true);
      }
    };

    window.addEventListener('scroll', handleScrollIcon);

    return () => {
      window.removeEventListener('scroll', handleScrollIcon);
    };
  }, [scrollContext]);
  
  return (
    <div className="scroll-container">
      <div className="scroll-test">
        <img src="images/main-background.png" alt=""></img>
        <img src="images/scroll.png" alt="" className={`plz-scroll ${showScrollIcon ? 'show' : 'hide'}`}></img>
        <div>
          {/*<span className="discription-name">Jaehyeong Ha</span>*/}
          {/*<span className="discription-pfl">PortFoLio</span>*/}
        </div>
      </div>
    </div>
    );
};

export default MainProfileComponent;
