import type { FC, ReactNode } from "react";
import Wrapper from "./Wrapper";

type MainProps = {
  children: ReactNode;
};

const Main: FC<MainProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Main;
