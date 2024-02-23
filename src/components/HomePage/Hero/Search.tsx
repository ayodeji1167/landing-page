'use client';
import { Button, Flex, Input } from '@chakra-ui/react';
import React from 'react';

export default function Search() {
  return (
    <Flex
      rounded={'3rem'}
      bg={'#F3E8EB'}
      alignItems={'center'}
      h={'3.6rem'}
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
          fontsize: '14px',
        }}
        outline={'none'}
        _focus={{
          boxShadow: 'none',
        }}
      />
      <Button px={'3rem'}>Search</Button>
    </Flex>
  );
}
