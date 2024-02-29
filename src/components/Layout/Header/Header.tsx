import React from 'react';
import Flex from '@/components/Ui/chakra/Flex';
import Box from '@/components/Ui/chakra/Box';
import Button from '@/components/Ui/chakra/Button';
import { Logo } from '@/components/Logo/Logo';
import Link from 'next/link';
import NavItem from './NavItem';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import { IoIosMenu } from 'react-icons/io';
export default function Header() {
  return (
    <header>
      <SizeWrapper>
        <Flex h={'5rem'} alignItems={'center'} justifyContent={'space-between'}>
          <Box w={'4rem'} cursor={'pointer'}>
            <Logo to="/" />
          </Box>
          <Flex
            display={{ base: 'none', md: 'block' }}
            alignItems={'center'}
            gap={'2.3rem'}
          >
            <NavItem link="/" name="Home" />
            <NavItem link="/properties" name="Properties" />
            <NavItem link="/about" name="About" />
            <NavItem link="/contact" name="Contact" />
          </Flex>
          <Box display={{ base: 'none', md: 'block' }}>
            <Link href={'/contact'}>
              <Button>Inquire</Button>
            </Link>
          </Box>
          <Box display={{ base: 'block', md: 'none' }}>
            <IoIosMenu cursor={'pointer'} size={'2.2rem'} />
          </Box>
        </Flex>
      </SizeWrapper>
    </header>
  );
}
