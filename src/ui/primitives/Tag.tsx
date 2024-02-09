import { Tag as ChakraTag, TagProps, forwardRef } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface CustomTagProps extends TagProps {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

/**
 * Custom abstraction over chakra Tag element
 * to support extra props like icon and variations.
 *
 * @see Docs https://chakra-ui.com/tag
 */

const Tag = forwardRef<CustomTagProps, "span">(
  ({ icon, iconPosition = "left", cursor, children, ...rest }, ref) => {
    let customStyles = {
      bg: "_white",
      color: "primary",
      border: "1px solid",
      boxShadow: "none",
      borderColor: "_lightgray",
      variant: "outline",
    };

    return (
      <ChakraTag
        p={2}
        gap={2}
        ref={ref}
        size="sm"
        borderRadius="full"
        maxHeight={"2rem"}
        cursor={cursor || (rest.onClick ? "pointer" : "default")}
        {...customStyles}
        {...rest}
      >
        <>
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
        </>
      </ChakraTag>
    );
  }
);

export default Tag;
