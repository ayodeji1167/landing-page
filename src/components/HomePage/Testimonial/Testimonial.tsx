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
import { Image } from '@chakra-ui/react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export default function Testimonial() {
  const prevButton = useRef<any>(null);
  const nextButton = useRef<any>(null);
  return (
    <Box py={'5rem'}>
      <SizeWrapper>
        <Text
          fontWeight={700}
          textTransform={'uppercase'}
          textAlign={'center'}
          fontFamily={'heading'}
          fontSize={'2rem'}
        >
          Discover What Our Clients Are Saying
        </Text>
        <Text fontWeight={400} color={'#424955'} textAlign={'center'}>
          Read testimonials from satisfied clients who have experienced the
          exceptional service and results provided by BATs Properties.
        </Text>
        <Box mt={'3rem'} position={'relative'}>
          <Swiper
            cssMode={true}
            onBeforeInit={(swiper: any) => {
              swiper!.params!.navigation!.prevEl! = prevButton.current;
              swiper!.params!.navigation!.nextEl = nextButton.current;
            }}
            slidesPerView={3}
            spaceBetween={30}
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
          >
            {testimonial.map((item, index) => (
              <SwiperSlide key={index}>
                <Box
                  p={'3rem'}
                  boxShadow="8px 8px 16px 0px #84143A14 inset, -1px -1px 4px 0px #84143A1A inset, 1px 1px 4px 0px #FFFFFF29 inset"
                  shadow={' 8px 8px 16px 0px #84143A14 inset'}
                  borderBottomLeftRadius={'2rem'}
                  borderTopRightRadius={'2rem'}
                >
                  <Text mb={'1.7rem'}>{item.description}</Text>
                  <Flex justifyContent={'space-between'}>
                    <Text>{item.author}</Text>

                    <Box>
                      <Image src={quote.src} alt="quote" />
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
            bottom={'1.5rem'}
            position={'absolute'}
            gap={'8rem'}
            justifyContent={'center'}
          >
            <Center
              ref={prevButton}
              cursor={'pointer'}
              w={'3rem'}
              h={'3rem'}
              rounded={'100%'}
              bg={'#F3E8EB'}
              border={'1px solid #84143A'}
            >
              <IoIosArrowBack
                size={'1.8rem'}
                fontWeight={700}
                color="#84143A"
              />
            </Center>
            <Center
              ref={nextButton}
              cursor={'pointer'}
              w={'3rem'}
              h={'3rem'}
              rounded={'100%'}
              bg={'#F3E8EB'}
              border={'1px solid #84143A'}
            >
              <IoIosArrowForward
                size={'1.8rem'}
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
