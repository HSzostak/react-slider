import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Handle = styled.div`
  position: absolute;

  width: 32px;
  height: 32px;

  background-color: #333;
  border-radius: 50px;

  transform: translateY(-5px);
`;

function Handler(props) {
  const HandleRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [currentX, setCurrentX] = useState();
  const [initialX, setInitialX] = useState();
  const [xOffset , setXOffset] = useState(0);

  const onDragStart = event => {
    let tempX = event.clientX - xOffset
    if (event.type === "touchstart") {
      tempX = event.touches[0].clientX - xOffset;
    }

    setInitialX(tempX);

    if (event.target === HandleRef.current) {
      setIsActive(true);
    }
  }

  const onDrag = event => {
    if (isActive) {
      event.preventDefault();
      let tempX = event.clientX - initialX;

      if (event.type === "touchmove") {
        tempX = event.touches[0].clientX - initialX;
      }

      if(tempX !== currentX && isOnBoundaries(tempX)) {
        setCurrentX(tempX);
        setXOffset(tempX);
        props.onUpdate(tempX);
        HandleRef.current.style.transform = `translateX(${tempX}px)`;
      }
    }
  }

  const isOnBoundaries = tempX => {
    return (tempX >= 0 && tempX <= 300);
  }

  const onDragEnd = event => {
    setInitialX(currentX);
    setIsActive(false);
  }

  return (
    <Handle
      ref={HandleRef}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onDrag}
      onTouchEnd={onDragEnd}
    />
  );
}

Handler.propTypes = {
  minPosX: PropTypes.number,
  maxPosX: PropTypes.number
}

export default Handler;