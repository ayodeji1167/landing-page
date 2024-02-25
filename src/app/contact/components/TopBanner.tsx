import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import Text from '@/components/Ui/chakra/Text';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';

export default function TopBanner() {
  return (
    <Box bg={'#510C23'} py={'2.3rem'}>
      <SizeWrapper>
        <Text
          mb={'0.5rem'}
          fontSize={'2rem'}
          textAlign={'center'}
          as={'h1'}
          fontFamily={'heading'}
          fontWeight={700}
          color={'#F3E8EB'}
          textTransform={'uppercase'}
        >
          Get in Touch with BATs Properties
        </Text>
        <Text maxW={'35rem'} mx={'auto'} color={'white'} textAlign={'center'}>
          {`We're here to answer your questions, address your concerns, and help
          you navigate the world of real estate in Dubai. Reach out to us today!`}
        </Text>
      </SizeWrapper>
    </Box>
  );
}
