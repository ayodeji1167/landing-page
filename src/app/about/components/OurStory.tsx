import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import Grid from '@/components/Ui/chakra/Grid';
import GridItem from '@/components/Ui/chakra/GridItem';
import Image from '@/components/Ui/chakra/Image';
import Text from '@/components/Ui/chakra/Text';
import img1 from '@/assets/properties/p2.png';
import img2 from '@/assets/properties/p13.png';
export default function OurStory() {
  return (
    <Box pt={'4rem'}>
      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(2, 1fr)',
          xl: 'repeat(2, 1fr)',
        }}
        gap={'1.5rem'}
        rowGap={'3rem'}
        mb={'5rem'}
      >
        <GridItem h={'25rem'}>
          <Image
            objectFit={'cover'}
            w={'100%'}
            h={'100%'}
            src={img1.src}
            alt="image1"
          />
        </GridItem>
        <GridItem h={'25rem'}>
          <Image
            objectFit={'cover'}
            w={'100%'}
            h={'100%'}
            src={img2.src}
            alt="image1"
          />
        </GridItem>
      </Grid>

      <Box mt={'2.5rem'}>
        <Text mb={'1rem'} variant={'subHeading'} textTransform={'uppercase'}>
          Our Story
        </Text>
        <Text fontSize={'1.2rem'} color={'#424955'}>
          At BATs Properties, we believe that finding the perfect home or
          investment property should be an exciting and rewarding experience.
          Our journey began with a passion for real estate and a vision to
          redefine the industry standards in Dubai. Since our inception, we have
          remained committed to excellence, integrity, and client satisfaction.
          Learn more about our story and the values that drive us forward every
          day.
        </Text>
      </Box>
    </Box>
  );
}
