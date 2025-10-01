import { useContext } from "react";
import { BreakpointContext } from "./BreakpointContext";

type BreakpointValue = "mobile" | "tablet" | "desktop";
type BreakpointCtx = { breakpoint: BreakpointValue };

export const useBreakpoint = (): BreakpointCtx => {
  const ctx = useContext(BreakpointContext) as BreakpointCtx | null;
  if (!ctx) {
    throw new Error(
      "useBreakpoint must be used within BreakpointProvider\n (that means you have to wrap the component with the BreakpointProvider component)"
    );
  }

  return ctx;
};
