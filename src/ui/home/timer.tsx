import theme from "@/src/styles/theme";
import { Box } from "@chakra-ui/react";
import Text from "../primitives/Text";
import Container from "../primitives/Container";

const Timer = ({ time }: { time: string }) => {
  return (
    <Box bg={theme.colors._black}>
      <Container py={2}>
        <Text fontSize={"sm"} textAlign={"center"} color={theme.colors._white}>
          Holding your ticket for {time}
        </Text>
      </Container>
    </Box>
  );
};

export default Timer;
