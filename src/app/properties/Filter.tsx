'use client';

import { Box, Button, Flex } from '@chakra-ui/react';
import SearchInput from './components/filter/SearchInput';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import InterestedIn from './components/filter/InterestedIn';
import PropertyType from './components/filter/PropertyType';
import Bedroom from './components/filter/Bedroom';
import Price from './components/filter/Price';
import OtherFilter from './components/filter/OtherFilter';
import PopularSearches from './components/filter/PopularSearches';

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
        <PopularSearches />
      </SizeWrapper>
    </Box>
  );
}
