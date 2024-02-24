'use client';
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Flex,
  Text,
  Center,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Trigger from './Trigger';

export default function InterestedIn() {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const [interest, setInterest] = useState<'buy' | 'rent'>('buy');
  const itsBuy = interest === 'buy';
  return (
    <Popover onOpen={onOpen} onClose={onClose} isOpen={isOpen}>
      <PopoverTrigger>
        <Button variant={'unset'}>
          <Trigger name="Interested to " />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        p={'.5rem'}
        w={'17rem'}
        rounded={'1rem'}
        border="none"
        boxShadow="0px 1px 2px 0px #0000001A, 0px 4px 4px 0px #00000017, 0px 9px 5px 0px #0000000D, 0px 15px 6px 0px #00000003, 0px 24px 7px 0px #00000000, 0px 1px 0px 0px #6867671A, 0px -4px 4px 0px #0000001A" // Apply the specified box shadows
      >
        <PopoverArrow />

        <PopoverBody>
          <Text
            fontFamily={'heading'}
            fontWeight={'700'}
            fontSize={'1.3rem'}
            mb={'.7rem'}
          >
            Interested to:
          </Text>

          <Flex
            border="1px solid #CD9FAE"
            rounded={'1.35rem'}
            h={'3.3rem'}
            alignItems={'Center'}
            justifyContent={'space-between'}
            px={'1rem'}
            mb={'1.8rem'}
          >
            <Center
              color={itsBuy ? 'primary.500' : 'black'}
              fontWeight={itsBuy ? '600' : '400'}
              bg={itsBuy ? '#F3E8EB' : 'transparent'}
              cursor={'pointer'}
              py={'.3rem'}
              px={'1.8rem'}
              rounded={'1.3rem'}
              onClick={() => setInterest('buy')}
            >
              Buy
            </Center>
            <Center
              color={!itsBuy ? 'primary.500' : 'black'}
              fontWeight={!itsBuy ? '600' : '400'}
              bg={!itsBuy ? '#F3E8EB' : 'transparent'}
              cursor={'pointer'}
              py={'.3rem'}
              px={'1.8rem'}
              rounded={'1.3rem'}
              onClick={() => setInterest('rent')}
            >
              Rent
            </Center>
          </Flex>

          <Flex justifyContent={'flex-end'}>
            <Button onClick={onClose}>Done</Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
