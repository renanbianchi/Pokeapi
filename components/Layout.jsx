import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Oi Jean, tô no React</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )
}
