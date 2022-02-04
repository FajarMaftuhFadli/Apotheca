import type { NextPage } from "next";
import Button from "../components/Button/Button";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <Button />
      </div>
    </Layout>
  );
};

export default Home;
