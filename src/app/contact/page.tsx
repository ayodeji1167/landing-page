import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import TopBanner from './components/TopBanner';
import Form from './components/Form';

export default function page() {
  return (
    <Box>
      <TopBanner />
      <Form />
    </Box>
  );
}
