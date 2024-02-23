import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import Text from '@/components/Ui/chakra/Text';
import Image from '@/components/Ui/chakra/Image';
import Flex from '@/components/Ui/chakra/Flex';
import Stack from '@/components/Ui/chakra/Stack';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import img from '@/assets/properties/gtku.png';
import { Button } from '@chakra-ui/react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
export default function GetToKnow() {
  return (
    <Box py={'6rem'}>
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
            >
              Get to Know BATs Properties
            </Text>
            <Text
              color={'gray.300'}
              fontSize={'1rem'}
              lineHeight={'1.4rem'}
              fontWeight={'400'}
            >
              {` At BATs Properties, we are dedicated to redefining the real estate
              experience in Dubai. With a passion for excellence and a
              commitment to integrity, we strive to guide our clients through
              every step of their journey to homeownership. Our team of
              experienced professionals is here to provide exceptional real
              estate services, foster lasting relationships, and ensure that
              each client's needs are met with unwavering dedication. Discover
              the difference with BATs Properties and let us help you find your
              perfect home or investment opportunity in the vibrant city of
              Dubai.`}
            </Text>
            <Button
              color={'primary.500'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              fontWeight={'600'}
            >
              <Text mr={'.5rem'}> Learn More</Text>
              <MdOutlineArrowForwardIos />
            </Button>
          </Stack>
        </Flex>
      </SizeWrapper>
    </Box>
  );
}
