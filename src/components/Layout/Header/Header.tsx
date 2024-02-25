import React from 'react';
import Flex from '@/components/Ui/chakra/Flex';
import Box from '@/components/Ui/chakra/Box';
import Button from '@/components/Ui/chakra/Button';
import { Logo } from '@/components/Logo/Logo';
import Link from 'next/link';
import NavItem from './NavItem';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';

export default function Header() {
  return (
    <header>
      <SizeWrapper>
        <Flex h={'5rem'} alignItems={'center'} justifyContent={'space-between'}>
          <Box w={'4rem'} cursor={'pointer'}>
            <Logo to="/" />
          </Box>
          <Flex alignItems={'center'} gap={'2.3rem'}>
            <NavItem link="/" name="Home" />
            <NavItem link="/properties" name="Properties" />
            <NavItem link="/about" name="About" />
            <NavItem link="/contact" name="Contact" />
          </Flex>
          <Link href={'/contact'}>
            <Button>Inquire</Button>
          </Link>
        </Flex>
      </SizeWrapper>
    </header>
  );
}
