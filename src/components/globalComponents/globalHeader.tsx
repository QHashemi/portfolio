'use client';
import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import logo from '@assets/images/logo.png';
import styles from './style.module.scss';
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";
export default function GlobalHeader() {
const pathname = usePathname();
console.log(pathname)
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Image src={logo} alt="Logo" width={90} height={40} />
        <h3>Qasem Hashemi</h3>
      </div>
      <nav className={styles.right}>
        <Link href={"/"} className={pathname === "/" ?styles.active:""}>Home</Link>
        <Link href={"/projects"}  className={pathname === "/projects/" ? styles.active:""}>Projects</Link>
        <Link href={"/about"}  className={pathname === "/about/" ? styles.active:""}>About</Link>
        <Link href={"/contact"}  className={pathname === "/contact/" ? styles.active:""}>Contact</Link>
        <div><FaSearch size={16} /></div>
      </nav>
    </header>
  );
}
