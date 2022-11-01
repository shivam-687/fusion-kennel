import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>

                <meta name="title" content="Fusion Kennel|Best place to find your furry friend" />
                <meta name="description" content="If you are looking for the best options for bringing a puppy of your preferred breed home, your search ends here! Along with our dog breeding services, we provide dog lovers with some of the healthiest and most adorable puppies." />


                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fusionkennel.interlef.com/" />
                <meta property="og:title" content="Fusion Kennel|Best place to find your furry friend" />
                <meta property="og:description" content="If you are looking for the best options for bringing a puppy of your preferred breed home, your search ends here! Along with our dog breeding services, we provide dog lovers with some of the healthiest and most adorable puppies." />
                <meta property="og:image" content={'/assets/site-image.jpg'} />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://fusionkennel.interlef.com/" />
                <meta property="twitter:title" content="Fusion Kennel|Best place to find your furry friend" />
                <meta property="twitter:description" content="If you are looking for the best options for bringing a puppy of your preferred breed home, your search ends here! Along with our dog breeding services, we provide dog lovers with some of the healthiest and most adorable puppies." />
                <meta property="twitter:image" content={'/assets/site-image.jpg'} />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FF8A00" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Ubuntu:wght@300;500;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}