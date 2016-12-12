import React from 'react';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import SocialShare from 'grommet/components/SocialShare';

const MyFooter = () => (
  <Footer
    direction="column"
    align="center"
    textAlign="center"
    appCentered={true}
    pad="small"
    colorIndex="grey-1"
  >
    <Box direction="row">
      <Box
        basis="1/2"
        textAlign="center"
        align="start"
        size="xlarge"
      >
        Copyright Nordic Bikes no rights protected
      </Box>
      <Box
        direction="row"
        basis="1/2"
        align="end"
      >
        <SocialShare type="facebook" link="http://i.imgur.com/R390EId.jpg" />
        <SocialShare type="twitter" link="http://i.imgur.com/R390EId.jpg" />
        <SocialShare type="email" link="http://i.imgur.com/R390EId.jpg" />
        <SocialShare type="google" link="http://i.imgur.com/R390EId.jpg" />
      </Box>
    </Box>
  </Footer>
)

export default MyFooter