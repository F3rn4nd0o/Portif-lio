import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { Container } from "../styles/pages/app";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Container>
  )
}

