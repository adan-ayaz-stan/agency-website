import React, { useState, useEffect } from "react";
import { animated, Spring, useSpring } from "react-spring";

const Price = ({ value }) => {
  const [prevValue, setPrevValue] = useState(value);

  const props = useSpring({
    val: value,
    from: { val: prevValue },
    config: { tension: 150, friction: 24 },
  });

  useEffect(() => {
    setPrevValue(value);
  }, [value]);

  return (
    <animated.h1 className="text-3xl">
      {props.val.interpolate((val) => `$${Math.floor(val)}`)}
    </animated.h1>
  );
};

export default Price;
