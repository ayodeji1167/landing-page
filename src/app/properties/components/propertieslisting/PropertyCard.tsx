import { IProperty } from '@/types/property';
import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import Flex from '@/components/Ui/chakra/Flex';
import Image from '@/components/Ui/chakra/Image';
import Text from '@/components/Ui/chakra/Text';
import locationImg from '@/assets/svg/location.svg';
import bedsvg from '@/assets/svg/bed.svg';
import bathsvg from '@/assets/svg/bath.svg';
import sqfeet from '@/assets/svg/sqfeet.svg';
import Link from 'next/link';

export function Item({ icon, value }: { icon: any; value: string }) {
  return (
    <Flex color={'#424955'} gap={'.3rem'} alignItems={'center'}>
      <Box>
        <Image alt={value} src={icon.src} />
      </Box>
      <Text fontSize={'14px'}>{value}</Text>
    </Flex>
  );
}

export function LocationComp({ location }: { location?: string }) {
  return (
    <Flex gap={'.5rem'} alignItems={'center'}>
      <Image alt="location" src={locationImg.src} />
      <Text fontSize={'14px'} color="#424955">
        {location}
      </Text>
    </Flex>
  );
}
export default function PropertyCard(props: IProperty) {
  const mainImage = props?.images?.mainImage?.src;
  const {
    name,
    price,
    pricePerSquareFeet,
    bed,
    bath,
    location,
    squareFeet,
    id,
  } = props;

  return (
    <Link href={`/properties/${id}`}>
      <Box
        overflow={'hidden'}
        position={'relative'}
        boxShadow="0px 5px 10px 0px #A3A3A31A, 0px 19px 19px 0px #A3A3A317, 0px 42px 25px 0px #A3A3A30D, 0px 74px 30px 0px #A3A3A303, 0px 116px 32px 0px #A3A3A300"
        rounded={'0.6rem'}
      >
        <Box h={'15rem'}>
          <Image
            src={mainImage}
            alt={name}
            w="100%"
            h="100%"
            objectFit={'cover'}
          />
        </Box>
        <Box p={'1.4rem'}>
          <Text fontFamily={'heading'} fontWeight={700} fontSize={'1.2rem'}>
            {name}
          </Text>
          <Box my={'1rem'}>
            <LocationComp location={location} />
          </Box>

          <Flex gap={'1.3rem'} mt={'1rem'} alignItems={'center'}>
            <Item icon={bedsvg} value={`${bed} Bed`} />
            <Item icon={bathsvg} value={`${bath} Bath`} />
            <Item icon={sqfeet} value={`${squareFeet} Sqft`} />
          </Flex>

          <Flex
            mt={'2rem'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            {pricePerSquareFeet && (
              <Text
                color={'#424955'}
                fontSize={'14px'}
              >{`AED ${pricePerSquareFeet}Per Sqft`}</Text>
            )}
            <Text
              color={'#1B2432'}
              fontWeight={700}
            >{`Price AED ${price}`}</Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
}
