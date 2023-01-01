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
            ? "font-semibold text-gray-300"
            : "font-normal text-gray-100",
          "tracking-normal inline-block sm:text-lg mdl:text-2xl my-8 hover:underline"
        )}
      >
        {title}
      </a>
    </Link>
  );
};

export { NavigationItem };
