import { motion, useMotionValueEvent } from "framer-motion";
import React, { useState } from "react";
import { useScroll } from "framer-motion";
import { FaGlobe } from "react-icons/fa";

export default function NavigationBar() {
  const [isTop, setIsTop] = useState(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsTop(latest);
  });

  return (
    <motion.div
      animate={{ y: isTop <= 20 ? 0 : -40 }}
      className={`flex flex-row justify-center items-center gap-6 px-[10%] py-6`}
    >
      <div className="mr-auto">Logo</div>
      <p>About Us</p>
      <p>Contact</p>

      <div className="ml-auto">
        <FaGlobe size={24} />
      </div>
    </motion.div>
  );
}
