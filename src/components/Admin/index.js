import React from "react";
import Sidebar from "Sidebar/Sindebar";
import {SLayout, SMain} from "./styles";

const AdminLayout = ({children}) => {
    return (
        <SLayout>
            <Sidebar/>
            <SMain>{children}</SMain>
        </SLayout>
    );
};

export default AdminLayout;
