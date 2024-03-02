import Box from '@/components/Ui/chakra/Box';
import { ReactNode } from 'react';

export default function SizeWrapper({ children }: { children: ReactNode }) {
  return (
    <Box mx={'auto'} maxW={{ base: '95%', lg: '87%' }}>
      {children}
    </Box>
  );
}
