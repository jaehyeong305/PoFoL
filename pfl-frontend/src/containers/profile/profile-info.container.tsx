import { HEADER_LOGO_ROOT, HEADER_TABS } from "constants/AppConstants";
import React from "react";
import "./profile-info.container.scss";
import HajaeTable from "ui-component/hajae-table/hajae-table.component";
import HeaderComponent from "ui-component/header/header.component";

const ProfileInfoContainer: React.FC = () => {
  return (
    <div className="profile-info">
      <HeaderComponent
        rogoImageUrl={HEADER_LOGO_ROOT}
        headerTabs={HEADER_TABS}
      />
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
              <img src="/images/skill-icons/scala-lang-ar21.svg" alt="scala" />
              <img src="/images/skill-icons/angular-ar21.svg" alt="angular" />
              <img
                src="/images/skill-icons/typescriptlang-icon.svg"
                alt="typescript"
              />
              {/*<span>• Scala (PlayFramework), TypeScript(AngularJS)</span>*/}
            </div>
            <div className="core-competencies-info-item">
              <span className="item-title">◼︎ Front-End 개발자 (2년)</span>
              <img src="/images/skill-icons/angular-ar21.svg" alt="angular" />
              <img
                src="/images/skill-icons/typescriptlang-icon.svg"
                alt="typescript"
              />
              <img src="/images/skill-icons/w3_html5-ar21.svg" alt="html" />
              <img src="/images/skill-icons/w3_css-ar21.svg" alt="css" />
              {/*<span>• TypeScript(AngularJS, Angular)</span>*/}
              {/*<span>• HTML, CSS</span>*/}
            </div>
            <div className="core-competencies-info-item">
              <span className="item-title">◼︎ 다양한 툴 사용 경험</span>
              <div className="item-content">
                <span>1. Scrum으로 개발</span>
                <span>2. 빌드 및 배포</span>
                <img
                  src="/images/skill-icons/js_webpack-icon.svg"
                  alt="html"
                  title="webpack"
                />
                <img src="/images/skill-icons/jenkins-icon.svg" alt="html" />
                <img src="/images/skill-icons/amazon_aws-icon.svg" alt="html" />
                <span>3. 커뮤니케이션 도구</span>
                <img
                  src="/images/skill-icons/atlassian_jira-icon.svg"
                  alt="html"
                />
                <img src="/images/skill-icons/slack-icon.svg" alt="html" />
                <img
                  src="/images/skill-icons/confluentio-icon.svg"
                  alt="html"
                />
                <img src="/images/skill-icons/github-icon.svg" alt="html" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoContainer;
