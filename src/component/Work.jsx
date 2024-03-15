import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: 50,
      left: 50,
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: 54,
      left: 44,
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: 44,
      left: 56,
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: 65,
      left: 50,
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: 58,
      left: 60,
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: 60,
      left: 50,
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (latest) => {
    const showImages = (arr) => {
      setImages(prev => (
        prev.map((item, i) => (
          arr.indexOf(i) === -1
          ? { ...item, isActive: false }
          : { ...item, isActive: true}
        ))
      ))
    };

    switch (Math.round(latest * 100)) {
      case 0:
        showImages([]);
        break;
      case 1:
        showImages([0]);
        break;
      case 2:
        showImages([0, 1]);
        break;
      case 3:
        showImages([0, 1, 2]);
        break;
      case 4:
        showImages([0, 1, 2, 3]);
        break;
      case 5:
        showImages([0, 1, 2, 3, 4]);
        break;
      case 6:
        showImages([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[40vw] leading-none tracking-tight font-medium">
          work
        </h1>
        {images.map(
          (img, index) =>
            img.isActive && (
              <img
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-72 rounded-2xl`}
                key={index}
                src={img.url}
                style={{ top: img.top + "%", left: img.left + "%" }}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
};

export default Work;
