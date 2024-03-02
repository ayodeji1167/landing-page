import Box from '@/components/Ui/chakra/Box';
import Grid from '@/components/Ui/chakra/Grid';
import GridItem from '@/components/Ui/chakra/GridItem';
import Stack from '@/components/Ui/chakra/Stack';
import Text from '@/components/Ui/chakra/Text';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import { Logo } from '@/components/Logo/Logo';
import SocialFooter, { Socials } from './SocialFooter';

export default function Footer() {
  return (
    <Box color={'white'} bg={'#510C23'} maxW={'100vw'} overflow={'hidden'}>
      <SizeWrapper>
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          py={{ base: '4rem', md: '6rem' }}
          gap={{ base: '2.8rem', md: '10rem' }}
          alignItems={'flex-start'}
        >
          <GridItem>
            <Box w={{ base: '6rem', md: '9rem' }}>
              <Logo color="white" />
            </Box>
            <Box mt={'1.2rem'} display={{ base: 'block', md: 'none' }}>
              <Socials />
            </Box>
          </GridItem>
          <GridItem>
            <Stack spacing={{ base: '.6rem', md: '.9rem' }}>
              <Text
                fontFamily={'heading'}
                fontWeight={'600'}
                fontSize={{ base: '.9rem', md: '1.3rem' }}
              >
                Company
              </Text>
              <Text
                opacity={0.7}
                cursor={'pointer'}
                fontWeight={400}
                fontSize={{ base: '.7rem', md: '.9rem' }}
              >
                About BATs Properties
              </Text>
              <Text
                opacity={0.7}
                cursor={'pointer'}
                fontWeight={400}
                fontSize={{ base: '.7rem', md: '.9rem' }}
              >
                Our Team
              </Text>
              <Text
                opacity={0.7}
                cursor={'pointer'}
                fontWeight={400}
                fontSize={{ base: '.7rem', md: '.9rem' }}
              >
                Testimonials
              </Text>
              <Text
                opacity={0.7}
                cursor={'pointer'}
                fontWeight={400}
                fontSize={{ base: '.7rem', md: '.9rem' }}
              >
                Careers
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack spacing={{ base: '.6rem', md: '.9rem' }}>
              <Text
                fontFamily={'heading'}
                fontWeight={'600'}
                fontSize={{ base: '.9rem', md: '1.3rem' }}
              >
                Services
              </Text>
              <Text
                opacity={0.7}
                cursor={'pointer'}
                fontWeight={400}
                fontSize={{ base: '.7rem', md: '.9rem' }}
              >
                Property Sales
              </Text>
              <Text
                opacity={0.7}
                cursor={'pointer'}
                fontWeight={400}
                fontSize={{ base: '.7rem', md: '.9rem' }}
              >
                Property Rentals
              </Text>
              <Text
                opacity={0.7}
                cursor={'pointer'}
                fontWeight={400}
                fontSize={{ base: '.7rem', md: '.9rem' }}
              >
                Property Management
              </Text>
              <Text
                opacity={0.7}
                cursor={'pointer'}
                fontWeight={400}
                fontSize={{ base: '.7rem', md: '.9rem' }}
              >
                Investment Consultation
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack spacing={{ base: '.6rem', md: '.9rem' }}>
              <Text
                fontFamily={'heading'}
                fontWeight={'600'}
                fontSize={{ base: '.9rem', md: '1.3rem' }}
              >
                Resources
              </Text>
              <Text
                opacity={0.7}
                cursor={'pointer'}
                fontWeight={400}
                fontSize={{ base: '.7rem', md: '.9rem' }}
              >
                Blog
              </Text>
              <Text
                opacity={0.7}
                cursor={'pointer'}
                fontWeight={400}
                fontSize={{ base: '.7rem', md: '.9rem' }}
              >
                FAQs
              </Text>
              <Text
                opacity={0.7}
                cursor={'pointer'}
                fontWeight={400}
                fontSize={{ base: '.7rem', md: '.9rem' }}
              >
                Contact Us
              </Text>
              <Text
                opacity={0.7}
                cursor={'pointer'}
                fontWeight={400}
                fontSize={{ base: '.7rem', md: '.9rem' }}
              >
                Privacy Policy
              </Text>
            </Stack>
          </GridItem>
        </Grid>

        <SocialFooter />
      </SizeWrapper>
    </Box>
  );
}
