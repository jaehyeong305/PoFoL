import React from "react";
import "./career.component.scss";
import HajaeTable from "ui-component/hajae-table/hajae-table.component";

const CareerComponent: React.FC = () => {
    return (
        <div className="career-container">
            <h2>총경력 : 2019.04.01 ~ 2023.04.30 (4년 1개월)</h2>
            <HajaeTable>
                <tbody>
                    <tr>
                        <th></th>
                        <td className="table-title">회사 개요</td>
                        <td className="table-title">会社概要</td>
                    </tr>
                    <tr>
                        <th>회사이름</th>
                        <td>Bizreach</td>
                        <td>株式会社 ビズリーチ</td>
                    </tr>
                    <tr>
                        <th>자본금</th>
                        <td>1억3,000만엔</td>
                        <td>1億3,000万円</td>
                    </tr>
                    <tr>
                        <th>사원수</th>
                        <td>2,000명 ↑</td>
                        <td>2,000人 ↑</td>
                    </tr>
                    <tr>
                        <th>매출</th>
                        <td>439.5억엔 ↑</td>
                        <td>439.5億円 ↑</td>
                    </tr>
                    <tr>
                        <th>사업내용</th>
                        <td>
                            인터넷을 활용한 서비스 사업
                            <ul>
                                <li>즉전력인재와 기업을 연결하는 전직 사이트 「비즈리치」 </li>
                                <li>인재활용 시스템 HRMOS 탤런트 관리</li>
                                <li>채용관리 시스템 HRMOS채용</li>
                                <li>근태관리 시스템 HRMOS근태</li>
                                <li>경비정산 시스템 HRMOS경비</li>
                                <li>OB/OG 방문네트워크 서비스 「비즈리치・캠퍼스」</li>
                            </ul>
                        </td>
                        <td>
                            インターネットを活用したサービス事業
                            <ul>
                                <li>即戦力人材と企業をつなぐ転職サイト「ビズリーチ」</li>
                                <li>人財活用システム　HRMOSタレントマネジメント</li>
                                <li>採用管理システム　HRMOS採用</li>
                                <li>勤怠管理システム　HRMOS勤怠</li>
                                <li>経費精算システム　HRMOS経費</li>
                                <li>OB/OG訪問ネットワークサービス「ビズリーチ・キャンパス」</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </HajaeTable>
            <hr />
            <div className="career-info">
                <HajaeTable>
                    <tbody>
                    <tr>
                        <th>채용 포지션</th>
                        <td>개발자</td>
                    </tr>
                        <tr>
                            <th>소속 부서</th>
                            <td>HRMOS 채용</td>
                        </tr>
                        <tr>
                            <th>부서 소개</th>
                            <td>채용 관리 시스템. 기업의 인사, 채용을 지원 (B2B, SaaS)</td>
                        </tr>
                        <tr>
                            <th>개발 프로세스</th>
                            <td>Scrum (1주 단위 Sprint)</td>
                        </tr>
                        <tr>
                            <th>개발 언어</th>
                            <td>
                                <ul>
                                    <li>Typescript (AngularJS, Angular)</li>
                                    <li>Scala (Play Framework)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>담당 업무</th>
                            <td>
                                <ol>
                                    <li>Hrmos채용 웹 애플리케이션 유지보수</li>
                                    <li>고정적인 전형 흐름을 커스터마이징하는 기능을 추가 (전형흐름관리 프로젝트)</li>
                                    <li>서포트 종료된 AngularJS에 취약성이 검출되어 Angular로 업그레이드 (차세대 프론트엔드 프로젝트)</li>
                                    <li>에러감시 및 코드리뷰</li>
                                </ol>
                            </td>
                        </tr>
                    </tbody>
                </HajaeTable>
            </div>
        </div>
    );
}

export default CareerComponent;