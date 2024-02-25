import TopBanner from '@/components/TopBanner';
import Box from '@/components/Ui/chakra/Box';
import Link from 'next/link';
export default function NotFound() {
  return (
    <Box>
      <TopBanner
        name="Oops! Page Not Found"
        description={`It seems like you've stumbled upon uncharted territory.`}
        fontSize="2.7rem"
      />
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Box>
  );
}
