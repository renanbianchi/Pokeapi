import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
          rel="stylesheet"
        />
        <title>Oi Jean, isso é o Next</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )
}
