'use client';

import StringInput from '@/components/Input/StringInput';
import {
  Box,
  Button,
  Center,
  FormLabel,
  GridItem,
  SimpleGrid,
  Textarea,
} from '@chakra-ui/react';

export default function Form() {
  return (
    <Box
      pt={{ base: '0rem', md: '6rem' }}
      pb={{ base: '2.2rem', md: '8rem' }}
      maxW={{ base: '95%', md: '60%' }}
      mx={'auto'}
    >
      <form action="">
        <SimpleGrid
          mt={{ base: '2.5rem', md: '3rem' }}
          mb={'2.8rem'}
          columnGap={'1.5rem'}
          rowGap={'1.8rem'}
          row={4}
          columns={{ base: 1, md: 2 }}
        >
          <GridItem>
            <StringInput
              formControlProps={{ label: 'First Name' }}
              inputProps={{ placeholder: 'Input your first name in here' }}
            />
          </GridItem>
          <GridItem>
            <StringInput
              formControlProps={{ label: 'Last Name' }}
              inputProps={{ placeholder: 'Input your last name in here' }}
            />
          </GridItem>
          <GridItem>
            <StringInput
              formControlProps={{ label: 'Email Address' }}
              inputProps={{
                placeholder: 'Input your email address in here',
                type: 'email',
              }}
            />
          </GridItem>
          <GridItem>
            <StringInput
              formControlProps={{ label: 'Phone Number' }}
              inputProps={{
                placeholder: 'Enter your phone number',
              }}
            />
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <StringInput
              formControlProps={{ label: 'Property ID' }}
              inputProps={{
                placeholder:
                  'Enter property ID, of property you are enquiring about if any',
              }}
            />
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <FormLabel
              requiredIndicator={<abbr title="required field"></abbr>}
              fontFamily={'body'}
              fontWeight={'semibold'}
              fontSize={'16px'}
              mb={{ base: '6px', md: '0.5rem' }}
            >
              Message{' '}
            </FormLabel>
            <Textarea rounded={'1rem'} placeholder="Convey your message here">
              {' '}
            </Textarea>
          </GridItem>
        </SimpleGrid>

        <Center>
          <Button minW={{ base: '100%', md: '10rem' }}>Submit</Button>
        </Center>
      </form>
    </Box>
  );
}
