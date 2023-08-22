import '@/styles/globals.scss';
import initFirebaseAnalytic from '@/lib/firebase/initFirebaseAnalytic';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    initFirebaseAnalytic();
  }
  return <Component {...pageProps} />
}
