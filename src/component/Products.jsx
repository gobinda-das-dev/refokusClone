import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      heading: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      caseStudy: false,
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c621a3aa0ee3ae147d692_arqitel-bg-p-2000.webp",
      vid: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
    },
    {
      heading: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      caseStudy: false,
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png",
      vid: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
    },
    {
      heading: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      caseStudy: false,
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f11502e2fa59425089e2e6_Work%20Background-p-2000.png",
      vid: "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",
    },
    {
      heading: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      caseStudy: false,
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64b754980b23ab2f2f2ff9e2_Work%20Background%20(1)-p-2000.jpg",
      vid: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
    },
    {
      heading: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      caseStudy: false,
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ccf5af18668cfbd3a8d6_bg%201-p-1600.png",
      vid: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
    },
    {
      heading: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      caseStudy: false,
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/6450586e80fac7eb1655014f_yir2022%E2%80%93bg-p-2000.png",
      vid: "https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm",
    },
    {
      heading: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      caseStudy: true,
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/6450586e80fac7eb1655014f_yir2022%E2%80%93bg-p-2000.png",
      vid: "https://cdn.refokus.com/website/2022/videos/yahoo.webm",
    },
  ];

  const [top, setTop] = useState(0);
  const [vidTop, setVidTop] = useState(0);
  const changeTop = (id) => {
    setVidTop(id * 20);
    setTop(id * 14);
  };

  return (
    <div className="relative mt-28">
      {products.map((item, i) => (
        <Product changeTop={changeTop} data={item} key={i} id={i} />
      ))}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ top: 0 }}
          animate={{ top: top + "rem" }}
          className="absolute left-[20%] h-80 -mt-8 w-[35%] overflow-hidden rounded-md"
        >
          {products.map((v, i) => (
            <motion.video
              key={i}
              animate={{ y: -vidTop + "rem" }}
              className="h-full w-full object-cover"
              muted
              autoPlay
              loop
              src={v.vid}
            ></motion.video>
          ))}
          {/* <img className={`absolute top-0 left-0 h-full w-full object-cover`} src={videos[idx].img} /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
