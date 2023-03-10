export function ProjectText(): JSX.Element {
  return (
    <>
      <h1 className="text-center sm:font-semibold 1.5xl:font-bold text-gray-200 my-2 sm:text-[2rem] xl:text-[2.4rem]">
        Projects
      </h1>
      <p className="sm:hidden lmd:block opacity-70 font-normal text-base text-center text-gray-200 mx-auto">
        {"(Hover for details)"}
      </p>
      <p className="sm:block lmd:hidden opacity-70 font-normal text-base text-center text-gray-200 mx-auto">
        {"(Click For Details)"}
      </p>
    </>
  );
}
