import React from 'react';
import SunBurst from 'grommet/components/SunBurst';
import Box from 'grommet/components/Box';
import Legend from 'grommet/components/Legend';
import Value from 'grommet/components/Value';

class MySunburst extends React.Component {
  render() {
    return (
      <Box direction="row"
         align="center"
         pad={{"between": "medium"}}>
      <SunBurst data={[
        {
          "label": "root-1",
          "value": 50,
          "colorIndex": "neutral-1",
          "children": [
            {
              "label": "sub-1",
              "value": 20,
              "colorIndex": "neutral-1",
              "total": 10,
              "children": [
                {"label": "leaf-1", "value": 5, "colorIndex": "neutral-1"},
                {"label": "leaf-2", "value": 1, "colorIndex": "neutral-1"}
              ]
            },
            {"label": "sub-2", "value": 20, "colorIndex": "neutral-1"},
            {"label": "sub-3", "value": 10, "colorIndex": "neutral-1"}
          ]
        },
        {
          "label": "root-2",
          "value": 30,
          "colorIndex": "neutral-2",
          "children": [
            {"label": "sub-4", "value": 15, "colorIndex": "neutral-2"},
            {"label": "sub-5", "value": 10, "colorIndex": "neutral-1"},
            {"label": "sub-6", "value": 5, "colorIndex": "neutral-3"}
          ]
        },
        {
          "label": "root-3",
          "value": 20,
          "colorIndex": "neutral-3",
          "children": [
            {"label": "sub-7", "value": 10, "colorIndex": "neutral-1"},
            {"label": "sub-8", "value": 7, "colorIndex": "neutral-1"},
            {"label": "sub-9", "value": 3, "colorIndex": "neutral-3"}
          ]
        }
      ]}
                active={[0, 0, 0]}
                label={<Legend series={[
                  {
                    "colorIndex": "neutral-1",
                    "label": "root-1",
                    "value": <Value value={50} size='small' />
                },
                {
                  "colorIndex": "neutral-1",
                  "label": "sub-1",
                  "value": <Value value={20} size='small' />
                },
                {
                  "colorIndex": "neutral-1",
                  "label": "leaf-1",
                  "value": <Value value={5} size='small' />
                }
                  ]} />}
                onActive={() => {console.log("on active")}}
                onClick={() => {console.log("on click")}} />
      <Legend series={[
        {"label": "on target", "colorIndex": "neutral-1"},
        {"label": "over", "colorIndex": "neutral-2"},
        {"label": "under", "colorIndex": "neutral-3"}
      ]} />
    </Box>
    )
  }
}

export default MySunburst
