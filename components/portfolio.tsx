import CNDR from "./modals/cndr";
import Chess from "./modals/chess";
import Image from "next/image";
import Personal from "./modals/personal";
import Pomodoro from "./modals/pomodoro";
import Sort from "./modals/sort";
import Traffic from "./modals/traffic";
import { useState } from "react";

// mapping and organization later
export function Portfolio(): JSX.Element {
  // making this efficient later
  const [showPomodoro, setShowPomodoro] = useState(false);
  const [showCNDR, setShowCNDR] = useState(false);
  const [showPersonal, setShowPersonal] = useState(false);
  const [showTraffic, setShowTraffic] = useState(false);
  const [showChess, setShowChess] = useState(false);
  const [showSort, setShowSort] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowChess(true)}
        className="block w-full aspect-video relative overflow-hidden group select-none"
      >
        <div className="absolute top-0 left-0 z-10 w-full h-full sm:p-14 mdl:p-6 opacity-0 group-hover:opacity-100 duration-200">
          <div className="w-full h-full xl:hidden cursor-pointer lmd:hidden sm:flex flex justify-center items-center">
            <h1 className="text-gray-200 text-2xl font-bold">
              Click for details
            </h1>
          </div>
          <div className="w-full h-full xl:flex lmd:flex sm:hidden hidden flex-col justify-end">
            <h1 className="text-gray-200 text-2xl font-extrabold mb-4">
              Chess Engine
            </h1>
            <p className="text-gray-200 sm:text-[0.85rem] 2xl:text-[0.95rem] mb-4">
              A chess engine based on the Negamax algorithm with up to 10th
              depth game analysis. Features include taking back moves, flipping
              and resetting the board, under promotions and custom board
              positions and evaluation times.
            </p>
            <p className="text-gray-200 sm:text-[0.85rem] 2xl:text-[0.95rem] mb-4">
              More info can be found on the Github respository.
            </p>
            <div className="flex w-full flex-wrap items-center mb-6 opacity-60">
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
                JavaScript
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
                Bootstrap
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/JaehyeongPark06/Chess-Engine"
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
                href="https://jaehyeong-chess-engine.netlify.app/"
                target="_blank"
                className="hover:opacity-70 duration-200 text-gray-200 font-bold mr-5 flex items-center"
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
        <div className="absolute top-0 left-0 z-[5] w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-black/90 duration-200"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <span className="box-border overflow-hidden opacity-100 m-0 p-0 absolute top-0 left-0 bottom-0 right-0">
            <Image
              src="/chess-engine.png"
              priority
              width={3600}
              height={2040}
            />
          </span>
        </div>
      </div>
      <Chess isVisible={showChess} onClose={() => setShowChess(false)} />
      <div
        onClick={() => setShowPomodoro(true)}
        className="sm:cursor-pointer mdl:cursor-default block w-full aspect-video relative overflow-hidden group select-none"
      >
        <div className="absolute top-0 left-0 z-10 w-full h-full sm:p-14 mdl:p-6 opacity-0 group-hover:opacity-100 duration-200">
          <div className="w-full h-full xl:hidden lmd:hidden sm:flex flex justify-center items-center">
            <h1 className="text-gray-200 text-2xl font-bold">
              Click for details
            </h1>
          </div>
          <div className="w-full h-full xl:flex lmd:flex sm:hidden hidden flex-col justify-end">
            <h1 className="text-gray-200 text-2xl font-extrabold mb-4">
              Pomodoro Clock
            </h1>
            <p className="text-gray-200 sm:text-[0.85rem] 2xl:text-[0.95rem] mb-4">
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
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
                Vite
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
                React.js
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
                Styled Components
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/JaehyeongPark06/Pomodoro-Clock"
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
                href="https://jaehyeong-pomodoro.netlify.app/"
                target="_blank"
                className="hover:opacity-70 duration-200 text-gray-200 font-bold mr-5 flex items-center"
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
        <div className="absolute top-0 left-0 z-[5] w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-black/90 duration-200"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <span className="box-border block overflow-hidden opacity-100 m-0 p-0 absolute top-0 left-0 bottom-0 right-0">
            <Image
              src="/pomodoro-clock.png"
              priority
              width={3600}
              height={2030}
            />
          </span>
        </div>
      </div>
      <Pomodoro
        isVisible={showPomodoro}
        onClose={() => setShowPomodoro(false)}
      />
      <div
        onClick={() => setShowSort(true)}
        className="block w-full aspect-video relative overflow-hidden group select-none"
      >
        <div className="absolute top-0 left-0 z-10 w-full h-full sm:p-14 mdl:p-6 opacity-0 group-hover:opacity-100 duration-200">
          <div className="w-full h-full xl:hidden cursor-pointer lmd:hidden sm:flex flex justify-center items-center">
            <h1 className="text-gray-200 text-2xl font-bold">
              Click for details
            </h1>
          </div>
          <div className="w-full h-full xl:flex lmd:flex sm:hidden hidden flex-col justify-end">
            <h1 className="text-gray-200 text-2xl font-extrabold mb-4">
              Sorting Algorithm Visualizer
            </h1>
            <p className="text-gray-200 sm:text-[0.85rem] 2xl:text-[0.95rem] mb-4">
              A sorting algorithm visualizer developed with Python and Pygame
              that visualizes algorithms such as bubble sort, heap sort, radix
              sort, selection sort, insertion sort, merge sort, and quick sort.
            </p>
            <div className="flex w-full flex-wrap items-center mb-6 opacity-60">
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
                Python
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
                PyGame
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/JaehyeongPark06/Sorting-Algorithm-Visualizer"
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
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-[5] w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-black/90 duration-200"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <span className="box-border overflow-hidden opacity-100 m-0 p-0 absolute top-0 left-0 bottom-0 right-0">
            <Image src="/sort.png" width={3600} height={2040} />
          </span>
        </div>
      </div>
      <Sort isVisible={showSort} onClose={() => setShowSort(false)} />
      <div
        onClick={() => setShowPersonal(true)}
        className="block w-full aspect-video relative overflow-hidden group select-none"
      >
        <div className="absolute top-0 left-0 z-10 w-full h-full sm:p-14 mdl:p-6 opacity-0 group-hover:opacity-100 duration-200">
          <div className="w-full h-full xl:hidden cursor-pointer lmd:hidden sm:flex flex justify-center items-center">
            <h1 className="text-gray-200 text-2xl font-bold">
              Click for details
            </h1>
          </div>
          <div className="w-full h-full xl:flex lmd:flex sm:hidden hidden flex-col justify-end">
            <h1 className="text-gray-200 text-2xl font-extrabold mb-4">
              Personal Site
            </h1>
            <p className="text-gray-200 sm:text-[0.85rem] 2xl:text-[0.95rem] mb-4">
              I don't really know what to say here. I guess this one helped me
              practice with Next.js and TypeScript.
            </p>
            <div className="flex w-full flex-wrap items-center mb-6 opacity-60">
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
                Next.js
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
                TypeScript
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
                Tailwind CSS
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/JaehyeongPark06/Personal-Site"
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
                href="https://jaehyeongpark.social/"
                target="_blank"
                className="hover:opacity-70 duration-200 text-gray-200 font-bold mr-5 flex items-center"
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
        <div className="absolute top-0 left-0 z-[5] w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-black/90 duration-200"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <span className="box-border overflow-hidden opacity-100 m-0 p-0 absolute top-0 left-0 bottom-0 right-0">
            <Image src="/personal.png" width={3600} height={2010} />
          </span>
        </div>
      </div>
      <Personal
        isVisible={showPersonal}
        onClose={() => setShowPersonal(false)}
      />
      <div
        onClick={() => setShowCNDR(true)}
        className="block w-full aspect-video relative overflow-hidden group select-none"
      >
        <div className="absolute top-0 left-0 z-10 w-full h-full sm:p-14 mdl:p-6 opacity-0 group-hover:opacity-100 duration-200">
          <div className="w-full h-full xl:hidden cursor-pointer lmd:hidden sm:flex flex justify-center items-center">
            <h1 className="text-gray-200 text-2xl font-bold">
              Click for details
            </h1>
          </div>
          <div className="w-full h-full xl:flex lmd:flex sm:hidden hidden flex-col justify-end">
            <h1 className="text-gray-200 text-2xl font-extrabold mb-4">CNDR</h1>
            <p className="text-gray-200 sm:text-[0.85rem] 2xl:text-[0.95rem] mb-4">
              A web application that tracks wildfires in real-time and provides
              mitigation methods depending on the severity. Uses NASA's EONET
              API for data and Google Maps to display it.
            </p>
            <p className="text-gray-200 sm:text-[0.85rem] 2xl:text-[0.95rem] mb-4">
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
            <div className="flex w-full flex-wrap items-center mb-6 opacity-60">
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
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
        <div className="absolute top-0 left-0 z-[5] w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-black/90 duration-200"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <span className="box-border block overflow-hidden opacity-100 m-0 p-0 absolute top-0 left-0 bottom-0 right-0">
            <Image src="/cndr.png" width={3600} height={2030} />
          </span>
        </div>
      </div>
      <CNDR isVisible={showCNDR} onClose={() => setShowCNDR(false)} />
      <div
        onClick={() => setShowTraffic(true)}
        className="block w-full aspect-video relative overflow-hidden group select-none"
      >
        <div className="absolute top-0 left-0 z-10 w-full h-full sm:p-14 mdl:p-6 opacity-0 group-hover:opacity-100 duration-200">
          <div className="w-full h-full xl:hidden cursor-pointer lmd:hidden sm:flex flex justify-center items-center">
            <h1 className="text-gray-200 text-2xl font-bold">
              Click for details
            </h1>
          </div>
          <div className="w-full h-full xl:flex lmd:flex sm:hidden hidden flex-col justify-end">
            <h1 className="text-gray-200 text-2xl font-extrabold mb-4">
              Traffic Stop Intersection
            </h1>
            <p className="text-gray-200 sm:text-[0.85rem] 2xl:text-[0.95rem] mb-4">
              Processed LED signals using parallelization and timers with
              Arduino to design and build a traffic light intersection system.
              Proposed, debugged, and optimized a functioning prototype using
              TinkerCAD.
            </p>
            <div className="flex w-full flex-wrap items-center mb-6 opacity-60">
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
                C++
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
                Arduino
              </div>
              <div className="px-2 pt-[0.2rem] pb-[0.2rem] text-[0.77rem] text-gray-200 sm:border-[1.5px] 2xl:border-[2px] border-gray-200 mr-2 mb-1 font-medium">
                TinkerCAD
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/JaehyeongPark06/Traffic-Stop-Intersection"
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
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-[5] w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-black/90 duration-200"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <span className="box-border block overflow-hidden opacity-100 m-0 p-0 absolute top-0 left-0 bottom-0 right-0">
            <Image src="/traffic-intersection.png" width={3600} height={2030} />
          </span>
        </div>
      </div>
      <Traffic isVisible={showTraffic} onClose={() => setShowTraffic(false)} />
    </>
  );
}
export default Portfolio;
