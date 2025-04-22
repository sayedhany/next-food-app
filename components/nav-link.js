"use client"
import React from 'react'
import Link from 'next/link'
import styles from './nav-link.module.css'
import { usePathname } from 'next/navigation';
function NavLink({href, children}) {
  const url = usePathname();

  return (
    <Link href={href} className={url.startsWith(href) ? styles.active:undefined}>
      {children}
    </Link>

  )
}

export default NavLink
