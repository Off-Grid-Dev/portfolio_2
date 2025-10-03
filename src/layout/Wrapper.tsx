import type { FC, ReactNode } from "react";
import { useBreakpoint } from "../context/ui/useBreakpoint";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  const { breakpoint } = useBreakpoint();
  const maxWidth =
    breakpoint === "desktop"
      ? "max-w-desktop"
      : breakpoint === "tablet"
      ? "max-w-tablet"
      : "max-w-mobile";

  return <div className={`${maxWidth} mx-auto px-2`}>{children}</div>;
};

export default Wrapper;
