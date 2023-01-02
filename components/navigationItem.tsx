import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";

export interface NavigationItemProps {
  href: string;
  title: string;
}

const NavigationItem = ({ href, title }: NavigationItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? "sm:font-semibold 1.5xl:font-bold text-gray-300"
            : "font-normal text-gray-100",
          "tracking-normal inline-block sm:text-lg mdl:text-2xl my-8"
        )}
      >
        {title}
      </a>
    </Link>
  );
};

export { NavigationItem };
