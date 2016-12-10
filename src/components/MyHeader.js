import React from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

class MyHeader extends React.component {
  constructor() {
    super();
  }

  render() {
    return (
      <Header fixed={false}
              float={false}
              size="large">
        <Title>
          <Image src="/public/wolf.png" size="thumb"/>
          Nordic Bikes
        </Title>
        <Box flex={true}
             justify="end"
             direction="row"
             responsive={false}>
        </Box>
      </Header>
    )
  }
}

export default MyHeader
