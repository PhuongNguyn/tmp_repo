import Head from 'next/head'
import React from 'react'

export default function IndexPost(data) {
    const { htmlToText } = require('html-to-text');
    
    const schemaData = {"@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://topnhacai.today/nha-cai-uy-tin"
    },
    "headline": [data.data.post_title],
    "description": [data.data.post_description?.toString()],
    "image": [
      "https://topnhacai.b-cdn.net/topnhacai.today.png",
      ""
    ],  
    "author": {
      "@type": "Organization",
      "name": "Top nhà cái",
      "url": "https://topnhacai.today"
    },  
    "publisher": {
      "@type": "Organization",
      "name": "Top nhà cái",
      "logo": {
        "@type": "ImageObject",
        "url": "https://topnhacai.b-cdn.net/topnhacai.today.png"
      }
    },
    "datePublished":[data.data.createdAt],
    "dateModified": [data.data.updatedAt]
  };
  
  return (
    <div>
        <Head>
            <title>{data.data.post_title}</title>
            <meta name="description" content={ htmlToText(data.data.post_description?.toString(), {wordwrap: 200}) }/>
            <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href={`${process.env.url_home}/${data.data.post_slug}`} />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
            <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
            <meta property="og:type" content="article"></meta>
            <meta property="og:title" content={data.data.post_title}></meta>
            <meta property="og:description" content={ htmlToText(data.data.post_description?.toString(), {wordwrap: 200}) }></meta>
            <meta property="og:url" content={`${process.env.url_home}/${data.data.post_slug}`}></meta>
            <meta property="og:site_name" content="TOPNHACAI - Top Nhà Cái Uy Tín Nhất Hiện Nay"></meta>
            <meta property='keywords' content={htmlToText(data.data?.post_keyfocus?.toString())}></meta>
            <script type="application/ld+json"     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}>
           </script>
        </Head>
    </div>
  )
}
