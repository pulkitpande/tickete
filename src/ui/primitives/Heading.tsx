import { ReactNode } from "react";
import { HeadingProps, Heading as ChakraHeading } from "@chakra-ui/react";
import { poppins } from "../shared/font/poppin-font";

export interface CustomHeadingProps extends HeadingProps {
  children: ReactNode;
  asStyle?: asStyleType;
}

/**
 * Custom abstraction over chakra Heading element
 * to support translations. (but again it's not needed in this project )
 *
 * @see Docs https://chakra-ui.com/heading
 */

export default function Heading({
  asStyle,
  children,
  ...rest
}: CustomHeadingProps) {
  return (
    <ChakraHeading
      {...styles.default}
      {...(asStyle && styles[asStyle])}
      {...rest}
      fontFamily={poppins.style.fontFamily}
    >
      {children}
    </ChakraHeading>
  );
}
const styles: StyleType = {
  default: {
    fontWeight: "medium",
    letterSpacing: "-0.03em",
  },
  h1: {
    fontSize: { md: "52", base: "35" },
    lineHeight: { base: 1.1 },
  },
  h2: {
    fontSize: { md: "35", base: "30" },
    lineHeight: 1.25,
  },
  h3: {
    fontSize: { md: "30", base: "25" },
  },
};

type StyleType = {
  default: HeadingProps;
  h1: HeadingProps;
  h2: HeadingProps;
  h3: HeadingProps;
};

type asStyleType = "h1" | "h2" | "h3";
