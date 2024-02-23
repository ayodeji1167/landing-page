import Box from '@/components/Ui/chakra/Box';
import Flex from '@/components/Ui/chakra/Flex';
import Text from '@/components/Ui/chakra/Text';
import Divider from '@/components/Ui/chakra/Divider';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
export default function SocialFooter() {
  return (
    <Box pb={'3rem'}>
      <Divider borderColor={'white'} opacity={'.2'} w={'100%'} />
      <Flex alignItems={'center'} mt={'1rem'} justifyContent={'space-between'}>
        <Flex gap={'1rem'} alignItems={'center'}>
          <FaTwitter />
          <FaLinkedinIn />
          <FaFacebookF />
        </Flex>
        <Text opacity={'0.7'}>© 2024 BATs. All rights reserved. </Text>
        <Text opacity={'0.7'}>Terms of Service</Text>
      </Flex>
    </Box>
  );
}
