import React from 'react';
import bffc_15 from '../assets/images/BBFC_15.png';

const Hero = () => {
  return (
    <div className="relative">
      <img
        className="w-screen"
        src="https://occ-0-279-1167.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSSr4vvBTboHC0s13kFMf21LOAySyot3tr3I3_Eg1U5KliA1L4dGq0GVpPNPZDSl9gBbm1M1aVFUCRc4-Rj06ZiOZqh8.webp?r=582"
        alt=""
      />

      <div className=" bg-gradient-to-br-77 opacity-75 w-3/4 h-full absolute top-0"></div>

      <div className="absolute w-4/12 bottom-305 px-4per">
        <img
          src="https://occ-0-279-1167.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRLrKvroWZ5y7oIkGJx-JkvP1CJFOg6jaS2zT3RyemG7bvanLH8PY76f3T2IO-BfUyJ53fHQAdtkmbgtxoNsK5TuDcooiOIIQehV0QO52uM94OHpIvuvCYZfPWrbcRB0jl23BRn8s-Mqgp_tnJJlNCkOg-mTwSOGzXB2ZAtncQTVGw.webp?r=2ec"
          title="Designated Survivor"
          alt="Designated Survivor"
          className="w-3/4"
        />
        <button className="mr-4 bg-white hover:bg-gray-300 pl-4 pr-5 py-2 text-lg mt-8 rounded text-black font-medium inline-flex items-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 mr-3">
            <path d="M6 4l15 8-15 8z" fill="currentColor"></path>
          </svg>
          Play
        </button>
        <button className="bg-gray-button hover:bg-gray-buttonH pl-4 pr-5 py-2 text-lg mt-8 rounded text-white font-medium inline-flex items-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 mr-3">
            <path
              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z"
              fill="currentColor"
            ></path>
          </svg>
          More info
        </button>
      </div>
      <div className="absolute bottom-305 right-0 inline-flex">
        <button className="rounded-full bg-tranparent text-md text-white border border-white p-2 hover:bg-white hover:bg-opacity-25 mr-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6 font-light">
            <path
              d="M9 7.828L6.828 10H4v4h2.828L9 16.172V7.828zM11 21l-5-5H2V8h4l5-5v18zm6-10.414l3.293-3.293 1.414 1.414L18.414 12l3.293 3.293-1.414 1.414L17 13.414l-3.293 3.293-1.414-1.414L15.586 12l-3.293-3.293 1.414-1.414L17 10.586z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <div className="border-l-2 border-gray-200 pl-4 bg-black pr-8 bg-opacity-50  h-9">
          <img
            src={bffc_15}
            alt="BFFC Maturity rating 15"
            className="w-7 h-7"
          />
        </div>
      </div>
      <div className="absolute bottom-0 bg-gradient-header-bt h-52 w-screen"></div>
    </div>
  );
};

export default Hero;
