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
    <Box pt={'3.2rem'}>
      <SizeWrapper>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          gap={'1.5rem'}
          alignItems={'center'}
          flexWrap={'wrap'}
        >
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
        <Box display={{ base: 'none', md: 'block' }}>
          <PopularSearches />
        </Box>

        {/* ==========MOBILE FILTER ================ */}
        <Box display={{ base: 'block', md: 'none' }}>
          <Box>
            <SearchInput />
          </Box>
          <Flex
            mt={'1rem'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <InterestedIn /> <OtherFilter /> <Price />
          </Flex>
        </Box>
      </SizeWrapper>
    </Box>
  );
}
