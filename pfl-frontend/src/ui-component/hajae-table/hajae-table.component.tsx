import React from "react";
import "./hajae-table.component.scss";

type HajaeTableProps = {
  children: React.ReactNode;
};

const HajaeTable: React.FC<HajaeTableProps> = ({ children }) => {
  return (
    <div className="table-container">
      <table className="hajae-table">
        {children}
      </table>
    </div>
  );
};

export default HajaeTable;
