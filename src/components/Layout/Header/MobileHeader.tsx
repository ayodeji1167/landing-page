'use client';
import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import NavItem from './NavItem';

export default function MobileHeader({ onToggle }: any) {
  return (
    <Box h={'100vh'} w={'100vw'} bg={'white'} pt={'5rem'}>
      <Stack
        onClick={onToggle}
        alignItems={'center'}
        pt={'4rem'}
        gap={'2rem'}
        borderTop={'1px solid rgba(0,0,0,0.1)'}
      >
        <NavItem link="/" name="Home" />
        <NavItem link="/properties" name="Properties" />
        <NavItem link="/about" name="About" />
        <NavItem link="/contact" name="Contact" />
      </Stack>
    </Box>
  );
}
