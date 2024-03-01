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
    <Box py={{ base: '4rem', md: '6rem' }}>
      <SizeWrapper>
        <Flex
          gap={{ base: '1.2rem', md: '2.5rem' }}
          direction={{ base: 'column', md: 'row' }}
          alignItems={'center'}
        >
          <Box flex={1} h={'25rem'}>
            <Image w={'100%'} h={'100%'} src={img.src} alt="about-us" />
          </Box>
          <Stack
            alignItems={'flex-start'}
            spacing={{ base: '.7rem', md: '1rem' }}
            flex={1}
          >
            <Text
              color={'gray.700'}
              fontSize={{ base: '1rem', md: '2rem' }}
              fontFamily={'heading'}
              fontWeight={700}
              as={'h3'}
              textTransform={'uppercase'}
            >
              Get to Know BATs Properties
            </Text>
            <Text
              color={'gray.300'}
              fontSize={{ base: '0.8rem', md: '1rem' }}
              lineHeight={{ base: '1rem', md: '1.4rem' }}
              fontWeight={'400'}
            >
              {`At BATs Properties, we are dedicated to redefining the real estate
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
              display={{ base: 'none', md: 'flex' }}
              color={'primary.500'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              fontWeight={'600'}
            >
              <Text mr={'.5rem'}> Learn More</Text>
              <MdOutlineArrowForwardIos />
            </Button>
            <Box
              color={'primary.500'}
              display={{ base: 'flex', md: 'none' }}
              _hover={{ bg: 'transparent' }}
              fontWeight={'600'}
              alignItems={'center'}
            >
              <Text mr={'.5rem'}> Learn More</Text>
              <MdOutlineArrowForwardIos size={'.8rem'} />
            </Box>
          </Stack>
        </Flex>
      </SizeWrapper>
    </Box>
  );
}
