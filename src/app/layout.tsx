"use client"
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from "@mantine/notifications";


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {


  return (

    <html lang="en" data-lt-installed="true" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body >
        <MantineProvider
          withGlobalClasses
          withCssVariables
          theme={{ /** your theme here */ }}
        >
          <Notifications />
          {children}

        </MantineProvider>

      </body>
    </html>

  );
}
