import { Link, Divider, VStack, Box } from "@chakra-ui/react";
import Modal from "../primitives/Modal";
import Text from "../primitives/Text";
import theme from "@/src/styles/theme";
// import Link from "next/link";
type RefundStatusModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const RefundStatusModal = ({
  isOpen,
  onOpen,
  onClose,
}: RefundStatusModalProps) => {
  return (
    <Modal
      title={
        <Text fontWeight={"semibold"} fontSize={"2xl"}>
          Cancellation policy
        </Text>
      }
      isBgBlured
      isOpen={isOpen}
      onClose={onClose}
    >
      <VStack gap={5} alignItems={"flex-start"} py={5} px={0}>
        <Box
          pb={5}
          borderBottom={"1px solid"}
          borderColor={theme.colors._lightgray}
        >
          <Text color={theme.colors._gray}>
            These tickets can't be cancelled or rescheduled.
          </Text>
        </Box>
        <Box>
          <Link
            textDecoration={"underline"}
            color={theme.colors._gray}
            href={"/"}
          >
            Learn more about our cancellation policy
          </Link>
        </Box>
      </VStack>
    </Modal>
  );
};

export default RefundStatusModal;
