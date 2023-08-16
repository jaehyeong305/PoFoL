import React from "react";
import "./frontend-info.component.scss";
import HajaeTable from "ui-component/hajae-table/hajae-table.component";

const FrontendInfoComponent: React.FC = () => {
    return (
        <section className="frontend-info-wrapper">
            <HajaeTable>
                <tbody>
                <tr>
                    <th>프로젝트 개요</th>
                    <td>서포트 종료 될 예정인 AngularJS 코드를 Angular 최신 버전으로 업그레이드</td>
                </tr>
                <tr>
                    <th>프로젝트 규모</th>
                    <td>PM 1, 개발자 6(사원 2, SES 4), QA 3</td>
                </tr>
                <tr>
                    <th>주요 업무</th>
                    <td>
                        <ul>
                            <li>기존에 작성되어 있는 AngularJS코드를 Angular 12버전으로 새롭게 작성</li>
                            <li>UI컴포넌트 작성</li>
                            <li>기존에 잠재되어 있던 버그 수정</li>
                            <li>1주 단위 스프린트로 업무를 계획/수행</li>
                            <li>CS(Customer Success)와 디자이너와 커뮤니케이션</li>
                            <li>코드리뷰 & 에러감시</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>상세 업무</th>
                    <td>
                        <ul>
                            <li>기존에 작성되어 있는 AngularJS코드를 Angular 12버전으로 새롭게 작성</li>
                            <li className="li-2">서포트 종료 예정인 AngularJS코드를 Angular 12버전으로 업그레이드</li>
                            <li className="li-2">코드 리팩토링</li>
                            <li className="li-2">아키텍처 통일화</li>
                            <li className="li-2">잠재되어 있던 프론트엔드의 버그 수정</li>
                            <li>UI컴포넌트 작성</li>
                            <li className="li-2">AngularJS에서 작성된 UI컴포넌트 새롭게 작성</li>
                            <li className="li-2">Select, Tooltip, Editor 등 자주 사용되는 UI컴포넌트 작성</li>
                            <li>1주 단위 스프린트로 업무를 계획/수행</li>
                            <li className="li-2">Scrum 개발방식으로 개발</li>
                            <li>CS(Customer Success)와 디자이너와 커뮤니케이션</li>
                            <li className="li-2">CS, 디자이너와 Sprint review에서 개발화면 공유 및 피드백</li>
                            <li className="li-2">릴리즈 공유회를 통한 고객이 요구사항 확인</li>
                        </ul>
                    </td>
                </tr>
                    <tr>
                        <th>주요 성과</th>
                        <td>
                            <ul>
                                <li>AngularJS모듈과 별개로 새로운 모듈작성</li>
                                <li>AngularJS로 작성된 페이지의 7/9 릴리즈</li>
                                <li>릴리즈한 페이지의 취약성 검사 통과</li>
                                <li>잠재되어 있던 버그 80% 수정</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </HajaeTable>
        </section>
    );
}

export default FrontendInfoComponent;