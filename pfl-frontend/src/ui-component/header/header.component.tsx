import React from 'react';
import './header.component.scss';
import { useSelector, useDispatch } from 'react-redux';
import { FaExternalLinkSquareAlt } from '@react-icons/all-files/fa/FaExternalLinkSquareAlt';
import PulldownComponent from "ui-component/pulldown/pulldown.component";
import { setHoveredTab } from 'store/pulldown.store';

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
    const hoveredTab = useSelector((state: any) => state.hoveredTab);
    const dispatch = useDispatch();

    const handleMouseEnter = (tabName: string) => {
        dispatch(setHoveredTab(tabName));
    };

    const handleMouseLeave = () => {
        dispatch(setHoveredTab(''));
    };

    return (
        <div className="header">
            <img src={props.rogoImageUrl} className="logo" alt="logo"/>
            {props.headerTabs.map((tab, index)=> (
                <div className="tab-wrapper" key={index}>
                    <div
                        className='tab'
                        onMouseEnter={() => handleMouseEnter(tab.headerTabName)}
                        onMouseLeave={handleMouseLeave}>
                        {tab.headerTabName}{tab.isNewWindow && <FaExternalLinkSquareAlt className="icon external-link"/>}
                    </div>
                    {hoveredTab === tab.headerTabName &&
                    tab.headerTabChilds.length > 0 &&
                    (<PulldownComponent tabName={tab.headerTabName} headerTabChilds={tab.headerTabChilds}></PulldownComponent>)}
                </div>
            ))}
        </div>
    );
};

export default HeaderComponent;