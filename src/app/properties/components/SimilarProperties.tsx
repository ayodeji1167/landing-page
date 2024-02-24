import React from 'react';
import Text from '@/components/Ui/chakra/Text';
import Box from '@/components/Ui/chakra/Box';
import Grid from '@/components/Ui/chakra/Grid';
import GridItem from '@/components/Ui/chakra/GridItem';
import { properties } from '@/data/propertiesLists';
import PropertyCard from './propertieslisting/PropertyCard';
export default function SimilarProperties() {
  const similarProperties = properties.slice(0, 3);
  return (
    <Box mt={'4rem'}>
      <Text textTransform={'uppercase'} mb={'2rem'} variant={'subHeading'}>
        Similar properties
      </Text>
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
        {similarProperties.map((item, index) => (
          <GridItem key={index}>
            <PropertyCard {...item} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
