import { Container } from "@components/Common/Container/Container";
import { FC } from "react";

export const Navbar: FC = () => {
    return (
        <div className="w-ful p-7">
            {/* bg-slate-100 */}
            <Container padding>
                <div className="flex justify-between">
                    <div className="flex gap-8 items-center">
                        <img
                            src="/robot.png"
                            alt="Robot"
                            className="h-14 rounded-full"
                        />
                        <div className="flex gap-4">
                            <a
                                href="https://robiot.dev"
                                className="text-xl hover:underline"
                            >
                                robiot
                            </a>
                            <span className="text-xl">/</span>
                            <a
                                href="https://blog.robiot.dev"
                                className="text-xl hover:underline"
                            >
                                blog
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">Search</div>
                </div>
            </Container>
        </div>
    );
};
