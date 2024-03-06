import {
  Popover,
  PopoverTrigger,
  Button,
  Text,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Flex,
  Center,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { propertyType } from '@/data/propertyType';
import Trigger from './Trigger';

export function PropertyTypeItem({
  setType,
  type,
}: {
  setType: any;
  type: any;
}) {
  return (
    <>
      <Text
        fontFamily={'heading'}
        fontWeight={'700'}
        fontSize={{ base: '.9rem', md: '1.3rem' }}
        mb={'.7rem'}
      >
        Property type:
      </Text>

      <Flex flexWrap={'wrap'} gap={{ base: '.6rem', md: '.8rem' }}>
        {propertyType.map((item) => {
          const isCurrentType = item.value === type;
          return (
            <Center
              border={
                isCurrentType ? '1px solid #CD9FAE' : ' 1px solid #A2A5AB'
              }
              bg={isCurrentType ? '#F3E8EB' : 'transparent'}
              fontWeight={isCurrentType ? '600' : '400'}
              color={isCurrentType ? 'primary.500' : 'black'}
              py={'.3rem'}
              px={{ base: '1rem', md: '1.8rem' }}
              rounded={'1.3rem'}
              key={item.name}
              onClick={() => setType(item.value)}
              cursor={'pointer'}
              fontSize={{ base: '.7rem', md: '.9rem' }}
            >
              {item.name}
            </Center>
          );
        })}
      </Flex>
    </>
  );
}
export default function PropertyType() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [type, setType] = useState<string>('any');

  return (
    <Popover onOpen={onOpen} onClose={onClose} isOpen={isOpen}>
      <PopoverTrigger>
        <Button variant={'unset'}>
          <Trigger name="Property type" />
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
          <PropertyTypeItem setType={setType} type={type} />

          <Flex mt={'1.8rem'} justifyContent={'space-between'}>
            <Button
              onClick={() => setType('any')}
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
