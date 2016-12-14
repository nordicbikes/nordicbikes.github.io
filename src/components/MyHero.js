import React from 'react';

import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Carousel from 'grommet/components/Carousel';
import styles from './MyHero.module.scss';

class MyHero extends React.Component {

  render() {
    return (
      <Hero
        background={ <Image fit="cover" size="large" src="/public/bikegrass.jpeg" /> }
        backgroundColorIndex="dark"
        size="large"
      >

        <Box direction="row"
             justify="end"
             align="center"
             textAlign="right"
        >
          <Box basis="small"
               align="end"
               pad="small">
            <Image src="/public/wolf.png" size="small"/>
          </Box>
          <Box basis="medium"
               align="start"
               pad="none">
            <Heading className={styles.heading} tag="h2" margin="none" uppercase={true} strong={false}>
              Nordic Bikes
            </Heading>
          </Box>
        </Box>
      </Hero>
    )
  }
}

export default MyHero