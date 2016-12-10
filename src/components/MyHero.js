import React from 'react';

import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

class MyHero extends React.Component {

  render() {
    return (
      <Hero
        background={
          <Image src="/public/bikebeach.jpeg" size="large" fit="cover"/>
        }
        backgroundColorIndex="dark"
        size="large"
      >

        <Box direction="row"
             justify="center"
             align="center">
          <Box basis="1/2"
               align="end"
               pad="medium">
            <Image src="/public/wolf.png" size="small"/>
          </Box>
          <Box basis="1/2"
               align="start"
               pad="medium">
            <Heading margin="none" align="end" strong={true}>
              Nordic Bikes
            </Heading>
          </Box>
        </Box>
      </Hero>
    )
  }
}

export default MyHero