'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import logo from '@assets/images/logo.png';
import styles from './style.module.scss';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Burger } from '@mantine/core';
import Drawer from './Drawer';
import { FaHome, FaProjectDiagram, FaInfoCircle, FaEnvelope } from "react-icons/fa";


export default function GlobalHeader() {
  const pathname = usePathname()?.replace(/\/$/, ""); // normalize


  const [opened, setOpened] = useState(false);
  const open_drawer = () => setOpened(true);
  const close_drawer = () => setOpened(false);

  return (
    <header className={styles.header}>
      <Drawer
        title="Menu"
        opened={opened}
        onClose={close_drawer}
        content={
          <div className={styles.burger_menu_content}>
            <div className={styles.menu_item}>
              <Link href="/" onClick={close_drawer}>
                <FaHome className={styles.icon} />
                Home
              </Link>
            </div>
            <div className={styles.menu_item}>
              <Link href="/projects" onClick={close_drawer}>
                <FaProjectDiagram className={styles.icon} />
                Projects
              </Link>
            </div>
            <div className={styles.menu_item}>
              <Link href="/about" onClick={close_drawer}>
                <FaInfoCircle className={styles.icon} />
                About
              </Link>
            </div>
            <div className={styles.menu_item}>
              <Link href="/contact" onClick={close_drawer}>
                <FaEnvelope className={styles.icon} />
                Contact
              </Link>
            </div>
          </div>
        }
      />


      <div className={styles.right}>
        <Box p="sm">
          <Burger
            opened={opened}
            onClick={open_drawer}
            color="white"
            aria-label="Toggle navigation"
          />
        </Box>
        <nav className={styles.menu}>
          <Link href="/" className={pathname === "" ? styles.active : ""}>Home</Link>
          <Link href="/projects" className={pathname === "/projects" ? styles.active : ""}>Projects</Link>
          <Link href="/about" className={pathname === "/about" ? styles.active : ""}>About</Link>
          <Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>Contact</Link>
          <div><FaSearch size={16} /></div>
        </nav>
      </div>


      <div className={styles.left}>
        <Image src={logo} alt="Logo" width={90} height={40} />
        <h3>Qasem Hashemi</h3>
      </div>

    </header>
  );
}
