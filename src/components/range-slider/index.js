import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RangeSlider(props) {
  const [inputValue, setInputValue] = useState(props.initialValue);

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <input
        type="range"
        min={props.minValue}
        max={props.maxValue}
        step={props.step}
        value={inputValue}
        onChange={onChange}
        data-orientation="horizontal"
      />


      <h1>{inputValue}</h1>
    </div>
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
  initialValue: 0,
  minValue: 198,
  maxValue: 1000,
  step: 1,
  disabled: false,
}

export default RangeSlider;
