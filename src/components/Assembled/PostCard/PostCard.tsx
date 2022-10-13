import { FC } from "react";

export const PostCard: FC<{ size?: "large" | "normal" }> = () => {
    return (
        <div className="w-16">
            <div
                className="rounded-lg bg-center bg-cover bg-no-repeat h-96 w-[40rem] bg-slate-200"
                // eslint-disable-next-line prettier/prettier
                style={{ backgroundImage: "url(\"/generated/universeheader1.png\")" }}
            />
        </div>
    );
};
