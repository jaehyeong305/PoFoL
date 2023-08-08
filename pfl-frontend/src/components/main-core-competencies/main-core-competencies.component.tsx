import React from 'react';
import './main-core-competencies.component.scss';
import MainCoreCompetenciesItemComponent
    from "components/main-core-competencies-item/main-core-competencies-item.component";
import {MAIN_CORE_COMPETENCIES_ITEMS} from 'constants/AppConstants';

const MainCoreCompetenciesComponent: React.FC = () => {

    return (
        <div className="main-core-competencies">
            <span className="title">핵심 역량</span>
            <div className="main-core-competencies-content">
                {MAIN_CORE_COMPETENCIES_ITEMS.map((item, index) => (
                    <MainCoreCompetenciesItemComponent
                        key={index}
                        imageUrl={item.imageUrl}
                        itemTitle={item.itemTitle}
                        itemDescription={item.itemDescription}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainCoreCompetenciesComponent;
