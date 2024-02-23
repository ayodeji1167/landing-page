'use client';

import { Box, Flex } from '@chakra-ui/react';
import SearchInput from './components/SearchInput';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';

export default function Filter() {
  return (
    <Box py={'3.2rem'}>
      <SizeWrapper>
        <Flex alignItems={'center'}>
          <SearchInput />
        </Flex>
      </SizeWrapper>
    </Box>
  );
}
