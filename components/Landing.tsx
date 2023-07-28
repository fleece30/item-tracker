import React from "react";
import AddItem from "../components/AddItem";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <div className="flex flex-col px-20 py-10">
      <AddItem />
    </div>
  );
};

export default Landing;
