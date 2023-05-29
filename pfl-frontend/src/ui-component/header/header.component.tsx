import React from 'react';
import './header.component.scss';

const HeaderComponent: React.FC = () => {
    return (
        <div className="header">
            <img src="/images/logo-black.png" className="logo" alt="logo"/>
        </div>
    );
};

export default HeaderComponent;