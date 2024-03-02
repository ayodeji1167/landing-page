import Box from '@/components/Ui/chakra/Box';
import Flex from '@/components/Ui/chakra/Flex';
import Text from '@/components/Ui/chakra/Text';
import Divider from '@/components/Ui/chakra/Divider';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';

export function Socials() {
  return (
    <Flex gap={{ base: '1.6rem', md: '1rem' }} alignItems={'center'}>
      <FaTwitter />
      <FaLinkedinIn />
      <FaFacebookF />
    </Flex>
  );
}
export default function SocialFooter() {
  return (
    <Box pb={{ base: '2rem', md: '3rem' }}>
      <Divider borderColor={'white'} opacity={'.2'} w={'100%'} />
      <Flex
        alignItems={'center'}
        mt={{ base: '1.8rem', md: '1rem' }}
        justifyContent={'space-between'}
      >
        <Box display={{ base: 'none', md: 'block' }}>
          <Socials />
        </Box>
        <Text opacity={'0.7'} fontSize={{ base: '.7rem', md: '.9rem' }}>
          © 2024 BATs. All rights reserved.{' '}
        </Text>
        <Text opacity={'0.7'} fontSize={{ base: '.7rem', md: '.9rem' }}>
          Terms of Service
        </Text>
      </Flex>
    </Box>
  );
}
