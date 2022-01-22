import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, winfow.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <p>Wow, Next.js is delightful. I love the file based routing with Link component rather than a routing library. I love that image optimization, code splitting, pre-fetching are all built in. Static site generation is FAST! As much as I thought I loved svelteKit, nex.js is much more stable, documented, and feature-rich. I am ecstatic to make my personal site with this tastefully opinionated framework.</p>
    </Layout>
  )
}