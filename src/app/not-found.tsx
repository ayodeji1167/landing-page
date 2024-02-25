import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import TopBanner from '@/components/TopBanner';
import Box from '@/components/Ui/chakra/Box';
import Button from '@/components/Ui/chakra/Button';
import Text from '@/components/Ui/chakra/Text';
import Center from '@/components/Ui/chakra/Center';
import Link from 'next/link';
import Image from '@/components/Ui/chakra/Image';
import gif2 from '@/assets/mygf2.gif';

export default function NotFound() {
  return (
    <Box pb={'7rem'}>
      <TopBanner
        name="Oops! Page Not Found"
        description={`It seems like you've stumbled upon uncharted territory.`}
        fontSize="2.7rem"
      />
      <SizeWrapper>
        <Center>
          <Image alt="not-found" src={gif2.src} />
        </Center>
        <Text
          textAlign={'center'}
          fontSize={'1.2rem'}
          mx={'auto'}
          maxW={'40rem'}
          fontFamily={'heading'}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable
        </Text>
        <Center mt={'1.8rem'}>
          <Link href="/">
            <Button minW={'12rem'}>Return to the homepage</Button>{' '}
          </Link>
        </Center>
      </SizeWrapper>
    </Box>
  );
}
