import Box from '@/components/Ui/chakra/Box';
import Text from '@/components/Ui/chakra/Text';
import Image from '@/components/Ui/chakra/Image';
import Grid from '@/components/Ui/chakra/Grid';
import Center from '@/components/Ui/chakra/Center';
import Button from '@/components/Ui/chakra/Button';
import GridItem from '@/components/Ui/chakra/GridItem';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import { offerings } from './offerings';

export default function OurOfferings() {
  return (
    <Box bg="#F3E8EB" py={'6rem'}>
      <SizeWrapper>
        <Text
          fontWeight={700}
          textTransform={'uppercase'}
          fontFamily={'heading'}
          as="h3"
          fontSize={'2.5rem'}
          mb={'2rem'}
        >
          Our Offerings
        </Text>

        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(3, 1fr)',
          }}
          gap={'1.5rem'}
        >
          {offerings.map((offering, index) => (
            <GridItem
              boxShadow="0px 2px 4px 0px #1E7EE51A"
              bg={'white'}
              px={'1rem'}
              py={'1.7rem'}
              rounded={'.7rem'}
              key={index}
            >
              <Box mb={'.8rem'}>
                <Image
                  w={'40px'}
                  src={offering.icon.src}
                  alt={offering.title}
                />
              </Box>
              <Text
                mb={'0.7rem'}
                color={'gray.700'}
                fontSize={'1.2rem'}
                fontWeight={700}
                fontFamily={'heading'}
              >
                {offering.title}
              </Text>
              <Text color={'#6B6B6B'}>{offering.description}</Text>
            </GridItem>
          ))}
        </Grid>

        <Center mt={'3rem'}>
          <Button minW={'10rem'}>Start Your Journey</Button>
        </Center>
      </SizeWrapper>
    </Box>
  );
}
