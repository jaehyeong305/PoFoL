import {useScrollContext} from 'context/scroll.context';
import React from 'react';
import './main-core-competencies.component.scss';

const MainCoreCompetenciesComponent: React.FC = () => {
    const scrollContext = useScrollContext();

    return (
        <div className="main-core-competencies">
            <span className="title">핵심 역량</span>
        </div>
        );
};

export default MainCoreCompetenciesComponent;
