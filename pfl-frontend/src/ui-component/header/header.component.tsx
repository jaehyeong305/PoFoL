import React, { useState } from 'react';
import './header.component.scss';
import { FaExternalLinkSquareAlt } from '@react-icons/all-files/fa/FaExternalLinkSquareAlt';
import PulldownComponent from "../pulldown/pulldown.component";

type HeaderComponentProps = {
    rogoImageUrl: string;
    headerTabs: HeaderTab[];
}

export type HeaderTab = {
    headerTabName: string;
    headerTabChilds: HeaderTabChild[];
    isNewWindow?: boolean;
}

export type HeaderTabChild = {
    headerTabChildName: string;
    headerTabChildRoot: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = (props: HeaderComponentProps) => {
    const [activeTab, setActiveTab] = useState('');

    const handleMouseEnter = (tabName: string) => {
        setActiveTab(tabName);
    };

    const handleMouseLeave = () => {
        setActiveTab('');
    };

    return (
        <div className="header">
            <img src={props.rogoImageUrl} className="logo" alt="logo"/>
            {props.headerTabs.map((tab, index)=> (
                <div className="tab-wrapper" key={index}>
                    <div
                        className={`tab ${activeTab === tab.headerTabName ? 'active' : ''}`}
                        onMouseEnter={() => handleMouseEnter(tab.headerTabName)}
                        onMouseLeave={handleMouseLeave}>
                        {tab.headerTabName}{tab.isNewWindow && <FaExternalLinkSquareAlt className="icon external-link"/>}
                    </div>
                    {activeTab === tab.headerTabName && (<PulldownComponent headerTabChilds={tab.headerTabChilds}></PulldownComponent>)}
                </div>
            ))}
        </div>
    );
};

export default HeaderComponent;