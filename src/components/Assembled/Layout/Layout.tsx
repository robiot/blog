import { FC, ReactNode } from "react";

import { Navbar } from "../Navbar/Navbar";

export const Layout: FC<{ children: ReactNode; footerMarginTop?: boolean }> = (
    properties
) => {
    return (
        <>
            <Navbar />
            {properties.children}
        </>
    );
};