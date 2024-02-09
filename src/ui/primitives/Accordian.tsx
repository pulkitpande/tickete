import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Accordion as ChakraAccordion,
  VStack,
  AccordionItemProps,
  AccordionButtonProps,
  Spacer,
  HStack,
  Box,
} from "@chakra-ui/react";

import AddIcon from "@/src/ui/icons/add-icon.svg";
import theme from "@/src/styles/theme";
import Text from "./Text";

interface Item {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
}

interface CustomAccordionProps extends AccordionProps {
  items?: Item[];
  defaultStyle?: boolean;
  AccordionItemProps?: AccordionItemProps;
  AccordionButtonProps?: AccordionButtonProps;
}

// chakra accordion implemented using -
// @see Docs https://chakra-ui.com/docs/components/accordion

function CustomAccordionItem({
  item,
  AccordionItemProps,
  AccordionButtonProps,
}: {
  item: Item;
  defaultStyle: boolean;
  AccordionItemProps?: AccordionItemProps;
  AccordionButtonProps?: AccordionButtonProps;
}) {
  return (
    <AccordionItem
      w="full"
      border={"none"}
      outline={"1px solid"}
      outlineColor={theme.colors._lightgray}
      {...AccordionItemProps}
      borderRadius={"3xl"}
      pos={"relative"}
    >
      {({ isExpanded }) => (
        <>
          <AccordionButton _hover={{}} p={5} {...AccordionButtonProps}>
            <HStack py={2} gap={4}>
              <Box
                style={{
                  transform: isExpanded ? "rotate(45deg)" : "",
                  transition: "all 0.25s",
                }}
              >
                <AddIcon fill={theme.colors._gray} width="25" height="25" />
              </Box>

              {item.title && (
                <Text textAlign={"left"} fontWeight={"medium"} fontSize={"lg"}>
                  {item.title}
                </Text>
              )}
            </HStack>
          </AccordionButton>
          <AccordionPanel>
            <Text color={theme.colors._gray}>{item.content}</Text>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

export default function Accordion({
  items,
  defaultStyle = false,
  AccordionItemProps,
  AccordionButtonProps,
  ...rest
}: CustomAccordionProps) {
  return (
    <ChakraAccordion as={VStack} spacing="4" allowToggle {...rest}>
      {items?.map((item, index) => (
        <CustomAccordionItem
          key={index}
          item={item}
          defaultStyle={defaultStyle}
          AccordionItemProps={AccordionItemProps}
          AccordionButtonProps={AccordionButtonProps}
        />
      ))}
    </ChakraAccordion>
  );
}
