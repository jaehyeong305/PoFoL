import React from 'react';
import './main-core-competencies-item.component.scss';

type MainCoreCompetenciesItemProps = {
    imageUrl: string,
    itemTitle: string,
    itemDescription: string,
}
const MainCoreCompetenciesItemComponent: React.FC<MainCoreCompetenciesItemProps> = (props: MainCoreCompetenciesItemProps) => {

    return (
        <div className="main-core-competencies-item">
            <div className="image">
                <img src={props.imageUrl} alt="" />
            </div>
            <div className="content">
                <span className="item-title">
                    {props.itemTitle}
                </span>
                <span className="item-description">
                    {props.itemDescription}
                </span>
            </div>
        </div>
        );
};

export default MainCoreCompetenciesItemComponent;
