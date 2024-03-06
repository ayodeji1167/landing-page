'use client';
import { Button, Flex, Input } from '@chakra-ui/react';
import React from 'react';

export default function Search() {
  return (
    <Flex
      rounded={'3rem'}
      bg={'#F3E8EB'}
      alignItems={'center'}
      h={{ base: '2.5rem', md: '3.6rem' }}
      width={'30rem'}
      overflow={'hidden'}
      pl={'1rem'}
      pr={'.5rem'}
    >
      <Input
        placeholder="Search by area or project name"
        border={'none'}
        boxShadow={'none'}
        _placeholder={{
          color: 'gray.300',
          fontSize: { base: '12px', md: '14px' },
        }}
        outline={'none'}
        _focus={{
          boxShadow: 'none',
        }}
      />
      <Button display={{ base: 'none', md: 'flex' }} px={'3rem'}>
        Search
      </Button>
    </Flex>
  );
}
