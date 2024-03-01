import Box from '@/components/Ui/chakra/Box';
import SimpleGrid from '@/components/Ui/chakra/SimpleGrid';
import GridItem from '@/components/Ui/chakra/GridItem';
import Flex from '@/components/Ui/chakra/Flex';
import Text from '@/components/Ui/chakra/Text';
import Stack from '@/components/Ui/chakra/Stack';
import Image from '@/components/Ui/chakra/Image';
import Button from '@/components/Ui/chakra/Button';
import TopBanner from '../../../components/TopBanner';
import { properties } from '@/data/propertiesLists';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import bedsvg from '@/assets/svg/bed.svg';
import bathsvg from '@/assets/svg/bath.svg';
import sqfeet from '@/assets/svg/sqfeet.svg';
import {
  Item,
  LocationComp,
} from '../components/propertieslisting/PropertyCard';
import { formatNumber } from '@/utils/formatNumber';
import SimilarProperties from '../components/SimilarProperties';
export default function page({ params }: any) {
  const currentProperty = properties.find((item) => item.id === params.id);
  return (
    <Box mb={'8rem'}>
      <TopBanner name={currentProperty?.name} />
      <SizeWrapper>
        <SimpleGrid
          mt={'3rem'}
          mb={'2rem'}
          templateRows={{ base: 'repeat(2,8rem)', md: 'repeat(2, 18rem)' }}
          gap={{ base: '.8rem', md: '1.5rem' }}
          row={{ base: 4, md: 2 }}
          columns={{ base: 2, md: 4 }}
        >
          <GridItem colSpan={2} rowSpan={2}>
            <Image
              w={'100%'}
              h={'100%'}
              objectFit={'cover'}
              src={currentProperty?.images?.mainImage.src}
              alt={currentProperty?.name}
            />
          </GridItem>

          {currentProperty?.images?.otherImages?.map((item) => (
            <GridItem key={item.src} h={{ base: '10rem', md: '100%' }}>
              <Image
                w={'100%'}
                h={'100%'}
                objectFit={'cover'}
                src={item.src}
                alt={currentProperty?.name}
              />
            </GridItem>
          ))}
        </SimpleGrid>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Flex alignItems={'center'} gap={'1rem'}>
            <LocationComp location={currentProperty?.location} />
            <Item icon={bedsvg} value={`${currentProperty?.bed} Bed`} />
            <Item icon={bathsvg} value={`${currentProperty?.bath} Bath`} />
            <Item icon={sqfeet} value={`${currentProperty?.squareFeet} Sqft`} />
          </Flex>
          <Text
            fontFamily={'heading'}
            fontWeight={700}
            fontSize={'1.9rem'}
            justifySelf={'flex-end'}
          >
            Price AED {formatNumber(currentProperty?.price)}
          </Text>
        </Flex>

        <Box mt={'2rem'}>
          <Text
            textTransform={'uppercase'}
            mb={'1rem'}
            as={'h2'}
            fontFamily={'heading'}
            fontWeight={700}
            fontSize={'2rem'}
          >
            About this property
          </Text>
          <Text
            mb={'1rem'}
            color={'#424955'}
            fontWeight={400}
            fontSize={'1.2rem'}
          >
            {currentProperty?.description}
          </Text>
        </Box>

        <Flex fontSize={'1.2rem'} fontWeight={'600'}>
          <Text color={'#1B2432'}>Property ID: {currentProperty?.id}</Text>{' '}
          <Text color={'#3943B7'}>
            - This is important when you are filling the contact us information
          </Text>
        </Flex>

        <Flex justifyContent={'space-between'} mt={'1.7rem'}>
          <Stack spacing={'.2rem'}>
            <Text textTransform={'uppercase'} variant={'subHeading'}>
              Ready to Make This Property Yours?{' '}
            </Text>
            <Text color={'#424955'}>
              Contact Us Today to Schedule a Viewing or Learn More!{' '}
            </Text>
          </Stack>
          <Button
            fontSize={'1.2rem'}
            minW={'12rem'}
            rounded={'1.3rem'}
            h={'auto'}
          >
            Contact Us Now
          </Button>
        </Flex>

        <Box>
          <SimilarProperties />
        </Box>
      </SizeWrapper>
    </Box>
  );
}
