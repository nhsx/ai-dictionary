import { prefix } from 'lib/prefix'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
   return (
      <Html>
         <Head>
            <link rel="icon" href={`${prefix}/favicon.ico`} />
            <link
               href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"
               rel="stylesheet"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   )
}