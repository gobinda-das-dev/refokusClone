import React from "react";
import Card from "./Card";

const Cards = () => {
  const cardData = [
    {
      heading1: "Up next news",
      heading2: "Insights and behind the senses",
      width: "w-1/3",
      start: false,
      hoverColor: "#3E3E46",
      bgco: "bg-zinc-800"
    },
    {
      heading1: "get in touch",
      heading2: "Let's get to it, together",
      width: "w-2/3",
      start: true,
      hoverColor: "#7443FF",
      bgco: "bg-zinc-700/70"
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-screen-xl m-auto flex gap-1">
        {cardData.map((card, index) => {
          return <Card key={index} data={card} />;
        })}
        {/* <Card width={"w-1/3"} start={false} />
        <Card width={"w-2/3"} start={true} /> */}
      </div>
    </div>
  );
};

export default Cards;
