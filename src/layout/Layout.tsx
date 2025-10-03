import type { FC, ReactNode } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
