import GetToKnow from '@/components/HomePage/GetToKnow/GetToKnow';
import Hero from '@/components/HomePage/Hero/Hero';
import OurOfferings from '@/components/HomePage/OurOfferings/OurOfferings';
import Box from '@/components/Ui/chakra/Box';

export default function Home() {
  return (
    <Box>
      <Hero />
      <GetToKnow />
      <OurOfferings />
    </Box>
  );
}
