import Head from 'next/head'
import { RecoilRoot } from 'recoil'

import 'styles/index.css'

export default function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>AI Dictionary</title>
            <link rel="icon" href="/favicon.ico" />
            <link
               href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"
               rel="stylesheet"
            />
         </Head>
         <RecoilRoot>
            <div className="antialiased">
               <Component {...pageProps} />
            </div>
         </RecoilRoot>
      </>
   )
}