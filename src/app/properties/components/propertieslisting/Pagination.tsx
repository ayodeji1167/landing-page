'use client';
/* eslint-disable @typescript-eslint/ban-ts-comment */

import React, { useState } from 'react';
import Flex from '@/components/Ui/chakra/Flex';
import Text from '@/components/Ui/chakra/Text';
export default function Pagination() {
  const total = 120;
  const perPage = 12;
  const numberOfPages = Math.ceil(total / perPage);

  //   console.log(numberOfPages);
  const [currentRange, setCurrentRange] = useState<any>();
  //   console.log('current range is ', currentRange);

  return (
    <Flex
      flexWrap={'wrap'}
      gap={'1rem'}
      alignItems={'center'}
      justifyContent={'center'}
      //REMOVE THIS !!!!!!!!!!!!!!!!!!!!!!!!1
      padding={currentRange}
    >
      {/* @ts-ignore */}
      {[...new Array(numberOfPages).keys()].slice(0, 6).map((item, index) => {
        const range = index + 1;

        if (range >= 6) {
          return (
            <Text
              onClick={() => {
                setCurrentRange({
                  start: 1 + index * perPage,
                  end: range * perPage,
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
              cursor={'pointer'}
              onClick={() => {
                setCurrentRange({
                  start: 1 + index * perPage,
                  end: range * perPage,
                });
              }}
              key={range}
            >
              <Text>{1 + index * perPage}</Text>
              <Text>-----</Text>
              <Text> {range * perPage}</Text>
            </Flex>
          );
        }
      })}
    </Flex>
  );
}
