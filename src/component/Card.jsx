import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Card = ({ data }) => {
  const { heading1, heading2, width, start, hoverColor, bgco } = data;
  const [padding, setPadding] = useState(0);

  return (
    <motion.div
      onMouseEnter={() => setPadding(5)}
      onMouseLeave={() => setPadding(0)}
      whileHover={{ backgroundColor: hoverColor }}
      className={`${width} min-h-[60vh] ${bgco} rounded-2xl p-5 flex flex-col justify-between`}
    >
      <div style={{padding: `${0} ${padding}px`}} className="duration-500 ease-expo">
        <div className="flex justify-between items-center">
          <h1 className="capitalize">{heading1}</h1>
          <BsArrowRight />
        </div>
        <h1 className="text-2xl font-medium mt-5 w-56">{heading2}</h1>
      </div>
      <div>
        {start ? (
          <>
            <h1 className="text-8xl whitespace-nowrap font-semibold">
              Start a project
            </h1>
            <button className="border px-7 py-3 mt-4 rounded-full font-semibold text-base">
              Contact Us
            </button>
          </>
        ) : (
          <p className="text-xs text-zinc-300">
            Explore what divides our team.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
