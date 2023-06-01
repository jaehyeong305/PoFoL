import React from 'react';
import './header.component.scss';

type HeaderComponentProps = {
    rogoImageUrl: string;
    headerTabs: HeaderTab[];
}

export type HeaderTab = {
    headerTabName: string;
    headerTabChilds: HeaderTabChild[];
}

export type HeaderTabChild = {
    headerTabChildName: string;
    headerTabChildRoot: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = (props: HeaderComponentProps) => {
    return (
        <div className="header">
            <img src={props.rogoImageUrl} className="logo" alt="logo"/>
            {props.headerTabs.map((tab, index)=> (
                <div className="tab">{tab.headerTabName}</div>
            ))}
        </div>
    );
};

export default HeaderComponent;