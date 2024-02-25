import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import Text from '@/components/Ui/chakra/Text';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';

export default function TopBanner({
  name,
  fontSize,
}: {
  name?: string;
  fontSize?: string;
}) {
  return (
    <Box bg={'#510C23'} py={'2.3rem'}>
      <SizeWrapper>
        <Text
          fontSize={fontSize || '2rem'}
          textAlign={'center'}
          as={'h1'}
          fontFamily={'heading'}
          fontWeight={700}
          color={'#F3E8EB'}
          textTransform={'uppercase'}
        >
          {name}
        </Text>
      </SizeWrapper>
    </Box>
  );
}
