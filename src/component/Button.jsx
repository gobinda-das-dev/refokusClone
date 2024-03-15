import { easeInOut, motion } from "framer-motion";
import React, { useState } from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Button = ({ text = "Start a Project" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className="primary-btn h-8 w-34 px-4 py-4 bg-white text-black flex flex-col items-center overflow-hidden rounded-full">
      <motion.div
      animate={{y: isHovered ? "-200%" : "-50%"}}
      transition={{ease: easeInOut}}
      className="flex translate-y-full w-full items-center justify-between gap-4">
        <span className="text-sm">{text}</span>
        <MdOutlineSubdirectoryArrowRight size={".7em"} />
      </motion.div>
      <motion.div
      animate={{y: isHovered ? "-150%" : 0}}
      transition={{ease: easeInOut}}
      className="flex translate-y-full w-full items-center justify-between gap-4">
        <span className="text-sm">{text}</span>
        <MdOutlineSubdirectoryArrowRight size={".7em"} />
      </motion.div>
    </button>
  );
};

export default Button;
