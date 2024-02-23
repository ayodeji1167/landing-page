import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import Text from '@/components/Ui/chakra/Text';
import Image from '@/components/Ui/chakra/Image';
import Flex from '@/components/Ui/chakra/Flex';
import Stack from '@/components/Ui/chakra/Stack';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import img from '@/assets/nextstep.png';
import { Button } from '@chakra-ui/react';

export default function NextStep() {
  return (
    <Box bg={'rgba(243, 232, 235, 1)'} py={'6rem'}>
      <SizeWrapper>
        <Flex gap={'2.5rem'} alignItems={'center'}>
          <Box flex={1} h={'25rem'}>
            <Image w={'100%'} h={'100%'} src={img.src} alt="about-us" />
          </Box>
          <Stack alignItems={'flex-start'} spacing={'1rem'} flex={1}>
            <Text
              color={'gray.700'}
              fontSize={'2rem'}
              fontFamily={'heading'}
              fontWeight={700}
              as={'h3'}
              textTransform={'uppercase'}
            >
              Ready to Transform Your Real Estate Experience{' '}
            </Text>
            <Text
              color={'gray.300'}
              fontSize={'1rem'}
              lineHeight={'1.4rem'}
              fontWeight={'400'}
            >
              {`Take the next step towards unlocking the door to your dream home or unlocking the full potential of your investment. Reach out to BATs Properties today and let our dedicated team guide you through every aspect of your real estate journey.`}
            </Text>
            <Button minW={'9rem'} fontWeight={'600'}>
              <Text mr={'.5rem'}> Contact Us Now</Text>
            </Button>
          </Stack>
        </Flex>
      </SizeWrapper>
    </Box>
  );
}
