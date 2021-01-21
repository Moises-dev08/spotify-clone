import React from "react";
import "../styles/sidebarOption.css";

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="siderbarOption__icon"></Icon>}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
