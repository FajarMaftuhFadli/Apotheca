import Header from "./Header/Header";
import Main from "./Main";
import Footer from "./Footer";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
