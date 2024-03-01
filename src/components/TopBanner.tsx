import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import Text from '@/components/Ui/chakra/Text';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';

export default function TopBanner({
  name,
  fontSize,
  description,
}: {
  name?: string;
  fontSize?: string;
  description?: string;
}) {
  return (
    <Box bg={'#510C23'} py={{ base: '2rem', md: '2.3rem' }}>
      <SizeWrapper>
        <Text
          fontSize={{ base: fontSize || '1.2rem', md: fontSize || '2rem' }}
          textAlign={'center'}
          as={'h1'}
          fontFamily={'heading'}
          fontWeight={700}
          color={'#F3E8EB'}
          textTransform={'uppercase'}
        >
          {name}
        </Text>
        {description && (
          <Text maxW={'35rem'} mx={'auto'} color={'white'} textAlign={'center'}>
            {description}
          </Text>
        )}
      </SizeWrapper>
    </Box>
  );
}
