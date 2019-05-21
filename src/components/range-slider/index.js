import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Handler from './Handler';
import Track from './Track';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

function RangeSlider() {
  return (
    <Wrapper>
      <Handler />
      <Track />
    </Wrapper>
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
  minValue: 0,
  maxValue: 500,
  step: 1,
  disabled: false,
}

export default RangeSlider;
