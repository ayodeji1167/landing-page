import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import Form from './components/Form';
import TopBanner from '@/components/TopBanner';

export default function page() {
  return (
    <Box>
      <TopBanner
        name="Get in Touch with BATs Properties"
        description={`We're here to answer your questions, address your concerns, and help
you navigate the world of real estate in Dubai. Reach out to us today!`}
        fontSize="2.7rem"
      />
      <Form />
    </Box>
  );
}
