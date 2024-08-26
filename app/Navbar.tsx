import Link from 'next/link'
import React from 'react'

const Navbar = () => {

	const links = [
		{ label: "Dashboard", href: "/" },
		{ label: "Issues", href: "/issues/list" },
	 ];
  return (
<nav className='flex space=x-6'>

	 <Link href="/">Logo</Link>
	 <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            // className={classnames({
            //   "nav-link": true,
            //   "!text-zinc-900": link.href === currentPath,
            // })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
</nav>
  )
}

export default Navbar