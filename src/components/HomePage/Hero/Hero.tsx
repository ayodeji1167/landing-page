import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import Text from '@/components/Ui/chakra/Text';
import Center from '@/components/Ui/chakra/Center';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import Search from './Search';
import ImageSlider from './ImageSlider';

export default function Hero() {
  return (
    <Box
      bg={'primary.700'}
      pt={{ base: '5rem', md: '8rem' }}
      pb={'1rem'}
      position={'relative'}
    >
      <SizeWrapper>
        <Center flexDir={'column'} gap={{ base: '.8rem', md: '1rem' }}>
          <Text
            textTransform={'uppercase'}
            fontWeight={'700'}
            as={'h1'}
            fontSize={{ base: '1.2rem', md: '3.2rem' }}
            lineHeight={{ base: '1.5rem', md: '3.2rem' }}
            textAlign={'center'}
            color={'white'}
            fontFamily={'heading'}
            maxW={'60rem'}
          >
            Discover GIT WORK Your Dream Home in Dubai with BATs Properties
          </Text>
          <Text
            lineHeight={{ base: '1rem', md: '1.5rem' }}
            align={'center'}
            maxW={'40rem'}
            color={'white'}
            fontSize={{ base: '0.8rem', md: '1.1rem' }}
          >
            Explore our diverse range of residential and commercial properties,
            crafted to elevate your living and business experiences
          </Text>
        </Center>

        <Center mt={'2.5rem'}>
          <Search />
        </Center>
        <Box display={{ base: 'none', md: 'block' }} py={'.5rem'} mt={'2rem'}>
          <ImageSlider />
        </Box>
      </SizeWrapper>
      <Box display={{ base: 'block', md: 'none' }} py={'.5rem'}>
        <ImageSlider />
      </Box>
    </Box>
  );
}
