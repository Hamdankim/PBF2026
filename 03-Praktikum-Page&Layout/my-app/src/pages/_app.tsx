import Navbar from '@/components/layout/Navbar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Appshell from '@/components/layout/Appshell';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Appshell>
      <Component {...pageProps} />
    </Appshell>
  );
}
