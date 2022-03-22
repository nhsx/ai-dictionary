import { RecoilRoot } from 'recoil'
import { NextSeo } from 'next-seo'

import 'styles/index.css'

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
         <RecoilRoot>
            <div className="antialiased">
               <Component {...pageProps} />
            </div>
         </RecoilRoot>
      </>
   )
}