import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export default function Layout({ children }: { children?: JSX.Element }) {
  return (
    <div className="relative h-full w-full">
      <Header className="absolute top-0 w-full" />
      <Main className="pt-20 pb-64">{children}</Main>
      <Footer className="absolute bottom-0 w-full" />
    </div>
  );
}
