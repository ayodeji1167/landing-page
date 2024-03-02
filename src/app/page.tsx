import GetToKnow from '@/components/HomePage/GetToKnow/GetToKnow';
import Hero from '@/components/HomePage/Hero/Hero';
import NextStep from '@/components/NextStep/NextStep';
import OurOfferings from '@/components/HomePage/OurOfferings/OurOfferings';
import Testimonial from '@/components/Testimonial/Testimonial';
import Box from '@/components/Ui/chakra/Box';

export default function Home() {
  return (
    <Box overflow={'hidden'}>
      <Hero />
      <GetToKnow />
      <OurOfferings />

      <Testimonial background="white" />
      <NextStep background="rgba(243, 232, 235, 1)" />
    </Box>
  );
}
