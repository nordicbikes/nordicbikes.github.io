import React from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';

class BikeCards extends React.Component {

  render() {
    return (
      <Box align="center">
        <Heading tag="h1">
          Base Models
        </Heading>
        <Box
          direction="row"
          align="center"
        >
          <Box
            basis="1/2"
            align="end"
            textAlign="center"
            pad="large"
          >
            <Card thumbnail="/public/bike-silhouette.jpg"
                  heading="Casual"
                  description="Our Casual base model is for you who want to be fab"
                  headingStrong={false}
                  textSize="large"
                  contentPad="large" />
          </Box>
          <Box
            basis="1/2"
            align="start"
            textAlign="center"
            pad="large"
          >
            <Card thumbnail="/public/bike-silhouette.jpg"
                  heading="Retro"
                  description="The Retro base model is for you who want to be original"
                  headingStrong={false}
                  textSize="large"
                  contentPad="large" />
          </Box>
        </Box>
      </Box>
    )
  }
}
 export default BikeCards
