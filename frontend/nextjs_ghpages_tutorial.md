# Next.js + GitHub Pages Deployment Tutorial

This tutorial explains how to deploy a **Next.js 15+** app as a static site to GitHub Pages, including support for **custom domains**, Mantine, SCSS modules, and proper routing.

---

## 1️⃣ Install dependencies

```bash
npm install --save-dev gh-pages
```

This allows you to deploy your `out/` folder to GitHub Pages.

---

## 2️⃣ Configure `next.config.js`

### Option A: Deploy to GitHub Pages repo URL

If your repo is `username.github.io/myportfolio`:

```js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/myportfolio' : '',
  assetPrefix: isProd ? '/myportfolio/' : '',
};

module.exports = nextConfig;
```

### Option B: Deploy to a custom domain (e.g., `www.qasem-hashemi.com`)

```js
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  output: 'export',
  images: { unoptimized: true },
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;
```

> Use this if you want your site served from the root of a custom domain.

---

## 3️⃣ Update `package.json` scripts

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "predeploy": "npm run build && touch ./out/.nojekyll",
  "deploy": "gh-pages -d out --dotfiles",
  "lint": "next lint",
  "start": "next start"
}
```

- `.nojekyll` prevents GitHub Pages from ignoring `_` folders.
- `gh-pages` pushes the `out/` folder to the `gh-pages` branch.

---

## 4️⃣ Optional: Add CNAME for a custom domain

```bash
echo "www.qasem-hashemi.com" > out/CNAME
```

- Add this domain in **GitHub Pages settings → Custom Domain**.
- Update your DNS to point `www.qasem-hashemi.com` → `username.github.io`.

---

## 5️⃣ Deploy

Clean old builds and deploy:

```bash
rm -rf out
npm run deploy
```

- Site URL:
  - GitHub Pages: `https://username.github.io/myportfolio/`
  - Custom domain: `https://www.qasem-hashemi.com/`

---

## 6️⃣ RootLayout Example with Mantine and CSS

```tsx
"use client"
import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <MantineProvider withGlobalClasses withCssVariables>
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
```

- Import global CSS and Mantine styles.
- Wrap your app in `<MantineProvider>`.
- Include `<Notifications />` if using Mantine notifications.

---

## 7️⃣ GlobalHeader Example with SCSS Modules

```tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import logo from '@assets/images/logo.png';
import styles from './style.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GlobalHeader() {
  const pathname = usePathname()?.replace(/\/$/, '');

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Image src={logo} alt="Logo" width={90} height={40} />
        <h3>Qasem Hashemi</h3>
      </div>
      <nav className={styles.right}>
        <Link href="/" className={pathname === '' ? styles.active : ''}>Home</Link>
        <Link href="/projects" className={pathname === '/projects' ? styles.active : ''}>Projects</Link>
        <Link href="/about" className={pathname === '/about' ? styles.active : ''}>About</Link>
        <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>Contact</Link>
        <div><FaSearch size={16} /></div>
      </nav>
    </header>
  );
}
```

- Use `usePathname()` and normalize trailing slashes for active link highlighting.
- Use `<Link>` to respect `basePath`.
- SCSS modules ensure styles are scoped and static export compatible.

---

## 8️⃣ Notes and Tips

- **CSS / SCSS**: Use relative paths for imports. Avoid absolute `/` paths.
- **Images**: Use `next/image` or put them in `public/`. Next.js handles `basePath` automatically.
- **Links**: Always use Next.js `<Link>` to respect `basePath`.
- **Mantine**: Wrap your components in `<MantineProvider>`.
- **Custom Domain**: Include `CNAME` in `out/` and configure GitHub Pages + DNS.

---

✅ After following these steps, your Next.js site is ready to run as a **fully static site on GitHub Pages** or your **custom domain** with CSS, images, navbar, and Mantine working corr