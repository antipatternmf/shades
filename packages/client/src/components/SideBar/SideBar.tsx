import React, { FC } from "react";

// import { Link } from "react-router-dom";

import styled from "./SideBar.module.css";

type SideBarProps = {
    path: string;
};

const SideBar: FC<SideBarProps> = ({ path }) => {
    return (
        <div className={styled.sidebar}>
            {/* <Link to={path} className={styled.sidebar__backBtn}>
                {"<-"}
            </Link> */}
            <a href={path} className={styled.sidebar__backBtn}>
                {"<-"}
            </a>
        </div>
    );
};

export default SideBar;
