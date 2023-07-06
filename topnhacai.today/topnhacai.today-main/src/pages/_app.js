import '../styles/globals.css'
import '../styles/styles.css';
import './../components/Loading/style.css';
// import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-16QBW1E4BJ"></Script>
      <Script id="script-google-analytics" strategy="lazyOnload">
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-16QBW1E4BJ');
            `
        }
      </Script> */}
      {/* <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js" async > </script> */}
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
