import type { NextPage } from "next";
import Banner from "../components/Banner/Banner";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
};

export default Home;
