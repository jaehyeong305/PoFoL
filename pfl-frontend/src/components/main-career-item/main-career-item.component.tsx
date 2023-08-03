import React from 'react';
import './main-career-item.component.scss';

type MainCareerItemProps = {
    imgUrl: string;
    imgDiscription: string;
    title: string;
    description: string;
}

const MainCareerItemComponent: React.FC<MainCareerItemProps> = (props: MainCareerItemProps) => {
    const descriptionWithLineBreaks = props.description.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
        ));
    
    return (
        <div className="item-container">
            <div className="img-section">
              <img src={props.imgUrl} alt=""></img>
              <span className="img-discription"> {props.imgDiscription} </span>
            </div>
            <div>
                <span className="item-title"> {props.title} </span>
                <p className="item-discription"> {descriptionWithLineBreaks} </p>
            </div>
        </div>
    )
};

export default MainCareerItemComponent;
