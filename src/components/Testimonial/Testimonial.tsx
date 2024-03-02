'use client';
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonial.css';
import { Pagination, Navigation } from 'swiper/modules';

import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import Box from '@/components/Ui/chakra/Box';
import Flex from '@/components/Ui/chakra/Flex';
import Text from '@/components/Ui/chakra/Text';
import Center from '@/components/Ui/chakra/Center';
import { testimonial } from './testimonialdata';
import quote from '@/assets/quote.png';
import { Image, useBreakpointValue } from '@chakra-ui/react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export default function Testimonial({ background }: { background: string }) {
  const prevButton = useRef<any>(null);
  const nextButton = useRef<any>(null);
  const iconSize = useBreakpointValue(
    {
      base: '0.8rem',
      md: '1.8rem',
    },
    {
      fallback: 'md',
    }
  );
  return (
    <Box background={background} py={{ base: '4rem', md: '5rem' }}>
      <SizeWrapper>
        <Text
          fontWeight={700}
          textTransform={'uppercase'}
          textAlign={'center'}
          fontFamily={'heading'}
          fontSize={{ base: '1rem', md: '2rem' }}
          maxW={{ base: '60vw', md: '100%' }}
          mx={'auto'}
          mb={{ base: '.7rem', md: '0' }}
          lineHeight={{ base: '1rem', md: '2rem' }}
        >
          Discover What Our Clients Are Saying
        </Text>
        <Text
          fontWeight={400}
          fontSize={{ base: '.7rem', md: '.9rem' }}
          color={'#424955'}
          textAlign={'center'}
        >
          Read testimonials from satisfied clients who have experienced the
          exceptional service and results provided by BATs Properties.
        </Text>
        <Box mt={{ base: '1.25rem', md: '3rem' }} position={'relative'}>
          <Swiper
            cssMode={true}
            onBeforeInit={(swiper: any) => {
              swiper!.params!.navigation!.prevEl! = prevButton.current;
              swiper!.params!.navigation!.nextEl = nextButton.current;
            }}
            slidesPerView={1.2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="testimonial-swiper"
            navigation={{
              prevEl: prevButton?.current,
              nextEl: nextButton?.current,
            }}
            mousewheel={true}
            keyboard={true}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonial.map((item, index) => (
              <SwiperSlide key={index}>
                <Box
                  p={{ base: '1.7rem', md: '3rem' }}
                  boxShadow="8px 8px 16px 0px #84143A14 inset, -1px -1px 4px 0px #84143A1A inset, 1px 1px 4px 0px #FFFFFF29 inset"
                  shadow={' 8px 8px 16px 0px #84143A14 inset'}
                  borderBottomLeftRadius={{ base: '1.5rem', md: '2rem' }}
                  borderTopRightRadius={{ base: '1.5rem', md: '2rem' }}
                >
                  <Text mb={'1.7rem'} fontSize={{ base: '.7rem', md: '.9rem' }}>
                    {item.description}
                  </Text>
                  <Flex justifyContent={'space-between'}>
                    <Text
                      fontWeight={{ base: 600, md: 400 }}
                      fontSize={{ base: '.8rem', md: '.9rem' }}
                    >
                      {item.author}
                    </Text>

                    <Box w={{ base: '2rem', md: '3.5rem' }}>
                      <Image
                        w={'100%'}
                        h={'100%'}
                        src={quote.src}
                        alt="quote"
                      />
                    </Box>
                  </Flex>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <Flex
            zIndex={30}
            left={'50%'}
            transform="translateX(-50%)"
            bottom={{ base: '2.3rem', md: '1.5rem' }}
            position={'absolute'}
            gap={'8rem'}
            justifyContent={'center'}
            userSelect={'none'}
          >
            <Center
              ref={prevButton}
              cursor={'pointer'}
              w={{ base: '1.5rem', md: '3rem' }}
              h={{ base: '1.5rem', md: '3rem' }}
              rounded={'100%'}
              bg={'#F3E8EB'}
              border={'1px solid #84143A'}
              borderWidth={{ base: '0.4px', md: '1px' }}
            >
              <IoIosArrowBack
                size={iconSize}
                fontWeight={700}
                color="#84143A"
              />
            </Center>
            <Center
              ref={nextButton}
              cursor={'pointer'}
              w={{ base: '1.5rem', md: '3rem' }}
              h={{ base: '1.5rem', md: '3rem' }}
              rounded={'100%'}
              bg={'#F3E8EB'}
              border={'1px solid #84143A'}
              borderWidth={{ base: '0.4px', md: '1px' }}
            >
              <IoIosArrowForward
                size={iconSize}
                fontWeight={700}
                color="#84143A"
              />
            </Center>
          </Flex>
        </Box>
      </SizeWrapper>
    </Box>
  );
}
