'use client';
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { properties } from './data';
import {
  Button,
  Center,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function ImageSlider() {
  const [hoverStates, setHoverStates] = useState(
    new Array(properties.length).fill(false)
  );

  const handleMouseEnter = (index: number) => {
    const updatedStates = [...new Array(properties.length).fill(false)];
    updatedStates[index] = true;
    setHoverStates(updatedStates);
  };

  const handleMouseLeave = (index: number) => {
    const updatedStates = [...new Array(properties.length).fill(false)];
    updatedStates[index] = false;
    setHoverStates(updatedStates);
  };
  const height = useBreakpointValue(
    {
      base: '20rem',
      md: '30rem',
    },
    {
      fallback: 'md',
    }
  );
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
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
      {properties.map((item, index) => (
        <SwiperSlide
          style={{
            objectFit: 'cover',
            height: height,
          }}
          key={item.location + ' ' + index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <Image
            w={'100%'}
            h={'100%'}
            objectFit={'cover'}
            src={item.image.src}
            alt={item.location}
          />
          {hoverStates[index] && (
            <Center
              flexDirection={'column'}
              top={0}
              left={0}
              zIndex={3}
              position={'absolute'}
              h={'100%'}
              w={'100%'}
              color={'white'}
              sx={{
                '&::before': {
                  content: "''",
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0,0,0,0.4)',
                  backgroundSize: 'cover',
                  opacity: 0.5,
                },
              }}
              justifyContent={'space-between'}
              py={'7rem'}
            >
              <Text
                position={'relative'}
                zIndex={'5'}
                opacity={1}
                fontWeight={'700'}
                as={'h2'}
                fontFamily={'heading'}
                fontSize={'1.8rem'}
                textAlign={'center'}
              >
                {item.location}
              </Text>
              <Button>More Info</Button>
            </Center>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
