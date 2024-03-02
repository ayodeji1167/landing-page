import Box from '@/components/Ui/chakra/Box';
import Text from '@/components/Ui/chakra/Text';
import Image from '@/components/Ui/chakra/Image';
import Grid from '@/components/Ui/chakra/Grid';
import Center from '@/components/Ui/chakra/Center';
import Button from '@/components/Ui/chakra/Button';
import Flex from '@/components/Ui/chakra/Flex';
import GridItem from '@/components/Ui/chakra/GridItem';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import { offerings } from './offerings';

export default function OurOfferings() {
  return (
    <Box bg="#F3E8EB" py={{ base: '2.5rem', md: '6rem' }}>
      <SizeWrapper>
        <Text
          fontWeight={700}
          textTransform={'uppercase'}
          fontFamily={'heading'}
          as="h3"
          fontSize={{ base: '1rem', md: '2.5rem' }}
          mb={'2rem'}
        >
          Our Offerings
        </Text>

        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
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
              <Flex
                gap={'0.8rem'}
                mb={'0.7rem'}
                alignItems={{ base: 'center', md: 'flex-start' }}
                direction={{ base: 'row', md: 'column' }}
              >
                <Box>
                  <Image
                    w={{ base: '30px', md: '40px' }}
                    src={offering.icon.src}
                    alt={offering.title}
                  />
                </Box>
                <Text
                  color={'gray.700'}
                  fontSize={{ base: '0.8rem', md: '1.2rem' }}
                  fontWeight={{ base: 600, md: 700 }}
                  fontFamily={{ base: 'body', md: 'heading' }}
                >
                  {offering.title}
                </Text>
              </Flex>
              <Text fontSize={{ base: '.8rem', md: '.9rem' }} color={'#6B6B6B'}>
                {offering.description}
              </Text>
            </GridItem>
          ))}
        </Grid>

        <Center mt={{ base: '1.9rem', md: '3rem' }}>
          <Button minW={{ base: '14rem', md: '10rem' }}>
            Start Your Journey
          </Button>
        </Center>
      </SizeWrapper>
    </Box>
  );
}
