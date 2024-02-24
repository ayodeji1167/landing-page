'use client';

import { Box, Flex } from '@chakra-ui/react';
import SearchInput from './components/SearchInput';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import InterestedIn from './components/InterestedIn';

export default function Filter() {
  return (
    <Box py={'3.2rem'}>
      <SizeWrapper>
        <Flex gap={'1.5rem'} alignItems={'center'}>
          <SearchInput />
          <InterestedIn />
        </Flex>
      </SizeWrapper>
    </Box>
  );
}
