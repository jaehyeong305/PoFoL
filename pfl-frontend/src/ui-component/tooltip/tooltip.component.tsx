import React from "react";
import "./tooltip.component.scss";

type TooltipProps = {
    value: string;
    children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ value, children }) => (
  <div className="tooltip-container">
    {children}
    <div className="tooltip">{value}</div>
  </div>
);

export default Tooltip;
