export function ProjectText(): JSX.Element {
  return (
    <>
      <h1 className="text-center sm:font-semibold 1.5xl:font-bold text-gray-300 sm:mt-2 sm:mb-2 sm:text-[2rem] xl:text-[2.4rem]">
        Projects
      </h1>
      <p className="sm:hidden lmd:block opacity-70 font-normal text-base text-center text-gray-300 sm:mb-2 sm:mx-auto">
        {"(Hover for details)"}
      </p>
      <p className="sm:block lmd:hidden opacity-70 font-normal text-base text-center text-gray-300 sm:mb-2 sm:mx-auto">
        {"(Click For Details)"}
      </p>
    </>
  );
}
