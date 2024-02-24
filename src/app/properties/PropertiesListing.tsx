import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import Grid from '@/components/Ui/chakra/Grid';
import GridItem from '@/components/Ui/chakra/GridItem';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import { properties } from '@/data/propertiesLists';
import PropertyCard from './components/propertieslisting/PropertyCard';
import Pagination from './components/propertieslisting/Pagination';
export default function PropertiesListing() {
  return (
    <Box mt={'3.7rem'}>
      <SizeWrapper>
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(3, 1fr)',
          }}
          gap={'1.5rem'}
          rowGap={'3rem'}
          mb={'5rem'}
        >
          {properties.map((item, index) => (
            <GridItem key={index}>
              <PropertyCard {...item} />
            </GridItem>
          ))}
        </Grid>
        <Pagination />
      </SizeWrapper>
    </Box>
  );
}
