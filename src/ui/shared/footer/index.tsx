import { VStack, HStack, Box } from "@chakra-ui/react";
import theme from "@/src/styles/theme";
import Container from "../../primitives/Container";
import Text from "../../primitives/Text";
import Link from "next/link";
import Logo from "@/src/ui/icons/logo.svg";

type FooterDataType = {
  lable: string;
  href: string;
};

const FooterData: FooterDataType[] = [
  {
    lable: "Terms of usage",
    href: "/",
  },
  {
    lable: "Privacy Policy",
    href: "/",
  },
  {
    lable: "Cancellation policy",
    href: "/",
  },
  {
    lable: "Sitemap",
    href: "/",
  },
];

const Footer = () => {
  return (
    <Box width={"full"} bg={theme.colors._black}>
      <Container>
        <VStack alignItems={"flex-start"} gap={10} py={{ md: 20, base: 10 }}>
          <Box>
            <Logo fill={theme.colors._white} width={200} height={50} />
          </Box>
          <HStack gap={4}>
            {FooterData.map((item) => {
              return (
                <Link key={item.href} href={item.href}>
                  <Text
                    color={theme.colors._white}
                    fontSize={"sm"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    {item.lable}
                  </Text>
                </Link>
              );
            })}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
