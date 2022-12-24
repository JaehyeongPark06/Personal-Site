export function AboutMe(): JSX.Element {
  return (
    <>
      <h1 className="text-center font-semibold text-gray-300 sm:mt-2 sm:mb-6 sm:text-title2 xl:text-title1">
        About Me
      </h1>
      <p className="font-light mt-4 mb-8 text-gray-300 sm:text-desc1 2xl:text-desc2">
        <span role="img" aria-label="Wave">
          👋
        </span>{" "}
        Hi, I'm Jaehyeong Park! I&apos;m a high school student from Toronto
        working with software design and development.
      </p>
      <p className="font-light mt-4 mb-8 text-gray-300 sm:text-desc1 2xl:text-desc2">
        You can find me teaching others{" "}
        <span role="img" aria-label="Teacher">
          👨‍🏫
        </span>
        , working on my latest projects{" "}
        <span role="img" aria-label="Laptop">
          👨‍💻
        </span>
        , playing chess{" "}
        <span role="img" aria-label="Pawn">
          ♟️
        </span>
        , or doing anything else I&apos;m interested in.
      </p>
      <p className="font-light mt-4 mb-8 text-gray-300 sm:text-desc1 2xl:text-desc2">
        Feel free to reach out through my socials. I&apos;d love to talk!{" "}
        <span role="img" aria-label="HandShake">
          🤝
        </span>
      </p>
    </>
  );
}
