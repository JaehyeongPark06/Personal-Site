export function AboutMe(): JSX.Element {
  return (
    <div>
      <h1 className="text-center sm:font-semibold 1.5xl:font-bold text-gray-200 sm:mt-2 sm:mb-6 sm:text-[2rem] xl:text-[2.4rem]">
        About Me
      </h1>
      <p className="font-normal mt-4 mb-8 text-gray-200 sm:text-[1.05rem] 2xl:text-[1rem]">
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
      <p className="font-normal mt-4 mb-8 text-gray-200 sm:text-[1.05rem] 2xl:text-[1rem]">
        Most of my recent projects are related to the web, but I like to dabble
        with anything related to programming.
      </p>
      <p className="font-normal mt-4 mb-8 text-gray-200 sm:text-[1.05rem] 2xl:text-[1rem]">
        You can find me teaching others 🧑‍🏫, working on my latest projects 👨‍💻,
        playing chess ♟️, or doing anything else I&apos;m interested in.
      </p>
      <p className="font-normal mt-4 mb-8 text-gray-200 sm:text-[1.05rem] 2xl:text-[1rem]">
        Feel free to connect with me through my socials. I'd love to talk!
      </p>
    </div>
  );
}
