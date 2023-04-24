import React from "react";
import Navbar from "../Navbar";

export const DefaultLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default DefaultLayout