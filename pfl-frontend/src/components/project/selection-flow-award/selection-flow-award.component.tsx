import React from "react";
import "./selection-flow-award.component.scss";
import HajaeTable from "ui-component/hajae-table/hajae-table.component";

const SelectionFlowAwardComponent: React.FC = () => {
    return (
        <section className="selection-flow-award-wrapper">
            <h1>수상 내역</h1>
            <img src="/images/award.png" alt="award"/>
            <div className="award-info">
                <h2>우수팀 상</h2>
                <HajaeTable>
                    <tbody>
                    <tr>
                        <th>수상 팀</th>
                        <td>HRMOS채용 신(新)전형관리 프로젝트</td>
                    </tr>
                    <tr>
                        <th>수상 코멘트</th>
                        <td>
                            <ul>
                                <li>기능요인으로 인한 서비스 해약률의 25% 해소</li>
                                <li>엔지니어, 디자이너, CS, 영업부가 하나의 팀이 되는 것을 실현</li>
                                <li>고객과 연계하여 어플리케이션 개선을 실시</li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </HajaeTable>
            </div>
        </section>
    );
}

export default SelectionFlowAwardComponent;