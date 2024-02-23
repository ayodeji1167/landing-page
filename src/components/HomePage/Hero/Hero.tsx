import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import Text from '@/components/Ui/chakra/Text';
import Text from '@/components/Ui/chakra/Text';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';

export default function Hero() {
  return (
    <Box bg={'primary.500'} pt={'8rem'}>
      <SizeWrapper>
        <Text
          textTransform={'uppercase'}
          fontWeight={'700'}
          as={'h1'}
          fontSize={'3rem'}
          textAlign={'center'}
          color={'white'}
          fontFamily={'heading'}
          lineHeight={'3.1rem'}
          maxW={'30rem'}
        >
          Discover Your Dream Home in Dubai with BATs Properties
        </Text>
      </SizeWrapper>
    </Box>
  );
}
