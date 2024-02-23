import GetToKnow from '@/components/HomePage/GetToKnow/GetToKnow';
import Hero from '@/components/HomePage/Hero/Hero';
import Box from '@/components/Ui/chakra/Box';

export default function Home() {
  return (
    <Box>
      <Hero />
      <GetToKnow />
    </Box>
  );
}
