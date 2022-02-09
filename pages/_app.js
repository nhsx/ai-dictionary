import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { prefix } from 'lib/prefix'

import 'styles/index.css'
import { NextSeo } from 'next-seo'

export default function MyApp({ Component, pageProps }) {
   return (
      <>
         <NextSeo
            title="AI Dictionary | NHS AI Lab"
            description="A simple dictionary of common AI terms with a health and care context"
            openGraph={{
               url: 'https://nhsx.github.io/ai-dictionary/',
               title: 'AI Dictionary | NHS AI Lab',
               description: 'A simple dictionary of common AI terms with a health and care context',
               images: [
                  {
                     url: 'https://nhsx.github.io/ai-dictionary/social-cover.png',
                     width: 1200,
                     height: 630,
                     alt: 'AI Dictionary Social Cover',
                     type: 'image/png',
                  }
               ],
            }}
            twitter={{
               handle: '@NHSuk',
               site: '@NHSuk',
               cardType: 'summary_large_image',
            }}
         />
         <Head>
            <link rel="icon" href={`${prefix}/favicon.ico`} />
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