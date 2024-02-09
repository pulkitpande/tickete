import { useContext, createContext, ReactNode } from "react";

import { useMediaQuery } from "@chakra-ui/react";

type responsiveSizeContextType = {
  isMobile: boolean;
  isDesktop: boolean;
};
export const responsiveSizeContext = createContext<responsiveSizeContextType>({
  isMobile: false,
  isDesktop: false,
});

export default function ResponsizeSizeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isMobile] = useMediaQuery("(max-width: 70em)");

  const [isDesktop] = useMediaQuery("(min-width: 71em)");

  return (
    <responsiveSizeContext.Provider value={{ isMobile, isDesktop }}>
      {children}
    </responsiveSizeContext.Provider>
  );
}

export function useResponsiveSizes() {
  const { isMobile, isDesktop } = useContext(responsiveSizeContext);
  return {
    isMobile,
    isDesktop,
  };
}
