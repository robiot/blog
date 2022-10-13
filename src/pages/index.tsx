import { Layout } from "@components/Assembled/Layout/Layout";
import { PostCard } from "@components/Assembled/PostCard/PostCard";
import { Container } from "@components/Common/Container/Container";
import { NextPage } from "next";

const HomePage: NextPage = () => {
    return (
        <Layout>
            <Container padding>
                <PostCard />
            </Container>
        </Layout>
    );
};

export default HomePage;
