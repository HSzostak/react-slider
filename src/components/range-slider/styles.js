import styled from 'styled-components';

const trackWidth = '100%';
const trackHeight = '32px';
const thumbDimension = '32px';
const trackColor = '#ebebeb';
const fillColor = '#73bc00';

const fill = () => `
  height: ${trackHeight};
  background: ${fillColor};
  border-radius: 999px;
`;

const thumb = () => `
  -webkit-appearance: none;
  appearance: none;
  width: ${thumbDimension};
  height: ${thumbDimension};

  box-sizing: border-box;
  border: 2px solid ${fillColor};
  background: #fff;
  cursor: pointer;
  border-radius: 999px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const track = () => `
  box-sizing: border-box;
  border: none;
  width: ${trackWidth};
  height: ${trackHeight};
  background: ${trackColor};
  cursor: pointer;
  border-radius: 999px;
`

export const Slider = styled.input`
  &, &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: 0;
  }

  margin: 0;
  padding: 0;
  width: ${trackWidth};
  height: ${thumbDimension};
  background: ${trackColor};
  border-radius: 999px;
  font: 1em/1 arial, sans-serif;

  &::-webkit-slider-runnable-track {
    ${track}
  }

  &::-moz-range-track,
  &::-ms-track { ${track} }

  &::-ms-fill-lower { ${fill} }

  &::-webkit-slider-thumb {
    ${thumb}
  }
  &::-moz-range-thumb { ${thumb} }
  &::-ms-thumb {
      margin-top: 0;
      ${thumb}
  }

  &::-ms-tooltip { display: none }
`;

export const Container = styled.div`
  flex: 1;
  position: relative;
  margin: 0 8px;
`;

export const SliderWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  font-size: 0;
  align-items: center;
`;

export const SliderTooltip = styled.span`
  position: absolute;
  left: 0;
  bottom: 100%;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: Arial;
  background: #ccc;
  padding: 8px 16px;
  border-radius: 4px;
  transition: opacity .2s ease;
  opacity: 1;

  transform: translate( -50% );

  &:empty {
    opacity: 0;
  }

  &:after {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    display: block;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #ccc transparent transparent transparent;
  }
`;

export const CustomButton = styled.button`
  appearance: none;
  width: 34px;
  height: 32px;
  border-radius: 200px;
  border: solid 2px #cccccc;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  span {
    display: block;
    opacity: 0;
    height: 0;
    width: 0;
  }
`;