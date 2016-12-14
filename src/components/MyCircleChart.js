import React from 'react';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';

class MyCircleChart extends React.Component {
  render() {
    return (
        <AnnotatedMeter legend={true}
            type="circle"
            units="options"
            size="medium"
            max={ this.props.opts[0].count + this.props.opts[1].count + this.props.opts[2].count + this.props.opts[3].count }
            series={[
              {"label": this.props.opts[0].name, "value": this.props.opts[0].count, "colorIndex": "accent-1"},
              {"label": this.props.opts[1].name, "value": this.props.opts[1].count, "colorIndex": "neutral-1"},
              {"label": this.props.opts[2].name, "value": this.props.opts[2].count, "colorIndex": "neutral-3"},
              {"label": this.props.opts[3].name, "value": this.props.opts[3].count, "colorIndex": "accent-2"},
            ]}
        />
    )
  }
}

export default MyCircleChart