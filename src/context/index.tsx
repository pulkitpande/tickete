import { ReactNode } from "react";
import ResponsizeSizeProvider from "./responsive";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  return <ResponsizeSizeProvider>{children}</ResponsizeSizeProvider>;
};

export default ContextProvider;
