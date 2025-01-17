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
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
     <link href="https://fonts.googleapis.com/css2?family=Fasthand&family=Great+Vibes&display=swap" rel="stylesheet"/>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
