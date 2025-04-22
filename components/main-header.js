import Link from 'next/link'
import React from 'react';
import styles from "./main-header.module.css";
import logoImg from '@/assets/logo.png';
import Image from 'next/image';
import MainHeaderBackground from '@/components/main-header-background';
import NavLink from './nav-link';

function MainHeader() {
  return (
    <>
    <MainHeaderBackground/>
    <header  className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image priority src={logoImg} alt="a plaie with photo" />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
          <NavLink href='/meals'>
            Browse Meals
          </NavLink>
          </li>
          <li>
          <NavLink href='/community'>
            Foodies Community
          </NavLink>
            {/* <Link href="/community" className={url.startsWith("/community") ? styles.active:undefined}>Foodies Community</Link> */}
          </li>
        </ul>
        </nav>
    </header>
    </>
  )
}

export default MainHeader
