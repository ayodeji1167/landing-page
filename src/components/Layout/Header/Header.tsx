'use client';
import React from 'react';
import Flex from '@/components/Ui/chakra/Flex';
import Box from '@/components/Ui/chakra/Box';
import Button from '@/components/Ui/chakra/Button';
import { Logo } from '@/components/Logo/Logo';
import Link from 'next/link';
import NavItem from './NavItem';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import { IoIosMenu } from 'react-icons/io';
import MobileHeader from './MobileHeader';
import { LiaTimesSolid } from 'react-icons/lia';

import { useDisclosure } from '@chakra-ui/react';
export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <header style={{ position: 'relative' }}>
      <SizeWrapper>
        <Flex
          bg={'white'}
          zIndex={20}
          position={'relative'}
          h={{ base: '3.75rem', md: '5rem' }}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Box w={{ base: '3rem', md: '4rem' }} cursor={'pointer'}>
            <Logo to="/" />
          </Box>
          <Flex
            display={{ base: 'none', md: 'flex' }}
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
            {isOpen ? (
              <LiaTimesSolid
                onClick={onToggle}
                cursor={'pointer'}
                size={'2.2rem'}
              />
            ) : (
              <IoIosMenu
                onClick={onToggle}
                cursor={'pointer'}
                size={'2.2rem'}
              />
            )}
          </Box>
        </Flex>
      </SizeWrapper>
      <Box
        display={{ base: 'block', md: 'none' }}
        zIndex={'10'}
        position={'absolute'}
        top={isOpen ? 0 : '-100vh'}
        transition={'1s all ease'}
        left={'0'}
      >
        <MobileHeader onToggle={onToggle} />
      </Box>
    </header>
  );
}
