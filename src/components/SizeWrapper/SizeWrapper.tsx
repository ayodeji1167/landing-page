import Box from '@/components/Ui/chakra/Box';
import { ReactNode } from 'react';

export default function SizeWrapper({ children }: { children: ReactNode }) {
  return (
    <Box mx={'auto'} maxW={{ base: '90%', lg: '87%' }}>
      {children}
    </Box>
  );
}
