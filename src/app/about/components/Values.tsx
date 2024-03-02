import Box from '@/components/Ui/chakra/Box';
import Grid from '@/components/Ui/chakra/Grid';
import GridItem from '@/components/Ui/chakra/GridItem';
import Image from '@/components/Ui/chakra/Image';
import Text from '@/components/Ui/chakra/Text';
import v1 from '@/assets/values/v11.png';
import v2 from '@/assets/values/v2.png';
export default function Values() {
  return (
    <Box mb={'6rem'}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={'1.5rem'}
        rowGap={'3rem'}
        mb={'2.5rem'}
      >
        <GridItem>
          <Image
            objectFit={'cover'}
            w={'100%'}
            h={'100%'}
            src={v1.src}
            alt="image1"
          />
        </GridItem>
        <GridItem display={{ base: 'none', md: 'block' }}  >
          <Image
            objectFit={'cover'}
            w={'100%'}
            h={'100%'}
            src={v2.src}
            alt="image1"
          />
        </GridItem>
      </Grid>
      <Box>
        <Text mb={'1rem'} textTransform={'uppercase'} variant={'subHeading'}>
          Our Mission and Values
        </Text>
        <Text fontSize={'1.2rem'}>
          At BATs Properties, our mission is simple: to provide exceptional real
          estate services with integrity, expertise, and unwavering client
          focus. We believe in fostering lasting relationships and navigating
          the journey to homeownership or investment success with dedication and
          professionalism. Our values guide everything we do, from our
          commitment to transparency and honesty to our relentless pursuit of
          excellence.
        </Text>
      </Box>
    </Box>
  );
}
