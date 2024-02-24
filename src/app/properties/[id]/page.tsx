import Box from '@/components/Ui/chakra/Box';
import TopBanner from '../TopBanner';
import { properties } from '@/data/propertiesLists';
export default function page({ params }: any) {
  const currentProperty = properties.find((item) => item.id === params.id);

  return (
    <Box>
      <TopBanner name={currentProperty?.name} />
    </Box>
  );
}
