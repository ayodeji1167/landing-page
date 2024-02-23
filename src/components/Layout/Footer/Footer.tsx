import Box from '@/components/Ui/chakra/Box';
import Flex from '@/components/Ui/chakra/Flex';
import Stack from '@/components/Ui/chakra/Stack';
import Text from '@/components/Ui/chakra/Text';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import { Logo } from '@/components/Logo/Logo';
import SocialFooter from './SocialFooter';

export default function Footer() {
  return (
    <Box color={'white'} bg={'#510C23'}>
      <SizeWrapper>
        <Flex py={'6rem'} gap={'10rem'} alignItems={'flex-start'}>
          <Box>
            <Logo color="white" />
          </Box>
          <Stack spacing={'.9rem'}>
            <Text fontFamily={'heading'} fontWeight={'600'} fontSize={'1.3rem'}>
              Company
            </Text>
            <Text
              opacity={0.7}
              cursor={'pointer'}
              fontWeight={400}
              fontSize={'.9rem'}
            >
              About BATs Properties
            </Text>
            <Text
              opacity={0.7}
              cursor={'pointer'}
              fontWeight={400}
              fontSize={'.9rem'}
            >
              Our Team
            </Text>
            <Text
              opacity={0.7}
              cursor={'pointer'}
              fontWeight={400}
              fontSize={'.9rem'}
            >
              Testimonials
            </Text>
            <Text
              opacity={0.7}
              cursor={'pointer'}
              fontWeight={400}
              fontSize={'.9rem'}
            >
              Careers
            </Text>
          </Stack>
          <Stack spacing={'.9rem'}>
            <Text fontFamily={'heading'} fontWeight={'600'} fontSize={'1.3rem'}>
              Services
            </Text>
            <Text
              opacity={0.7}
              cursor={'pointer'}
              fontWeight={400}
              fontSize={'.9rem'}
            >
              Property Sales
            </Text>
            <Text
              opacity={0.7}
              cursor={'pointer'}
              fontWeight={400}
              fontSize={'.9rem'}
            >
              Property Rentals
            </Text>
            <Text
              opacity={0.7}
              cursor={'pointer'}
              fontWeight={400}
              fontSize={'.9rem'}
            >
              Property Management
            </Text>
            <Text
              opacity={0.7}
              cursor={'pointer'}
              fontWeight={400}
              fontSize={'.9rem'}
            >
              Investment Consultation
            </Text>
          </Stack>
          <Stack spacing={'.9rem'}>
            <Text fontFamily={'heading'} fontWeight={'600'} fontSize={'1.3rem'}>
              Resources
            </Text>
            <Text
              opacity={0.7}
              cursor={'pointer'}
              fontWeight={400}
              fontSize={'.9rem'}
            >
              Blog
            </Text>
            <Text
              opacity={0.7}
              cursor={'pointer'}
              fontWeight={400}
              fontSize={'.9rem'}
            >
              FAQs
            </Text>
            <Text
              opacity={0.7}
              cursor={'pointer'}
              fontWeight={400}
              fontSize={'.9rem'}
            >
              Contact Us
            </Text>
            <Text
              opacity={0.7}
              cursor={'pointer'}
              fontWeight={400}
              fontSize={'.9rem'}
            >
              Privacy Policy
            </Text>
          </Stack>
        </Flex>

        <SocialFooter />
      </SizeWrapper>
    </Box>
  );
}
