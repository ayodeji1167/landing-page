import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Flex,
  Center,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Trigger from './Trigger';
import { baths, bedroom } from '@/data/rooms';

export default function Bedroom() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [room, setRoom] = useState<string>('any');
  const [bath, setBath] = useState<string>('any');
  return (
    <Popover onOpen={onOpen} onClose={onClose} isOpen={isOpen}>
      <PopoverTrigger>
        <Button variant={'unset'}>
          <Trigger name="Beds & bathrooms" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        w={'30rem'}
        p={'.5rem'}
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
            Bedrooms:
          </Text>

          <Flex flexWrap={'wrap'} gap={'.8rem'}>
            {bedroom.map((item) => {
              const isCurrentType = item.value === room;
              return (
                <Center
                  border={
                    isCurrentType ? '1px solid #CD9FAE' : ' 1px solid #A2A5AB'
                  }
                  bg={isCurrentType ? '#F3E8EB' : 'transparent'}
                  fontWeight={isCurrentType ? '600' : '400'}
                  color={isCurrentType ? 'primary.500' : 'black'}
                  py={'.3rem'}
                  px={'1.8rem'}
                  rounded={'1.3rem'}
                  key={item.name}
                  onClick={() => setRoom(item.value)}
                  cursor={'pointer'}
                >
                  {item.name}
                </Center>
              );
            })}
          </Flex>
          {/* ====================================================================================== */}
          <Text
            fontFamily={'heading'}
            fontWeight={'700'}
            fontSize={'1.3rem'}
            mb={'.7rem'}
            mt={'1.8rem'}
          >
            Bathrooms
          </Text>

          <Flex flexWrap={'wrap'} gap={'.8rem'}>
            {baths.map((item) => {
              const isCurrentType = item.value === bath;
              return (
                <Center
                  border={
                    isCurrentType ? '1px solid #CD9FAE' : ' 1px solid #A2A5AB'
                  }
                  bg={isCurrentType ? '#F3E8EB' : 'transparent'}
                  fontWeight={isCurrentType ? '600' : '400'}
                  color={isCurrentType ? 'primary.500' : 'black'}
                  py={'.3rem'}
                  px={'1.8rem'}
                  rounded={'1.3rem'}
                  key={item.name}
                  onClick={() => setBath(item.value)}
                  cursor={'pointer'}
                >
                  {item.name}
                </Center>
              );
            })}
          </Flex>

          <Flex mt={'1.8rem'} justifyContent={'space-between'}>
            <Button
              onClick={() => {
                setRoom('any');
                setBath('any');
              }}
              fontWeight={'400'}
              color={'black'}
              variant={'ghost'}
              border={'1px solid #7B8088'}
            >
              Reset
            </Button>
            <Button onClick={onClose}>Done</Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
