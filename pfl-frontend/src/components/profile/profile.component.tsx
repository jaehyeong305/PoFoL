import React from "react";
import "./profile.component.scss";
import Tooltip from "ui-component/tooltip/tooltip.component";
import HajaeTable from "ui-component/hajae-table/hajae-table.component";

const ProfileComponent: React.FC = () => {
    return (
        <div>
            <div className="profile-info-container">
                <div className="profile-image">
                    <img src="/images/IMG_3073.JPG" alt="" />
                </div>
                <div className="profile-info">
                    <HajaeTable>
                        <tbody>
                            {/*  개인정보  */}
                            <tr>
                                <th></th>
                                <td className="info-title">개인 정보</td>
                            </tr>
                            <tr>
                                <th>생년월일</th>
                                <td>1994/03/05</td>
                            </tr>
                            <tr>
                                <th>연락처</th>
                                <td>010-8077-1157</td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td>hajae305@gmail.com</td>
                            </tr>
                        </tbody>
                    </HajaeTable>
                </div>
                <div className="education-info">
                    <HajaeTable>
                        <tbody>
                            {/*  학력 정보  */}
                            <tr>
                                <th></th>
                                <td className="info-title">학력 정보</td>
                            </tr>
                            <tr>
                                <th>영진 전문대학교</th>
                                <td>2013.03 ~ 2019.02 (졸업)</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>컴퓨터정보계열 (전문학사)</td>
                            </tr>
                            <tr>
                                <th>대구 경상고등학교</th>
                                <td>2010.03 ~ 2013.02</td>
                            </tr>
                        </tbody>
                    </HajaeTable>
                </div>
                <div className="core-competencies-info">
                    <h1>실무 경험</h1>
                    <div className="core-competencies-info-container">
                        <div className="core-competencies-info-item">
                            <span className="item-title">◼︎ Full-Stack 개발자 (2년)</span>
                            <Tooltip value="scala">
                                <img
                                    src="/images/skill-icons/scala-lang-ar21.svg"
                                    alt="scala"
                                />
                            </Tooltip>
                            <Tooltip value="angular">
                                <img src="/images/skill-icons/angular-ar21.svg" alt="angular" />
                            </Tooltip>
                            <Tooltip value="typescript">
                                <img
                                    src="/images/skill-icons/typescriptlang-icon.svg"
                                    alt="typescript"
                                    style={{
                                    width: "30px",
                                        verticalAlign: "top",
                                        margin: "15px 3px 0 0",
                                    }}
                                />
                                <img
                                    src="/images/skill-icons/typescriptlang-ar21.svg"
                                    alt="typescript"
                                />
                            </Tooltip>
                        </div>
                        <div className="core-competencies-info-item">
                            <span className="item-title">◼︎ Front-End 개발자 (2년)</span>
                            <Tooltip value="angular">
                                <img src="/images/skill-icons/angular-ar21.svg" alt="angular" />
                            </Tooltip>
                            <Tooltip value="typescript">
                                <img
                                    src="/images/skill-icons/typescriptlang-icon.svg"
                                    alt="typescript"
                                    style={{
                                    width: "30px",
                                        verticalAlign: "top",
                                        margin: "15px 3px 0 0",
                                    }}
                                />
                                <img
                                    src="/images/skill-icons/typescriptlang-ar21.svg"
                                    alt="typescript"
                                />
                            </Tooltip>
                            <Tooltip value="html">
                                <img src="/images/skill-icons/w3_html5-ar21.svg" alt="html" />
                            </Tooltip>
                            <Tooltip value="css">
                                <img src="/images/skill-icons/w3_css-ar21.svg" alt="css" />
                            </Tooltip>
                        </div>
                        <div className="core-competencies-info-item">
                            <span className="item-title">◼︎ 다양한 툴 사용 경험</span>
                            <div className="item-content">
                                <span>1. Scrum으로 개발</span>
                                <span>2. 빌드 및 배포</span>
                                <Tooltip value="Webpack">
                                    <img
                                        src="/images/skill-icons/js_webpack-icon.svg"
                                        alt="Webpack"
                                    />
                                </Tooltip>
                                <Tooltip value="jenkins">
                                    <img
                                        src="/images/skill-icons/jenkins-icon.svg"
                                        alt="jenkins"
                                    />
                                </Tooltip>
                                <Tooltip value="aws">
                                    <img
                                        src="/images/skill-icons/amazon_aws-icon.svg"
                                        alt="aws"
                                    />
                                </Tooltip>
                                <span>3. 커뮤니케이션 도구</span>
                                <Tooltip value="jira">
                                    <img
                                        src="/images/skill-icons/atlassian_jira-icon.svg"
                                        alt="jira"
                                    />
                                </Tooltip>
                                <Tooltip value="slack">
                                    <img src="/images/skill-icons/slack-icon.svg" alt="slack" />
                                </Tooltip>
                                <Tooltip value="confluent">
                                    <img
                                        src="/images/skill-icons/confluentio-icon.svg"
                                        alt="html"
                                    />
                                </Tooltip>
                                <Tooltip value="github">
                                    <img src="/images/skill-icons/github-icon.svg" alt="github" />
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;