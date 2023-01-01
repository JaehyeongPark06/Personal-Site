import { NavigationItem } from "./navigationItem";

export const navItems = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/posts",
    title: "Posts",
  },
];

export function Header(): JSX.Element {
  return (
    <>
      <div className="flex justify-between top-0 left-0 2xl:my-2">
        {navItems.map(({ href, title }) => (
          <NavigationItem href={href} title={title} key={href} />
        ))}
      </div>
    </>
  );
}
