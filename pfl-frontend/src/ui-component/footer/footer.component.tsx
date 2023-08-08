import React from "react";
import './footer.component.scss';

const FooterComponent: React.FC = () => {
    return (
        <div className="footer-container">
            <div className="footer-link-container">
                <div className="footer-link">
                    <a href="https://github.com/jaehyeong305" target="_blank" rel="noreferrer"><img src="images/github-mark.png" alt="" /></a>
                </div>
                <div className="footer-link">
                    <a href="https://velog.io/@hajae305" target="_blank" rel="noreferrer"><img src="images/velog.png" alt="" /></a>
                </div>
            </div>
            <div className="footer-connect">
                <span><span className="telephone-icon" />010-8077-1157</span>
                <span><span className="mail-icon" />hajae305@gmail.com</span>
            </div>
            <div className="copylight">
                <span>ⓒ 2023. Jaehyeong Ha All rights reserved.</span>
            </div>
        </div>
    );
}

export default FooterComponent;