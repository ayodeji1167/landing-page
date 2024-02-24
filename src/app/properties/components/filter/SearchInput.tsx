'use client';
import { Flex, Input } from '@chakra-ui/react';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
export default function SearchInput() {
  return (
    <Flex
      border={'1px solid #A2A5AB'}
      borderRadius={'1.2rem'}
      alignItems={'center'}
      px={'.3rem'}
      h={'3rem'}
    >
      <CiSearch size={'1.5rem'} />
      <Input
        bg={'transparent'}
        border={'none'}
        boxShadow={'none'}
        _placeholder={{
          color: 'gray.200',
          fontsize: '14px',
        }}
        outline={'none'}
        _focus={{
          boxShadow: 'none',
        }}
        placeholder="Search and select area"
        w={'20rem'}
      />
    </Flex>
  );
}
