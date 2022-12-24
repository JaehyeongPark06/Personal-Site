import Image from "next/image";
import Modal1 from "../modals/modal1";
import Modal2 from "../modals/modal2";
import Modal3 from "../modals/modal3";
import Modal4 from "../modals/modal4";
import Modal5 from "../modals/modal5";
import { useState } from "react";

// mapping later
export function Portfolio(): JSX.Element {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal1(true)}
        className="sm:cursor-pointer mdl:cursor-default block w-full aspect-video relative overflow-hidden group select-none"
      >
        <div className="absolute top-0 left-0 z-10 w-full h-full sm:p-14 mdl:p-8 lg:p-6 opacity-0 group-hover:opacity-100 duration-300">
          <div className="w-full h-full xl:hidden lmd:hidden sm:flex flex justify-center items-center">
            <h1 className="text-gray-300 text-2xl font-bold">
              Click for details
            </h1>
          </div>
          <div className="w-full h-full xl:flex lmd:flex sm:hidden hidden flex-col justify-end">
            <h1 className="text-gray-300 text-2xl font-extrabold mb-4">
              Pomodoro Clock
            </h1>
            <p className="text-gray-300 text-[0.85rem] mb-4">
              A pomodoro clock built to manage time better. Includes features
              like an alarm system and custom timer lengths. Leverages{" "}
              <a
                className="underline hover:opacity-70 duration-200 cursor-pointer"
                target="_blank"
                href="https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G"
              >
                frontendmentor.io
              </a>
              's designs.
            </p>
            <div className="flex w-full flex-wrap items-center mb-6 opacity-60">
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-300 border-[1.5px] border-gray-300 mr-2 mb-1">
                Vite
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-300 border-[1.5px] border-gray-300 mr-2 mb-1">
                React
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-300 border-[1.5px] border-gray-300 mr-2 mb-1">
                Styled Components
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/JaehyeongPark06/Pomodoro-Clock"
                target="_blank"
                className="hover:opacity-70 duration-200 text-gray-300 font-bold mr-5 flex items-center"
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
                href="https://jaehyeong-pomodoro.netlify.app/"
                target="_blank"
                className="hover:opacity-70 duration-200 text-gray-300 font-bold mr-5 flex items-center"
              >
                Live Site
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
        <div className="absolute top-0 left-0 z-[5] w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 to-black/80 duration-200"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <span className="box-border block overflow-hidden opacity-100 m-0 p-0 absolute top-0 left-0 bottom-0 right-0">
            <Image
              priority={true}
              src="/pomodoro-clock.png"
              width={3600}
              height={2030}
            />
          </span>
        </div>
      </div>
      <Modal1 isVisible={showModal1} onClose={() => setShowModal1(false)} />
      <div
        onClick={() => setShowModal2(true)}
        className="block w-full aspect-video relative overflow-hidden group select-none"
      >
        <div className="absolute top-0 left-0 z-10 w-full h-full sm:p-14 mdl:p-8 lg:p-6 opacity-0 group-hover:opacity-100 duration-300">
          <div className="w-full h-full xl:hidden cursor-pointer lmd:hidden sm:flex flex justify-center items-center">
            <h1 className="text-gray-300 text-2xl font-bold">
              Click for details
            </h1>
          </div>
          <div className="w-full h-full xl:flex lmd:flex sm:hidden hidden flex-col justify-end">
            <h1 className="text-gray-300 text-2xl font-extrabold mb-4">CNDR</h1>
            <p className="text-gray-300 text-[0.85rem] mb-4">
              A web application that tracks wildfires in real-time and provides
              mitigation methods depending on the severity. Uses NASA's EONET
              API for data and Google Maps to display it.
            </p>
            <p className="text-gray-300 text-[0.85rem] mb-4">
              Built at Hack the North 2022, Canada's largest hackathon @
              <a
                target="_blank"
                href="https://uwaterloo.ca/"
                className="underline hover:opacity-70 duration-200"
              >
                UWaterloo
              </a>
              .
            </p>
            <div className="flex w-full flex-wrap items-center mb-6 opacity-60">
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-300 border-[1.5px] border-gray-300 mr-2 mb-1">
                React
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/JaehyeongPark06/CNDR"
                target="_blank"
                className="hover:opacity-70 duration-200 text-gray-300 font-bold mr-5 flex items-center"
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
                className="hover:opacity-70 duration-200 text-gray-300 font-bold mr-5 flex items-center"
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
        <div className="absolute top-0 left-0 z-[5] w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 to-black/80 duration-200"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <span className="box-border block overflow-hidden opacity-100 m-0 p-0 absolute top-0 left-0 bottom-0 right-0">
            <Image src="/cndr.png" width={3600} height={2030} />
          </span>
        </div>
      </div>
      <Modal2 isVisible={showModal2} onClose={() => setShowModal2(false)} />
      <div
        onClick={() => setShowModal3(true)}
        className="block w-full aspect-video relative overflow-hidden group select-none"
      >
        <div className="absolute top-0 left-0 z-10 w-full h-full sm:p-14 mdl:p-8 lg:p-6 opacity-0 group-hover:opacity-100 duration-300">
          <div className="w-full h-full xl:hidden cursor-pointer lmd:hidden sm:flex flex justify-center items-center">
            <h1 className="text-gray-300 text-2xl font-bold">
              Click for details
            </h1>
          </div>
          <div className="w-full h-full xl:flex lmd:flex sm:hidden hidden flex-col justify-end">
            <h1 className="text-gray-300 text-2xl font-extrabold mb-4">
              Personal Site
            </h1>
            <p className="text-gray-300 text-[0.85rem] mb-4">
              Not much to say here! This one gave me an excuse to practice with
              Next.js, TypeScript and CSS frameworks/libraries.
            </p>
            <div className="flex w-full flex-wrap items-center mb-6 opacity-60">
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-300 border-[1.5px] border-gray-300 mr-2 mb-1">
                Next.js
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-300 border-[1.5px] border-gray-300 mr-2 mb-1">
                TypeScript
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-300 border-[1.5px] border-gray-300 mr-2 mb-1">
                Styled Components
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-300 border-[1.5px] border-gray-300 mr-2 mb-1">
                Tailwind CSS
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/JaehyeongPark06/Personal-Site"
                target="_blank"
                className="hover:opacity-70 duration-200 text-gray-300 font-bold mr-5 flex items-center"
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
                href="https://jaehyeongpark.social/"
                target="_blank"
                className="hover:opacity-70 duration-200 text-gray-300 font-bold mr-5 flex items-center"
              >
                Live Site
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
        <div className="absolute top-0 left-0 z-[5] w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 to-black/80 duration-200"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <span className="box-border overflow-hidden opacity-100 m-0 p-0 absolute top-0 left-0 bottom-0 right-0">
            <Image src="/personal.png" width={3600} height={2010} />
          </span>
        </div>
      </div>
      <Modal3 isVisible={showModal3} onClose={() => setShowModal3(false)} />
      <div
        onClick={() => setShowModal4(true)}
        className="block w-full aspect-video relative overflow-hidden group select-none"
      >
        <div className="absolute top-0 left-0 z-10 w-full h-full sm:p-14 mdl:p-8 lg:p-6 opacity-0 group-hover:opacity-100 duration-300">
          <div className="w-full h-full xl:hidden cursor-pointer lmd:hidden sm:flex flex justify-center items-center">
            <h1 className="text-gray-300 text-2xl font-bold">
              Click for details
            </h1>
          </div>
          <div className="w-full h-full xl:flex lmd:flex sm:hidden hidden flex-col justify-end">
            <h1 className="text-gray-300 text-2xl font-extrabold mb-4">
              Competitive Programming
            </h1>
            <p className="text-gray-300 text-[0.85rem] mb-4">
              My competitive programming solutions for online judges such as the{" "}
              <a
                className="underline hover:opacity-70 duration-200 cursor-pointer"
                target="_blank"
                href="https://cccgrader.com/"
              >
                CCC
              </a>
              ,{" "}
              <a
                className="underline hover:opacity-70 duration-200 cursor-pointer"
                target="_blank"
                href="https://dmoj.ca/"
              >
                DMOJ
              </a>
              , and{" "}
              <a
                className="underline hover:opacity-70 duration-200 cursor-pointer"
                target="_blank"
                href="https://codeforces.com/"
              >
                Codeforces
              </a>
              .
            </p>
            <div className="flex w-full flex-wrap items-center mb-6 opacity-60">
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-300 border-[1.5px] border-gray-300 mr-2 mb-1">
                C++
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-300 border-[1.5px] border-gray-300 mr-2 mb-1">
                Python
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/JaehyeongPark06/Competitive-Programming"
                target="_blank"
                className="hover:opacity-70 duration-200 text-gray-300 font-bold mr-5 flex items-center"
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
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-[5] w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 to-black/80 duration-200"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <span className="box-border block overflow-hidden opacity-100 m-0 p-0 absolute top-0 left-0 bottom-0 right-0">
            <Image
              src="/competitive-programming.png"
              width={3600}
              height={2030}
            />
          </span>
        </div>
      </div>
      <Modal4 isVisible={showModal4} onClose={() => setShowModal4(false)} />
      <div
        onClick={() => setShowModal5(true)}
        className="block w-full aspect-video relative overflow-hidden group select-none"
      >
        <div className="absolute top-0 left-0 z-10 w-full h-full sm:p-14 mdl:p-8 lg:p-6 opacity-0 group-hover:opacity-100 duration-300">
          <div className="w-full h-full xl:hidden cursor-pointer lmd:hidden sm:flex flex justify-center items-center">
            <h1 className="text-gray-300 text-2xl font-bold">
              Click for details
            </h1>
          </div>
          <div className="w-full h-full xl:flex lmd:flex sm:hidden hidden flex-col justify-end">
            <h1 className="text-gray-300 text-2xl font-extrabold mb-4">
              Traffic Stop Intersection
            </h1>
            <p className="text-gray-300 text-[0.85rem] mb-4">
              Processed LED signals using parallelization and timers with
              Arduino to design and build a traffic light intersection system.
              Proposed, debugged, and optimized a functioning prototype using
              TinkerCAD.
            </p>
            <div className="flex w-full flex-wrap items-center mb-6 opacity-60">
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-300 border-[1.5px] border-gray-300 mr-2 mb-1">
                C++
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-300 border-[1.5px] border-gray-300 mr-2 mb-1">
                Arduino
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-300 border-[1.5px] border-gray-300 mr-2 mb-1">
                TinkerCAD
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/JaehyeongPark06/Traffic-Stop-Intersection"
                target="_blank"
                className="hover:opacity-70 duration-200 text-gray-300 font-bold mr-5 flex items-center"
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
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-[5] w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 to-black/80 duration-200"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <span className="box-border block overflow-hidden opacity-100 m-0 p-0 absolute top-0 left-0 bottom-0 right-0">
            <Image src="/traffic-intersection.png" width={3600} height={2030} />
          </span>
        </div>
      </div>
      <Modal5 isVisible={showModal5} onClose={() => setShowModal5(false)} />
    </>
  );
}
export default Portfolio;
