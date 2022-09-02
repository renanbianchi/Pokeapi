/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
          rel="stylesheet"
        />
        <link
          href="//db.onlinewebfonts.com/c/831e1f4da157d96bc996f8c9f5f1e578?family=Pokemon+GB"
          rel="stylesheet"
          type="text/css"
        />
        <title>Pokemon Api</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )
}
