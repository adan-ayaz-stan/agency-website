import { motion, useSpring, useTransform } from "framer-motion";
import React, { useState, useEffect } from "react";

const Price = ({ value }) => {
  const x = useSpring(0, {
    damping: 30,
    duration: 0.6,
  });

  const y = useTransform(x, (value) => "$" + value.toFixed(0));

  useEffect(() => {
    x.set(value);
  }, [value]);

  return <motion.h1 className="text-2xl">{y}</motion.h1>;
};

export default Price;
