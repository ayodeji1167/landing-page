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
        rounded={{ base: '.8rem', md: '1rem' }}
        border="none"
        boxShadow="0px 1px 2px 0px #0000001A, 0px 4px 4px 0px #00000017, 0px 9px 5px 0px #0000000D, 0px 15px 6px 0px #00000003, 0px 24px 7px 0px #00000000, 0px 1px 0px 0px #6867671A, 0px -4px 4px 0px #0000001A" // Apply the specified box shadows
      >
        <PopoverArrow />

        <PopoverBody>
          <Text
            fontFamily={'heading'}
            fontWeight={'700'}
            fontSize={{ base: '.9rem', md: '1.3rem' }}
            mb={'.7rem'}
          >
            Interested to:
          </Text>

          <Flex
            border="1px solid #CD9FAE"
            rounded={{ base: '1rem', md: '1.35rem' }}
            h={{ base: '2.9rem', md: '3.3rem' }}
            alignItems={'Center'}
            justifyContent={'space-between'}
            px={{ base: '.5rem', md: '1rem' }}
            mb={'1.8rem'}
          >
            <Center
              color={itsBuy ? 'primary.500' : 'black'}
              fontWeight={itsBuy ? '600' : '400'}
              bg={itsBuy ? '#F3E8EB' : 'transparent'}
              cursor={'pointer'}
              py={'.3rem'}
              px={'1.8rem'}
              rounded={{ base: '.8rem', md: '1.3rem' }}
              onClick={() => setInterest('buy')}
              fontSize={{ base: '.8rem', md: '1rem' }}
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
              rounded={{ base: '.8rem', md: '1.3rem' }}
              onClick={() => setInterest('rent')}
              fontSize={{ base: '.8rem', md: '1rem' }}
            >
              Rent
            </Center>
          </Flex>

          <Flex justifyContent={'flex-end'}>
            <Button w={'7rem'} onClick={onClose}>
              Done
            </Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
