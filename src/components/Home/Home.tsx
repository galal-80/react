import React from "react";
import LogIn from "../LogIn/LogIn";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className=" h-screen bg-primary  ">
      <img className=" absolute " src="Ellipse1.png" alt="" />
      <img className=" pl-[60px] pt-12 relative " src="Group646.png" alt="" />
      <img
        className="  absolute top-0 left-[422px] "
        src="Ellipse3.png"
        alt=""
      />

      <div className="container">
        <div className="flex items-center gap-[116.99px] max-h-screen absolute top-0 left-0 min-w-full ">
          <div className=" mt-[209px] ml-[69px] mb-[156px] basis-[49.99%]">
            {" "}
            <img className="max-w-full" src="pana.png" alt="" />
          </div>
          <LogIn />
        </div>
      </div>
    </div>
  );
};

export default Home;
