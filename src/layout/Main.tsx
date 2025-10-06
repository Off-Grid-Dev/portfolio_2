import { useEffect, useRef, useState, type FC, type ReactNode } from "react";
import Wrapper from "./Wrapper";
import maybeSetMinHeight from "../utils/maybeSetMinHeight";

type MainProps = {
  children: ReactNode;
};

const Main: FC<MainProps> = ({ children }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [heightAdjust, setHeightAdjust] = useState<boolean>(false);

  useEffect(() => {
    if (!mainRef.current) return;
    setHeightAdjust(maybeSetMinHeight(mainRef.current) as boolean);
  }, []);

  return (
    <main
      ref={mainRef}
      className={`${heightAdjust && "min-h-[75vh]"} bg-primary-100 pt-16`}
    >
      <Wrapper>{children}</Wrapper>
    </main>
  );
};

export default Main;
