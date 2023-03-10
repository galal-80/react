import React from "react";

type Props = {};

const LogIn = (props: Props) => {
  return (
    <div className=" mt-[77px] mr-[60px] mb-12 bg-second rounded-2xl flex-1 ">
      <h3 className=" pt-[66px] pl-[35px] font-bold text-[40px] leading-[48px] text-black mb-[9px] ">
        Login
      </h3>
      <hr className="block w-[107px] ml-[31px] border-solid border-black border-[1px] " />

      <div className="mail pl-[35px] mr-[34px] ">
        <p className="font-bold text-[24px] leading-8 text-third mt-10 ">
          {" "}
          Welcome to Jobzella! 👋🏻
        </p>
        <p
          className=" font-[400] leading-5 text-[14px]  text-[#4C4E64AD]
 "
        >
          Please sign-in to your account and start the adventure
        </p>
        <form action="">
          <input
            className="block w-full mt-6 border-solid border-[#D8D8DD] border-[1px]  rounded-lg pl-[38px] pt-3 pb-3 focus:outline-none"
            type="mail"
            placeholder="Email"
          />
          <input
            className="block w-full mt-4 border-solid border-[#D8D8DD] border-[1px]  rounded-lg pl-[38px] pt-3 pb-3 focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <div className="check flex justify-between mb-[78px] text-[14px] leading-5">
            <div
              className="text-[#ABAEB0]
]"
            >
              <input
                className="mt-[17px] "
                type="checkbox"
                name=""
                id="checkbox"
              />
              <label className="mt-4 ml-[13px]" htmlFor="checkbox">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-[#5397C5] mt-4 underline font-semibold">
              Forgot Password?
            </a>
          </div>
          <button className="w-full bg-primary pt-3 pb-3 mb-[76px] text-white rounded-2xl leading-6 font-bold text-[14px]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
