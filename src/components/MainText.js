import React from 'react';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';

class MainText extends React.Component {

  render() {
    return (
      <Section
          colorIndex="light-2"
      >
        <Box
          basis="2/3"
          pad="large"
          appCentered={true}
          size="xlarge"
          align="center"
        >
          <Heading>
            Your premium quality customizable bicycles.
          </Heading>
          We provide you with the best quality bicycles for everyday use. You want a premium quality bicycle that holds through even the toughest conditions, and still look exclusive. You want to taylor your bicycle for your needs. You want Nordic Bikes.
        </Box>
      </Section>
    )
  }
}

export default MainText
