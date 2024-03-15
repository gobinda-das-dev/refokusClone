import React, { useState } from "react";
import Button from "./Button";

const Product = ({data, changeTop, id}) => {
    const {heading, description, live, caseStudy, bgimg} = data;

  return (
    <div onMouseEnter={() => changeTop(id)} className="product relative h-56 hover:h-64 w-full duration-500 ease-expo">
      <img className="absolute top-0 left-0 opacity-0 duration-[inherit] ease-[inherit] h-full w-full object-cover" src={bgimg} alt="" />
      <div className="relative z-2 h-full max-w-screen-xl mx-auto flex justify-between items-center pr-36">
        <h1 className="text-4xl capitalize font-semibold">{heading}</h1>
        <div className="w-[30%]">
          <p className="text-lg leading-1 mb-4">
            {description}
          </p>
          <div className="flex gap-5 btn opacity-0 duration-300 ease-expo">
            <Button />
            {caseStudy && <Button text="Case Study"  />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
