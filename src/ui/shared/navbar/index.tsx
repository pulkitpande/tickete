import { Box, HStack, Tooltip } from "@chakra-ui/react";
import { theme } from "@/src/styles/theme";
import { useResponsiveSizes } from "@/src/context/responsive";
import Logo from "../../icons/logo.svg";
import Lock from "../../icons/lock.svg";
import QuestionMark from "../../icons/question-mark.svg";
import LeftArrow from "../../icons/left-arrow.svg";

import Link from "next/link";
import Text from "../../primitives/Text";
import Container from "../../primitives/Container";
import Button from "../../primitives/Button";

const Navbar = () => {
  const { isDesktop } = useResponsiveSizes();

  return (
    <Box borderBottom={"1px solid"}>
      <Container py={{ md: 3, base: 5 }}>
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          {isDesktop ? (
            <Box>
              <Link href={"/"}>
                <Logo width={125} height={50} />
              </Link>
            </Box>
          ) : (
            <LeftArrow fill={theme.colors._gray} width={18} height={18} />
          )}

          <HStack>
            <Lock fill={theme.colors._gray} width={18} height={18} />
            <Text color={theme.colors._gray}>Checkout</Text>
          </HStack>
          <HStack>
            <QuestionMark width={18} height={18} />
            {isDesktop && (
              <Button
                borderRadius={"md"}
                bg={theme.colors._white}
                _hover={{ bg: theme.colors._lightgray }}
              >
                <Link href={"/"}>
                  <Text>Help</Text>
                </Link>
              </Button>
            )}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};
export default Navbar;
