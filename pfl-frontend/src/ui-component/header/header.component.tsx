import React from 'react';
import './header.component.scss';
import { FaExternalLinkSquareAlt } from '@react-icons/all-files/fa/FaExternalLinkSquareAlt';

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
    return (
        <div className="header">
            <img src={props.rogoImageUrl} className="logo" alt="logo"/>
            {props.headerTabs.map((tab, index)=> (
                <div className="tab">{tab.headerTabName}{tab.isNewWindow && <FaExternalLinkSquareAlt className="icon external-link"/>}</div>
            ))}
        </div>
    );
};

export default HeaderComponent;