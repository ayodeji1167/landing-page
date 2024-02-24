import React from 'react';
import Box from '@/components/Ui/chakra/Box';
import Text from '@/components/Ui/chakra/Text';
import Center from '@/components/Ui/chakra/Center';
import Flex from '@/components/Ui/chakra/Flex';
import { searches } from '@/data/searches';

export default function PopularSearches() {
  return (
    <Box mt={'1.9rem'}>
      <Text
        fontFamily={'heading'}
        fontSize={'1.2rem'}
        fontWeight={700}
        mb={'1rem'}
      >
        Popular Searches
      </Text>
      <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
        {searches.map((item) => (
          <Center
            fontWeight={'400'}
            border="1px solid #CD9FAE"
            rounded={'1.4rem'}
            h={'2.8rem'}
            px={'1.3rem'}
            key={item}
          >
            {item}
          </Center>
        ))}
      </Flex>
    </Box>
  );
}
