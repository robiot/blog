import { cx } from "@lib/utils";
import { FC, ReactNode } from "react";

export const Container: FC<{ padding?: boolean; children: ReactNode }> = (
    properties
) => {
    return (
        <div
            className={cx(
                "mx-auto max-w-6xl",
                properties.padding != undefined && properties.padding && "px-3"
            )}
        >
            {properties.children}
        </div>
    );
};
