import TopBanner from '@/components/TopBanner';
import Box from '@/components/Ui/chakra/Box';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import OurStory from './components/OurStory';
import OurTeam from './components/OurTeam';
import Values from './components/Values';
import Testimonial from '@/components/Testimonial/Testimonial';
import NextStep from '@/components/NextStep/NextStep';
export default function page() {
  return (
    <Box>
      <TopBanner name="Meet BATs: Your Real Estate Partners" />
      <SizeWrapper>
        <OurStory />
        <OurTeam />
        <Values />
      </SizeWrapper>
      <Testimonial background="#F3E8EB" />
      <Box py={'5rem'}>
        <NextStep background="#white" />
      </Box>
    </Box>
  );
}
