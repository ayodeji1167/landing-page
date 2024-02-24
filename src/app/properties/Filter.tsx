'use client';

import { Box, Button, Flex } from '@chakra-ui/react';
import SearchInput from './components/SearchInput';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import InterestedIn from './components/InterestedIn';
import PropertyType from './components/PropertyType';
import Bedroom from './components/Bedroom';
import Price from './components/Price';
import OtherFilter from './components/OtherFilter';

export default function Filter() {
  return (
    <Box py={'3.2rem'}>
      <SizeWrapper>
        <Flex gap={'1.5rem'} alignItems={'center'}>
          <SearchInput />
          <InterestedIn />
          <PropertyType />
          <Bedroom />
          <Price />
          <Button h={'3rem'} minW={'10rem'}>
            Search
          </Button>
          <OtherFilter />
        </Flex>
      </SizeWrapper>
    </Box>
  );
}
