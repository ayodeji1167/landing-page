'use client';
/* eslint-disable @typescript-eslint/ban-ts-comment */

import React, { useState } from 'react';
import Flex from '@/components/Ui/chakra/Flex';
import Text from '@/components/Ui/chakra/Text';
export default function Pagination() {
  const total = 120;
  const perPage = 12;
  const numberOfPages = Math.ceil(total / perPage);
  const [currentRange, setCurrentRange] = useState<any>({
    start: 1,
    end: perPage,
  });

  return (
    <Flex
      flexWrap={'wrap'}
      gap={'1rem'}
      alignItems={'center'}
      justifyContent={'center'}
      mb={'7rem'}
    >
      {/* @ts-ignore */}
      {[...new Array(numberOfPages).keys()].slice(0, 6).map((item, index) => {
        const range = index + 1;
        const start = 1 + index * perPage;
        const end = range * perPage;
        const isCurrent =
          currentRange?.start === start && currentRange?.end === end;

        const rangeExceed60 = currentRange?.start > 60;

        if (range >= 6) {
          return (
            <Text
              color={rangeExceed60 ? 'white' : 'primary.500'}
              bg={rangeExceed60 ? 'primary.500' : 'transparent'}
              p={'.3rem'}
              px={'.4rem'}
              fontWeight={700}
              cursor={'pointer'}
              onClick={() => {
                setCurrentRange({
                  start,
                  end,
                });
              }}
              key={range}
            >
              Next set
            </Text>
          );
        } else {
          return (
            <Flex
              color={isCurrent ? 'white' : 'primary.500'}
              bg={isCurrent ? 'primary.500' : 'transparent'}
              p={'.3rem'}
              px={'.4rem'}
              gap={'.2rem'}
              fontWeight={700}
              cursor={'pointer'}
              onClick={() => {
                setCurrentRange({
                  start,
                  end,
                });
              }}
              key={range}
            >
              <Text>{start}</Text>
              <Text>-</Text>
              <Text> {end}</Text>
            </Flex>
          );
        }
      })}
    </Flex>
  );
}
