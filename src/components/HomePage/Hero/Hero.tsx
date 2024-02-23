import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import Text from '@/components/Ui/chakra/Text';
import Center from '@/components/Ui/chakra/Center';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import Search from './Search';
import ImageSlider from './ImageSlider';

export default function Hero() {
  return (
    <Box bg={'primary.700'} pt={'8rem'} pb={'1rem'} position={'relative'}>
      <SizeWrapper>
        <Center flexDir={'column'} gap={'1rem'}>
          <Text
            textTransform={'uppercase'}
            fontWeight={'700'}
            as={'h1'}
            fontSize={'3.2rem'}
            textAlign={'center'}
            color={'white'}
            fontFamily={'heading'}
            lineHeight={'3.25rem'}
            maxW={'60rem'}
          >
            Discover Your Dream Home in Dubai with BATs Properties
          </Text>
          <Text
            lineHeight={'1.5rem'}
            align={'center'}
            maxW={'40rem'}
            color={'white'}
            fontSize={'1.1rem'}
          >
            Explore our diverse range of residential and commercial properties,
            crafted to elevate your living and business experiences
          </Text>
        </Center>

        <Center mt={'2.5rem'}>
          <Search />
        </Center>
        <Box py={'.5rem'} mt={'2rem'}>
          <ImageSlider />
        </Box>
      </SizeWrapper>
    </Box>
  );
}
