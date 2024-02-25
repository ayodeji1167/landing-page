import Box from '@/components/Ui/chakra/Box';
import Grid from '@/components/Ui/chakra/Grid';
import GridItem from '@/components/Ui/chakra/GridItem';
import Image from '@/components/Ui/chakra/Image';
import Text from '@/components/Ui/chakra/Text';
import { team } from '@/data/team';
export default function OurTeam() {
  return (
    <Box mt={'6rem'}>
      <Box mb={'6rem'}>
        <Text
          mb={'1rem'}
          align={'center'}
          variant={'subHeading'}
          textTransform={'uppercase'}
        >
          Meet Our Team
        </Text>
        <Text fontSize={'1.2rem'} color={'#424955'}>
          Behind every successful real estate transaction is a dedicated team of
          professionals who are passionate about helping clients achieve their
          goals. Meet the talented individuals who make up the BATs Properties
          team. With diverse backgrounds and expertise in various aspects of the
          real estate industry, our team is here to provide personalized service
          and expert guidance at every step of your journey.
        </Text>
      </Box>

      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={'1.5rem'}
        rowGap={'3rem'}
        mb={'5rem'}
      >
        {team.map((item, index) => (
          <GridItem key={index}>
            <Box mb={'1.3rem'}>
              <Image
                objectFit={'cover'}
                w={'100%'}
                h={'100%'}
                src={item.image.src}
                alt="image1"
              />
            </Box>
            <Text fontSize={'14px'} mb={'.6rem'}>
              {item.firstName} {item.lastName}
            </Text>
            <Text fontWeight={600} fontSize={'1.2rem'}>
              {item.position}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
