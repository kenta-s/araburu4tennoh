import '!style-loader!css-loader!rc-slider/assets/index.css'; 
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

// const handle = (props) => {
//   const { value, dragging, index, ...restProps } = props;
//   return (
//     <Tooltip
//       prefixCls="rc-slider-tooltip"
//       overlay={value}
//       visible={dragging}
//       placement="top"
//       key={index}
//     >
//       <Handle value={value} {...restProps} />
//     </Tooltip>
//   );
// };

const wrapperStyle = { width: 400, margin: 50 };
class Shitennoh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      buget: 0,
      quality: 0,
      scope: 0
    };
  }

  handle(props) {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

  render() {
    return (
      <div>
        <div style={wrapperStyle}>
          <p>Slider with custom handle</p>
          <Slider min={0} max={10} defaultValue={0} handle={this.handle} />

          <p>Slider with custom handle</p>
          <Slider min={0} max={10} defaultValue={0} handle={this.handle} />

          <p>Slider with custom handle</p>
          <Slider min={0} max={10} defaultValue={0} handle={this.handle} />

          <p>Slider with custom handle</p>
          <Slider min={0} max={10} defaultValue={0} handle={this.handle} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Shitennoh />,
  document.getElementById('root')
);
