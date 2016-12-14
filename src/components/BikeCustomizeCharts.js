import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import MyCircleChart from './MyCircleChart';

class BikeCustomizeCharts extends React.Component {

  render() {
    const casualOpts= [
      {id: 1, name: "steer", count: 6},
      {id: 2, name: "wheels", count: 5},
      {id: 3, name: "frame", count: 2},
      {id: 4, name: "seat", count: 10},
    ]

    const retroOpts= [
      {id: 1, name: "steer", count: 2},
      {id: 2, name: "wheels", count: 8},
      {id: 3, name: "frame", count: 1},
      {id: 4, name: "seat", count: 14},
    ]

    return (
      <Box align="center">
        <Heading tag="h2">
          Customizability
        </Heading>
        Customize the base model if you want to suit your needs more accurately.
        <Box
          direction="row"
          align="center"
        >
          <Box
            size="large"
            align="center"
            textAlign="center"
            pad="large"
          >
            <Heading tag="h4">
                Casual Model
            </Heading>
            <MyCircleChart opts={casualOpts} />

          </Box>
          <Box
            size="large"
            align="center"
            textAlign="center"
            pad="large"
          >
            <Heading tag="h4">
                Retro Model
            </Heading>
            <MyCircleChart opts={retroOpts} />
          </Box>
        </Box>
      </Box>
    )
  }
}
export default BikeCustomizeCharts