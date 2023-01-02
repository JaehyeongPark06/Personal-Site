export function AboutMe(): JSX.Element {
  return (
    <div>
      <h1 className="text-center sm:font-semibold 1.5xl:font-bold text-gray-300 sm:mt-2 sm:mb-6 sm:text-title2 xl:text-title1">
        About Me
      </h1>
      <p className="font-normal mt-4 mb-8 text-gray-300 sm:text-desc1 2xl:text-desc2">
        I'm Jaehyeong, a high school student from Toronto working with software
        development. The majority of my projects can be found on my{" "}
        <a
          className="underline cursor-pointer hover:opacity-70 duration-200"
          href="https://github.com/JaehyeongPark06"
          target="_blank"
        >
          Github
        </a>
        .
      </p>
      <p className="font-normal mt-4 mb-8 text-gray-300 sm:text-desc1 2xl:text-desc2">
        Most of my recent projects are related to the web, but I like to dabble
        with anything related to programming.
      </p>
      <p className="font-normal mt-4 mb-8 text-gray-300 sm:text-desc1 2xl:text-desc2">
        You can find me teaching others, working on my latest projects, playing
        chess, or doing anything else I&apos;m interested in.
      </p>
      <p className="font-normal mt-4 mb-8 text-gray-300 sm:text-desc1 2xl:text-desc2">
        Feel free to connect with me through any of the avenues below. I'd love
        to talk!
        <div className="flex flex-row justify-center sm:mt-8">
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
      </p>
    </div>
  );
}
