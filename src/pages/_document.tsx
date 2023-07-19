import { Html, Head, Main, NextScript} from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
  return(
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript/>
      </body>
    </Html>
  )
}