import React from 'react'
import BannerImage from '../../assets/Banner.png';
import Cricket from '../../assets/Cricket.png'

const Banner = () => {
  return (
    <div className=" w-[100%] lg:max-w-10/12 mx-auto mt-6 px-5 md:px-9  lg:px-0">
      <div
        className="min-h-120 bg-cover bg-center rounded-3xl py-16 "
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className=" flex flex-col items-center justify-center px-6 lg:px-0 ">
          <img src={Cricket} alt="" />
          <h1 className="font-bold text-2xl md:text-[40px] leading-auto md:leading-[60px] text-white mt-6 mb-4 text-center">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="font-medium text-base md:text-2xl text-white/70 mb-6">
            Beyond Boundaries Beyond Limits
          </p>
          <div className=" border border-[#E7FE29] p-2 rounded-2xl cursor-pointer">
            <button className="rounded-xl bg-[#E7FE29] font-bold text-base py-3.5 px-5 cursor-pointer ">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner