import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import {
  SliderWrapper,
  SliderTooltip,
  Slider,
  CustomButton
} from './styles';

function RangeSlider(props) {
  const [inputValue, setInputValue] = useState(props.initialValue);

  const onChange = event => {
    setInputValue(event.target.value);
  }

  const handleButtonPress = isSubtracting => {
    const newValue = isSubtracting ? (+inputValue - props.step) : (+inputValue + props.step);

    if(
      (isSubtracting && newValue < props.minValue) ||
      (!isSubtracting && newValue > props.maxValue)
    )
      return;

    setInputValue(isSubtracting ? (+inputValue - props.step) : (+inputValue + props.step));
  }

  return (
    <SliderWrapper
      className="slider"
      style={{
        "--min": props.minValue,
        "--max": props.maxValue,
        "--val": inputValue,
      }}
    >
      <CustomButton
        onMouseDown={() => handleButtonPress(true)}
        onTouchStart={() => handleButtonPress(true)}
      >
        -
        <span>Diminuir valor</span>
      </CustomButton>

      <Slider
        type="range"
        min={props.minValue}
        max={props.maxValue}
        step={props.step}
        value={inputValue}
        onChange={onChange}
        data-orientation="horizontal"
        className="slider--input"
      />

      <SliderTooltip className="slider--tooltip">{inputValue}</SliderTooltip>

      <CustomButton
        onMouseDown={() => handleButtonPress()}
        onTouchStart={() => handleButtonPress()}
      >
        +
        <span>Aumentar valor</span>
      </CustomButton>
    </SliderWrapper>
  );
}

RangeSlider.propTypes = {
  initialValue: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
}

RangeSlider.defaultProps = {
  initialValue: 198,
  minValue: 198,
  maxValue: 11327,
  step: 1,
  disabled: false,
}

export default RangeSlider;
