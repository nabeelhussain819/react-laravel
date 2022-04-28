import React from "react";
import { Link } from "react-router-dom";
import Create from "./Create";
import Show from "./Show";
const Index = () => {
    return (
        <div>
            <Create />
            <Link to="/CreateCertificate">Certificate</Link>
            <Show />
        </div>
    );
};

export default Index;
