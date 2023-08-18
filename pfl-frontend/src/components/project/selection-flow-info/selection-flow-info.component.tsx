import React from "react";
import "./selection-flow-info.component.scss";
import HajaeTable from "ui-component/hajae-table/hajae-table.component";

const SelectionFlowInfoComponent: React.FC = () => {
    return (
        <section className="selection-flow-info-wrapper">
            <HajaeTable>
                <tbody>
                <tr>
                    <th>프로젝트 개요</th>
                    <td>고정적인 전형 흐름을 커스터마이징하는 기능을 추가</td>
                </tr>
                <tr>
                    <th>프로젝트 규모</th>
                    <td>PM 1, 개발자 12, 디자이너 3, QA 2, CS 3↑</td>
                </tr>
                <tr>
                    <th>주요 업무</th>
                    <td>
                        <ul>
                            <li>테이블(DB) 설계/수정</li>
                            <li>화면 설계</li>
                            <li>Backend, Frontend 개발</li>
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
                            <li>테이블(DB) 설계/수정</li>
                            <li className="li-2">고정적인 전형 흐름(서류전형-1차-2차…-내정-입사)에서 커스터마이징 가능한 전형 흐름(포지션에 따라
                                서류전형-코딩테스트-...-입사)으로 수정하기 위한 테이블 설계 및 기존 테이블 수정
                            </li>
                            <li>화면 설계</li>
                            <li className="li-2">디자이너와 협업하여 전형흐름을 커스터마이징하는 화면 설계 및 기존 화면 설계</li>
                            <li>Backend, Frontend 개발(풀스택)</li>
                            <li className="li-2">Backend(Scala, Play): 새로운 기능에 필요한 API 작성</li>
                            <li className="li-2">Frontend(AngularJS, Typescript): 새롭게 설계한 화면 개발</li>
                            <li className="li-2">단위테스트(TDD) 작성</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>주요 성과</th>
                    <td>
                        <ul>
                            <li>2021년 상반기 우수팀상 수상</li>
                            <li>기능요인으로 인한 서비스 해약률의 25% 해소</li>
                            <li>새로운 기능 릴리즈</li>
                            <li>엔지니어, 디자이너, CS, 영업부가 하나의 팀이 되는 것을 실현</li>
                            <li>고객과 연계하여 어플리케이션 개선을 실시</li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </HajaeTable>
        </section>
    );
}

export default SelectionFlowInfoComponent;