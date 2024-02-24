import TopBanner from '@/components/TopBanner';
import Box from '@/components/Ui/chakra/Box';
import SizeWrapper from '@/components/SizeWrapper/SizeWrapper';
import OurStory from './components/OurStory';
import OurTeam from './components/OurTeam';
export default function page() {
  return (
    <Box>
      <TopBanner name="Meet BATs: Your Real Estate Partners" />
      <SizeWrapper>
        <OurStory />
        <OurTeam />
      </SizeWrapper>
    </Box>
  );
}
