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

  return (
    <div
      className={`${maxWidth} bg-amber-800 mx-auto outline-purple-300 flex flex-col px-2`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
