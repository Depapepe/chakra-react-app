import { Button, Flex, HStack, Input, Text, useNumberInput } from "@chakra-ui/react";

function AmountInput() {
  const {getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 10
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps()
  const input = getInputProps();

  return (
    <Flex
      w="100%"
      flexDirection="column"
      alignItems="center"
      border="1px solid rgb(237, 237, 237)"
      p="12px 14px 16px"
      gap="8px"
    >
      <Text fontWeight="700"> 상품 수량 테스트 </Text>
      <HStack>
        <Button {...dec}>-</Button>
        <Input {...input}/>
        <Button {...inc}>+</Button>
      </HStack>
    </Flex>
  )
}

export default AmountInput;