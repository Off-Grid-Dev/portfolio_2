import type { FC, ReactNode } from "react";
import Wrapper from "./Wrapper";

type MainProps = {
  children: ReactNode;
};

const Main: FC<MainProps> = ({ children }) => {
  return (
    <div className="min-h-[75vh]">
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default Main;
