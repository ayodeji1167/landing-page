import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  Text,
  PopoverArrow,
  PopoverBody,
  Flex,
  Input,
  useDisclosure,
  Checkbox,
  Box,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Trigger from './Trigger';
import { PropertyTypeItem } from './PropertyType';
import { BedroomItem } from './Bedroom';

export default function OtherFilter() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [type, setType] = useState<string>('any');
  const [room, setRoom] = useState<string>('any');

  return (
    <Popover onOpen={onOpen} onClose={onClose} isOpen={isOpen}>
      <PopoverTrigger>
        <Button variant={'unset'}>
          <Trigger name="Filters" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        w={{ base: '100vw', md: '26rem' }}
        p={'.5rem'}
        rounded={'1rem'}
        border="none"
        boxShadow="0px 1px 2px 0px #0000001A, 0px 4px 4px 0px #00000017, 0px 9px 5px 0px #0000000D, 0px 15px 6px 0px #00000003, 0px 24px 7px 0px #00000000, 0px 1px 0px 0px #6867671A, 0px -4px 4px 0px #0000001A" // Apply the specified box shadows
      >
        <PopoverArrow />

        <PopoverBody>
          <Box display={{ base: 'block', md: 'none' }}>
            <Box mb={'1rem'}>
              <PropertyTypeItem setType={setType} type={type} />
            </Box>
            <Box mb={'1rem'}>
              <BedroomItem setRoom={setRoom} room={room} />
            </Box>
            {/* <Box mb={'1rem'}>
              <PropertyTypeItem setType={setType} type={type} />
            </Box> */}
          </Box>

          <Text
            fontFamily={'heading'}
            fontWeight={'700'}
            fontSize={{ base: '.9rem', md: '1.3rem' }}
            mb={'.7rem'}
          >
            Area (Sqft)
          </Text>

          <Flex gap={'1rem'}>
            <Input
              placeholder="Min"
              border={'1px solid #A2A5AB !important'}
              h={{ base: '2.5rem', md: '3rem' }}
              rounded={'1.2rem'}
              boxShadow={'none'}
              outline={'none'}
              _focus={{
                boxShadow: 'none',
              }}
              _placeholder={{
                color: 'gray.300',
                fontSize: '14px',
                opacity: '0.5',
              }}
              fontSize={{ base: '.7rem', md: '.9rem' }}
            />
            <Input
              placeholder="Max"
              border={'1px solid #A2A5AB !important'}
              h={{ base: '2.5rem', md: '3rem' }}
              rounded={'1.2rem'}
              boxShadow={'none'}
              outline={'none'}
              _focus={{
                boxShadow: 'none',
              }}
              _placeholder={{
                color: 'gray.300',
                fontSize: '14px',
                opacity: '0.5',
              }}
              fontSize={{ base: '.7rem', md: '.9rem' }}
            />
          </Flex>

          {/* ======================================================================================= */}
          <Text
            fontFamily={'heading'}
            fontWeight={'700'}
            fontSize={{ base: '.9rem', md: '1.3rem' }}
            mb={'.7rem'}
            mt={'1.2rem'}
          >
            Other specs
          </Text>

          <Flex flexWrap={'wrap'} gap={'1rem'}>
            <Checkbox size={{ base: 'sm', md: 'md' }} colorScheme="primary">
              Reduced price
            </Checkbox>
            <Checkbox size={{ base: 'sm', md: 'md' }} colorScheme="primary">
              Beachfront
            </Checkbox>
            <Checkbox size={{ base: 'sm', md: 'md' }} colorScheme="primary">
              Waterfront{' '}
            </Checkbox>
            <Checkbox size={{ base: 'sm', md: 'md' }} colorScheme="primary">
              Furnished{' '}
            </Checkbox>
            <Checkbox size={{ base: 'sm', md: 'md' }} colorScheme="primary">
              360 degree Tour{' '}
            </Checkbox>
          </Flex>

          <Flex mt={'1.8rem'} justifyContent={'space-between'}>
            <Button
              fontWeight={'400'}
              color={'black'}
              variant={'ghost'}
              border={'1px solid #7B8088'}
              w={'7rem'}
            >
              Reset
            </Button>
            <Button w={'7rem'} onClick={onClose}>
              Done
            </Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
