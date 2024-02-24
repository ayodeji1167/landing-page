'use client';

import { Box, Flex } from '@chakra-ui/react';
import SearchInput from './components/SearchInput';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import InterestedIn from './components/InterestedIn';
import PropertyType from './components/PropertyType';
import Bedroom from './components/Bedroom';

export default function Filter() {
  return (
    <Box py={'3.2rem'}>
      <SizeWrapper>
        <Flex gap={'1.5rem'} alignItems={'center'}>
          <SearchInput />
          <InterestedIn />
          <PropertyType />
          <Bedroom />
        </Flex>
      </SizeWrapper>
    </Box>
  );
}
