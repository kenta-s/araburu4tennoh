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

const wrapperStyle = { width: 400 };
class Shitennoh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      budget: 0,
      quality: 0,
      scope: 0
    };
    this.handleTime = this.handleTime.bind(this);
    this.handleBudget = this.handleBudget.bind(this);
    this.handleQuality = this.handleQuality.bind(this);
    this.handleScope = this.handleScope.bind(this);
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

  values() {
    return [this.state.time, this.state.budget, this.state.quality, this.state.scope]
  }

  handleTime(value) {
    if(this.values().includes(value)){
      return;
    }else{
      this.setState({
        time: value
      });
    }
  }

  handleBudget(value) {
    if(this.values().includes(value)){
      return;
    }else{
      this.setState({
        budget: value
      });
    }
  }

  handleQuality(value) {
    if(this.values().includes(value)){
      return;
    }else{
      this.setState({
        quality: value
      });
    }
  }

  handleScope(value) {
    if(this.values().includes(value)){
      return;
    }else{
      this.setState({
        scope: value
      });
    }
  }

  render() {
    return (
      <div style={wrapperStyle}>
        <p>時間</p>
        <Slider min={0} max={10} step={1} dots value={this.state.time} onChange={this.handleTime} handle={this.handle} />

        <p>予算</p>
        <Slider min={0} max={10} step={1} dots value={this.state.budget} onChange={this.handleBudget} handle={this.handle} />

        <p>品質</p>
        <Slider min={0} max={10} step={1} dots value={this.state.quality} onChange={this.handleQuality} handle={this.handle} />

        <p>スコープ</p>
        <Slider min={0} max={10} step={1} dots value={this.state.scope} onChange={this.handleScope} handle={this.handle} />
      </div>
    );
  }
}

ReactDOM.render(
  <Shitennoh />,
  document.getElementById('root')
);
