import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Decarli</title>
      <link rel="icon" href="/favicon.jpg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" rel="stylesheet"/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
