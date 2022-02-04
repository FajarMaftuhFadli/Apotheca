import type { NextPage } from "next";
import Button from "../components/Button";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <Button>Click Me!</Button>
      </div>
    </Layout>
  );
};

export default Home;
