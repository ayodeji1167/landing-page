import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Flex,
  Text,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import Trigger from './Trigger';

export default function Price() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <Popover onOpen={onOpen} onClose={onClose} isOpen={isOpen}>
      <PopoverTrigger>
        <Button variant={'unset'}>
          <Trigger name="Price" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        w={'26rem'}
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
            Price (AED):{' '}
          </Text>

          <Flex gap={'1rem'}>
            <Input
              placeholder="Min"
              border={'1px solid #A2A5AB !important'}
              h={'3rem'}
              rounded={'1.2rem'}
              boxShadow={'none'}
              outline={'none'}
              _focus={{
                boxShadow: 'none',
              }}
              _placeholder={{
                color: 'gray.300',
                fontsize: '14px',
                opacity: '0.5',
              }}
            />
            <Input
              placeholder="Max"
              border={'1px solid #A2A5AB !important'}
              h={'3rem'}
              rounded={'1.2rem'}
              boxShadow={'none'}
              outline={'none'}
              _focus={{
                boxShadow: 'none',
              }}
              _placeholder={{
                color: 'gray.300',
                fontsize: '14px',
                opacity: '0.5',
              }}
            />
          </Flex>

          <Flex mt={'1.8rem'} justifyContent={'space-between'}>
            <Button
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
