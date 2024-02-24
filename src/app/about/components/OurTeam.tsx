import Box from '@/components/Ui/chakra/Box';
// import Grid from '@/components/Ui/chakra/Grid';
// import GridItem from '@/components/Ui/chakra/GridItem';
// import Image from '@/components/Ui/chakra/Image';
import Text from '@/components/Ui/chakra/Text';
export default function OurTeam() {
  return (
    <Box mt={'6rem'}>
      <Text align={'center'} variant={'subHeading'} textTransform={'uppercase'}>
        Meet Our Team
      </Text>
      <Text>
        Behind every successful real estate transaction is a dedicated team of
        professionals who are passionate about helping clients achieve their
        goals. Meet the talented individuals who make up the BATs Properties
        team. With diverse backgrounds and expertise in various aspects of the
        real estate industry, our team is here to provide personalized service
        and expert guidance at every step of your journey.
      </Text>
    </Box>
  );
}
