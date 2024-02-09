import Head from "next/head";
import Navbar from "@/src/ui/shared/navbar";
import Timer from "@/src/ui/home/timer";
import {
  Box,
  Divider,
  HStack,
  Input,
  Tooltip,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";

import Tag from "@/src/ui/primitives/Tag";
import Heading from "@/src/ui/primitives/Heading";
import Container from "@/src/ui/primitives/Container";
import Text from "@/src/ui/primitives/Text";
import theme from "@/src/styles/theme";
import ReadMore from "@/src/ui/icons/read-more.svg";
import CreditCard from "../src/ui/icons/credit-card.svg";
import PiggyBank from "../src/ui/icons/piggy-bank.svg";
import AccessStatus from "../src/ui/icons/access-status.svg";
import Calendar from "../src/ui/icons/calendar.svg";
import Guest from "../src/ui/icons/guest.svg";
import Star from "../src/ui/icons/star.svg";

import Lock from "../src/ui/icons/lock.svg";
import Button from "@/src/ui/primitives/Button";
import Link from "next/link";
import Accordion from "@/src/ui/primitives/Accordian";

import Footer from "@/src/ui/shared/footer";
import Image from "next/image";

const DynamicRefundStatusModal = dynamic(() => {
  return import("../src/ui/home/refund-status-modal");
});

type FAQDataType = {
  title: string;
  content: string;
};

const FAQData: FAQDataType[] = [
  {
    title: "Are my tickets transferable?",
    content:
      "No. The tickets can only be used by the person(s) whose details are indicated on the voucher. If you're booking for friends and family, make sure to key in their details.",
  },
  {
    title: "How long will it take to receive my ticket?",
    content:
      "The tickets will hit your inbox as soon as you complete making the payment.",
  },
  {
    title: "Is my payment secure?",
    content:
      "We use a PCI compliant payment gateway that is internationally recognized and protects against fraud and unauthorized transactions. In short, your payment is a 100% secure and you have nothing to worry!",
  },
  {
    title: "What type of payment options do you offer?",
    content:
      "We accept payments via all major international debit cards, credit cards, Google Pay and Apply Pay. Please not that Tickete being and online marketplace does not accept cash payments.",
  },
  {
    title: "When will I be charged for my booking?",
    content:
      "Your account will be charged immediately upon booking. If the booking is cancelled from your end or by our local tour operator, we will refund the entire amount to your account at not extra cost.",
  },
  {
    title: "Why am I begin charged in AED?",
    content:
      "All payments on Tickete are charged in AED. Your account will be debited with the spot rate for the conversion rate from your local currency AED. We understand this is less than ideal but, we're working on accepting payments in currencies around the world",
  },
  {
    title: "Will I get a complete refund if I cancel this ticket?",
    content:
      "The cancellation and refund policy varies per ticket. While some can be canceled up to 24, 48, or 72 hours before they start, several others can’t be canceled once the reservation has been confirmed. For the ones that can cancelled within the permissible cancellation period, you will receive a full refund. ",
  },
];

export default function Home() {
  const {
    isOpen: isOpenRefundStatusModal,
    onOpen: onOpenRefundStatusModal,
    onClose: onCloseRefundStatusModal,
  } = useDisclosure();

  return (
    <>
      <Head>
        <title>TicketE</title>
      </Head>
      <Navbar />
      <Box zIndex={1} pos={"sticky"} top={0}>
        <Timer time={"30:00"} />
      </Box>
      <Container>
        <VStack gap={20} py={{ md: 20, base: 10 }}>
          <HStack gap={10} alignItems={"flex-start"} w={"full"}>
            <VStack flexGrow={1} gap={20} w={"full"}>
              <Box w={"full"}>
                <Heading asStyle={"h1"}>Confirm & Pay</Heading>
              </Box>
              <HStack
                width={"full"}
                py={4}
                px={4}
                border={"1px solid"}
                borderColor={theme.colors._lightgray}
                borderRadius={"2xl"}
                alignItems={"flex-start"}
                justifyContent={"space-between"}
                _hover={{ cursor: "pointer" }}
                onClick={onOpenRefundStatusModal}
              >
                <VStack flexGrow={1} alignItems={"flex-start"} gap={0}>
                  <Text>Non-Refundable</Text>
                  <Text fontSize={"sm"} color={theme.colors._gray}>
                    These tickets can't be cancelled or rescheduled
                  </Text>
                </VStack>
                <ReadMore fill={theme.colors._gray} />
              </HStack>
              <Box w={"full"}>
                <VStack gap={10} alignItems={"flex-start"}>
                  <VStack alignItems={"flex-start"} gap={4}>
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>
                      Enter your details
                    </Text>
                    <Text color={theme.colors._gray}>
                      We'll be sending your tickets to the details below.
                      Booking for a friend? Add their details.
                    </Text>
                  </VStack>
                  <VStack gap={5} w={"full"}>
                    <Input
                      fontSize={"medium"}
                      borderRadius={"xl"}
                      px={4}
                      py={7}
                      width={"full"}
                      focusBorderColor={theme.colors._lightgray}
                      placeholder="Full Name*"
                    />
                    <HStack width={"full"} gap={5}>
                      <Input
                        fontSize={"medium"}
                        borderRadius={"xl"}
                        px={4}
                        py={7}
                        width={"full"}
                        focusBorderColor={theme.colors._lightgray}
                        placeholder="Country Code*"
                      />
                      <Input
                        fontSize={"medium"}
                        borderRadius={"xl"}
                        px={4}
                        py={7}
                        width={"full"}
                        focusBorderColor={theme.colors._lightgray}
                        placeholder="Phone Number*"
                      />
                    </HStack>

                    <HStack width={"full"} gap={5}>
                      <Input
                        fontSize={"medium"}
                        borderRadius={"xl"}
                        px={4}
                        py={7}
                        width={"full"}
                        focusBorderColor={theme.colors._lightgray}
                        placeholder="Email*"
                      />
                      <Input
                        fontSize={"medium"}
                        borderRadius={"xl"}
                        px={4}
                        py={7}
                        width={"full"}
                        focusBorderColor={theme.colors._lightgray}
                        placeholder="Confirm Email*"
                      />
                    </HStack>
                  </VStack>
                  <Box width={"full"} mt={2}>
                    <Divider borderColor={theme.colors._lightgray} />
                  </Box>
                </VStack>
              </Box>
              <Box w={"full"}>
                <VStack gap={10} alignItems={"flex-start"}>
                  <VStack alignItems={"flex-start"} gap={4}>
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>
                      Select your mode of payment
                    </Text>
                    <Text color={theme.colors._gray}>
                      Payments with Tickete are secure and encrypted.
                    </Text>
                  </VStack>
                  <VStack alignItems={"flex-start"} gap={5} w={"full"}>
                    <VStack
                      alignItems={"flex-start"}
                      gap={10}
                      width={"full"}
                      borderRadius={"2xl"}
                      py={10}
                      px={5}
                      border={"1px solid"}
                      borderColor={theme.colors._black}
                    >
                      <HStack>
                        <CreditCard />
                        <Text>Credit & debit card</Text>
                      </HStack>
                      <VStack gap={5} w={"full"}>
                        <Input
                          fontSize={"medium"}
                          borderRadius={"xl"}
                          px={4}
                          py={7}
                          width={"full"}
                          focusBorderColor={theme.colors._lightgray}
                          placeholder="Card Number"
                        />
                        <HStack width={"full"} gap={5}>
                          <Input
                            fontSize={"medium"}
                            borderRadius={"xl"}
                            px={4}
                            py={7}
                            width={"full"}
                            focusBorderColor={theme.colors._lightgray}
                            placeholder="MM/YY"
                          />
                          <Input
                            fontSize={"medium"}
                            borderRadius={"xl"}
                            px={4}
                            py={7}
                            width={"full"}
                            focusBorderColor={theme.colors._lightgray}
                            placeholder="CVV"
                          />
                        </HStack>

                        <HStack width={"full"} gap={5}>
                          <Input
                            fontSize={"medium"}
                            borderRadius={"xl"}
                            px={4}
                            py={7}
                            width={"full"}
                            focusBorderColor={theme.colors._lightgray}
                            placeholder="Email"
                          />
                          <Input
                            fontSize={"medium"}
                            borderRadius={"xl"}
                            px={4}
                            py={7}
                            width={"full"}
                            focusBorderColor={theme.colors._lightgray}
                            placeholder="Name on Card"
                          />
                        </HStack>
                      </VStack>
                      <VStack alignItems={"flex-start"} gap={7} w={"full"}>
                        <HStack
                          width={"full"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <Text fontWeight={"semibold"} fontSize={"xl"}>
                            Total payable: ₹621.10
                          </Text>
                          <Tag
                            icon={<PiggyBank />}
                            bg={theme.colors._lightgreen}
                            color={theme.colors._green}
                            border={"none"}
                            fontWeight={"semibold"}
                          >
                            You save ₹56.46
                          </Tag>
                        </HStack>
                        <HStack gap={5}>
                          <Link href={"/"}>
                            <Text
                              color={theme.colors._gray}
                              textDecoration={"underline"}
                              fontSize={"sm"}
                            >
                              You will be charged in AED
                            </Text>
                          </Link>
                          <Tooltip label={"The price shown here are in INR"}>
                            <Box>
                              <ReadMore fill={theme.colors._gray} />
                            </Box>
                          </Tooltip>
                        </HStack>
                        <Text fontSize={"sm"} color={theme.colors._gray}>
                          By clicking “Confirm & pay”, you agree to Tickete’s
                          terms and conditions and cancellation policy.
                        </Text>
                        <Box mt={5}>
                          <Button
                            leftIcon={
                              <Lock
                                width={18}
                                height={18}
                                fill={theme.colors._white}
                              />
                            }
                            primary
                            size={"lg"}
                            borderRadius={"2xl"}
                          >
                            Confirm & Pay
                          </Button>
                        </Box>
                      </VStack>
                    </VStack>
                    <HStack
                      w={"full"}
                      borderRadius={"2xl"}
                      p={7}
                      border={"1px solid"}
                      borderColor={theme.colors._lightgray}
                      bg={theme.colors._lightblue}
                    >
                      <Text color={theme.colors._gray} fontWeight={"semibold"}>
                        Coming Soon
                      </Text>
                    </HStack>
                    <HStack
                      w={"full"}
                      borderRadius={"2xl"}
                      p={7}
                      border={"1px solid"}
                      borderColor={theme.colors._lightgray}
                      bg={theme.colors._lightblue}
                    >
                      <Text color={theme.colors._gray} fontWeight={"semibold"}>
                        Coming Soon
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
              <Box w={"full"}>
                <VStack gap={10} alignItems={"flex-start"}>
                  <Text fontSize={"2xl"} fontWeight={"semibold"}>
                    Total payable: ₹621.10
                  </Text>
                  <HStack
                    width={"full"}
                    p={4}
                    border={"1px solid"}
                    borderColor={theme.colors._lightgray}
                    borderRadius={"2xl"}
                    alignItems={"flex-start"}
                    justifyContent={"space-between"}
                    _hover={{ cursor: "pointer" }}
                  >
                    <ReadMore fill={theme.colors._black} />
                    <VStack flexGrow={1} alignItems={"flex-start"} gap={0}>
                      <Text>You will be charged in AED</Text>
                      <Text color={theme.colors._gray} fontSize={"sm"}>
                        The price shown here is in INR (INR) as per the current
                        conversion rate. You will be charged in AED (AED 27.50).
                      </Text>
                    </VStack>
                  </HStack>
                  <Box width={"full"} mt={2}>
                    <Divider borderColor={theme.colors._lightgray} />
                  </Box>
                </VStack>
              </Box>
            </VStack>
            <Box
              border={"1px solid"}
              borderColor={theme.colors._lightgray}
              borderRadius={"2xl"}
              padding={5}
              position={"sticky"}
              top={20}
              w={600}
            >
              <VStack gap={4} alignItems={"flex-start"} w={"full"}>
                <Box
                  w={"full"}
                  h={150}
                  border={"1px solid"}
                  borderColor={theme.colors._lightgray}
                  borderRadius={"2xl"}
                  position={"relative"}
                  overflow={"hidden"}
                >
                  <Image
                    alt="img"
                    layout="fill"
                    objectFit="cover"
                    src={"/img.webp"}
                  />
                </Box>
                <Box>
                  <VStack alignItems={"flex-start"}>
                    <HStack fontSize={"sm"}>
                      <Star width={18} height={18} />
                      <Text>6.4(75)</Text>
                    </HStack>
                    <Text fontWeight={"semibold"} fontSize={"md"}>
                      Global Village Dubai
                    </Text>
                  </VStack>
                  <VStack gap={4} alignItems={"flex-start"} py={5}>
                    <HStack gap={4}>
                      <AccessStatus width={20} height={20} />
                      <Text>Global Village: Any Day Access</Text>
                    </HStack>
                    <HStack gap={4}>
                      <Calendar width={20} height={20} />
                      <Text>Sat, Feb 10 2024</Text>
                    </HStack>
                    <HStack gap={4}>
                      <Guest width={20} height={20} />
                      <Text> 1 Guests</Text>
                    </HStack>
                  </VStack>
                </Box>
                <Divider borderColor={theme.colors._lightgray} />
                <HStack
                  width={"full"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={"lg"}>Total payable: ₹621.10</Text>
                  <Tag
                    icon={<PiggyBank />}
                    bg={theme.colors._lightgreen}
                    color={theme.colors._green}
                    border={"none"}
                    fontWeight={"semibold"}
                  >
                    You save ₹56.46
                  </Tag>
                </HStack>
                <HStack gap={5}>
                  <Link href={"/"}>
                    <Text
                      color={theme.colors._gray}
                      textDecoration={"underline"}
                      fontSize={"sm"}
                    >
                      You will be charged in AED
                    </Text>
                  </Link>
                  <Tooltip label={"The price shown here are in INR"}>
                    <Box>
                      <ReadMore fill={theme.colors._gray} />
                    </Box>
                  </Tooltip>
                </HStack>
                <Text fontSize={"sm"} color={theme.colors._gray}>
                  By clicking “Confirm & pay”, you agree to Tickete’s terms and
                  conditions and cancellation policy.
                </Text>
                <Button
                  w={"full"}
                  leftIcon={
                    <Lock width={18} height={18} fill={theme.colors._white} />
                  }
                  primary
                  size={"lg"}
                  borderRadius={"2xl"}
                >
                  Confirm & Pay
                </Button>
              </VStack>
            </Box>
          </HStack>

          <Box w="full">
            <HStack alignItems={"flex-start"}>
              <VStack
                minW={{ md: 450, base: "100%" }}
                alignItems={"flex-start"}
                gap={4}
              >
                <Text fontSize={"2xl"} fontWeight={"semibold"}>
                  Frequently asked questions
                </Text>
                <Text color={theme.colors._gray}>
                  Here are some of our most asked questions.
                </Text>
              </VStack>
              <VStack alignItems={"stretch"} flexGrow={1}>
                <Accordion items={FAQData} />
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Container>

      <Footer />

      <DynamicRefundStatusModal
        isOpen={isOpenRefundStatusModal}
        onOpen={onOpenRefundStatusModal}
        onClose={onCloseRefundStatusModal}
      />
    </>
  );
}
