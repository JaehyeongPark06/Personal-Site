import { NavigationItem } from './navigationItem'

export const navItems = [
  {
    href: '/',
    title: 'Home'
  },
  {
    href: '/about',
    title: 'About'
  },
  {
    href: '/projects',
    title: 'Projects'
  },
  {
    href: '/blog',
    title: 'Blog'
  }
]

export function Header(): JSX.Element {
  return (
    <>
      <div className="flex justify-between top-0 left-0">
        {navItems.map(({ href, title }) => (
          <NavigationItem href={href} title={title} key={href} />
        ))}
      </div>
    </>
  )
}
