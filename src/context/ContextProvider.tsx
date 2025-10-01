import type { FC, ReactNode } from "react";
import { BreakpointProvider } from "./ui/BreakpointProvider";

type ContextProviderType = {
  children: ReactNode;
};

const ContextProvider: FC<ContextProviderType> = ({ children }) => {
  return <BreakpointProvider>{children}</BreakpointProvider>;
};

export default ContextProvider;
