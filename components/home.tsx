import Image from "next/image";

export function Identify(): JSX.Element {
  return (
    <div className="w-full fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div className="z-0 flex w-full h-full items-center justify-center relative">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-80 h-24 -rotate-45 bg-gradient-to-r from-gray-100 to-gray-100 blur-3xl from rounded-full" />
          <span className="overflow-hidden relative">
            <Image
              alt="computer graphic"
              className="opacity-[15%] absolute m-auto"
              src="/pc.webp"
              width={250}
              height={250}
              priority
            />
          </span>
        </div>
        <div className="flex flex-col items-center justify-center absolute">
          <h1 className="sm:font-semibold 1.5xl:font-bold text-gray-300 sm:text-title2 lmdl:text-title1 mdl:text-title5">
            Jaehyeong Park
          </h1>
          <h2 className="font-normal text-gray-300 mt-0.25 sm:text-title6">
            Student & Software Developer
          </h2>
          <div className="flex flex-row justify-center mt-5 text-gray-300">
            <a
              className="sm:mx-3 mdl:mx-2 cursor-pointer hover:opacity-70 duration-200"
              href="https://www.linkedin.com/in/jaehyeongpark"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentcolor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16.0098 8.00299C17.6011 8.00299 19.1272 8.63513 20.2524 9.76035C21.3776 10.8856 22.0098 12.4117 22.0098 14.003V21.003H18.0098V14.003C18.0098 13.4728 17.7991 12.9639 17.424 12.5888C17.0489 12.2137 16.5402 12.003 16.0098 12.003C15.4793 12.003 14.9706 12.2137 14.5956 12.5888C14.2205 12.9639 14.0098 13.4728 14.0098 14.003V21.003H10.0098V14.003C10.0098 12.4117 10.6419 10.8856 11.7671 9.76035C12.8923 8.63513 14.4185 8.00299 16.0098 8.00299V8.00299ZM2.00977 9.00299H6.00977V21.003H2.00977V9.00299Z"></path>
                <path d="M4.00977 6.00299C5.11434 6.00299 6.00977 5.10756 6.00977 4.00299C6.00977 2.89842 5.11434 2.00299 4.00977 2.00299C2.9052 2.00299 2.00977 2.89842 2.00977 4.00299C2.00977 5.10756 2.9052 6.00299 4.00977 6.00299Z"></path>
              </svg>
            </a>
            <a
              className="sm:mx-3 mdl:mx-2 cursor-pointer hover:opacity-70 duration-200"
              href="https://www.github.com/jaehyeongpark06"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentcolor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37.0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44.0 0020 4.77 5.07 5.07.0 0019.91 1S18.73.65 16 2.48a13.38 13.38.0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07.0 005 4.77 5.44 5.44.0 003.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37.0 009 18.13V22"></path>
              </svg>
            </a>
            <a
              className="sm:mx-3 mdl:mx-2 cursor-pointer hover:opacity-70 duration-200"
              href="mailto:jaehyeongpark06@gmail.com"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentcolor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1.0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1.0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
