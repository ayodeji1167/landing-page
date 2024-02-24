import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
export default function Trigger({ name }: { name: string }) {
  return (
    <Flex
      h={'3rem'}
      borderRadius={'1.2rem'}
      px={'1rem'}
      border={'1px solid #A2A5AB'}
      alignItems={'center'}
      color={'#A2A5AB'}
      gap={'1rem'}
      fontWeight={400}
      fontSize={'14px'}
      cursor={'pointer'}
    >
      <Text>{name}</Text>
      <RiArrowDownSLine />
    </Flex>
  );
}
