import React from "react";

const Stripe = ({ data }) => {
  // console.log(data.url)

  return (
    <div
      className={`border border-l-0 border-zinc-600 flex shrink-0 items-center justify-between px-8 py-4`}
      style={{ width: 100 / 4.5 + "%" }}
    >
      <img className="h-[80%]" src={data.url} alt="partners logo" />
      <span className="font-semibold text-lg">{data.number}</span>
    </div>
  );
};

export default Stripe;
