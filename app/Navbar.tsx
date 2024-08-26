'use client'

import classNames from 'classnames';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiFillBug } from 'react-icons/ai';



const Navbar = () => {

	const currentPath=usePathname()
	console.log(currentPath)

	const links = [
		{ label: "Dashboard", href: "/" },
		{ label: "Issues", href: "/issues" },
	 ];
  return (
<nav className='flex space-x-6 border-b mb-5 px-5 py-3'>

	 <Link href="/"><AiFillBug></AiFillBug></Link>
	 <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
           
				className=
				 {classNames({
              "nav-link": true,
              "!text-blue-700 font-medium": link.href === currentPath,
            })}
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