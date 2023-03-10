import React from "react";

const CNDR = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="sm:flex lmd:hidden z-40 backdrop-blur-md bg-black/70 fixed top-0 left-0 h-screen w-screen flex justify-center items-center select-none">
      <div className="sm:w-[90%] md:w-[88%] mdd:w-[80%] lmdl:w-[90%] lmdd:w-[75%] w-11/12 max-h-[66.6%] relative p-0 flex justify-center items-center before:-z-[50] before:content-[''] before:w-full before:h-[90%] before:absolute before:left-1/2 before:blur-2xl before:translate-y-7 before:-translate-x-1/2">
        <div className="flex flex-col relative justify-start bg-gray-300 z-[55] sm:p-8 pt-12 p-7 w-full h-full">
          <button
            onClick={() => onClose()}
            className="cursor-pointer absolute flex items-center justify-center right-0 top-0 mt-5 mr-5 p-2 rounded-full bg-gray-200 duration-200"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="w-5 h-5 text-gray-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
            </svg>
          </button>
          <h1 className="font-bold md:text-2xl text-xl mb-4 text-gray-200">
            CNDR
          </h1>
          <div className="w-full h-full overflow-x-hidden flex flex-col items-start text-gray-200 mt-0">
            <p className="text-gray-200 text-[0.85rem] mb-4">
              A web application that tracks wildfires in real-time and provides
              mitigation methods depending on the severity. Uses NASA's EONET
              API for data and Google Maps to display it.
            </p>
            <p className="text-gray-200 text-[0.85rem] mb-4">
              Hacked at Hack the North 2022, Canada's largest hackathon @
              <a
                target="_blank"
                href="https://uwaterloo.ca/"
                className="underline hover:opacity-70 duration-200"
              >
                UWaterloo
              </a>
              .
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center mb-6 opacity-60">
            <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 border-[1.5px] border-gray-200 mr-2 mb-1">
              React.js
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/JaehyeongPark06/CNDR"
              target="_blank"
              className="hover:opacity-70 duration-200 text-gray-200 font-bold mr-5 flex items-center"
            >
              Github
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="ml-[0.12rem] pt-0.5 h-5 w-5 -rotate-45"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="36"
                  d="M208 352h-64a96 96 0 010-192h64m96 0h64a96 96 0 010 192h-64m-140.71-96h187.42"
                ></path>
              </svg>
            </a>
            <a
              href="https://devpost.com/software/cindr"
              target="_blank"
              className="hover:opacity-70 duration-200 text-gray-200 font-bold mr-5 flex items-center"
            >
              Devpost
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="ml-[0.12rem] pt-0.5 h-5 w-5 -rotate-45"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="36"
                  d="M208 352h-64a96 96 0 010-192h64m96 0h64a96 96 0 010 192h-64m-140.71-96h187.42"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CNDR;
