import Head from 'next/head'
import React from 'react'

export default function IndexPage(data) {
    const { htmlToText } = require('html-to-text');
    if(data.data )
    {
      const schemaData ={
    
          "@context": "https://schema.org/", 
          "@type": "BreadcrumbList", 
          "itemListElement": [{
            "@type": "ListItem", 
            "position": 1, 
            "name": "Top Nhà Cái",
            "item": "https://topnhacai.today"  
          },{
            "@type": "ListItem", 
            "position": 2, 
            "name": [data.data.page_title],
            "item": "https://topnhacai.today/"+ data.data.page_category_slug
          }]
      }

      return (
        <div>
            <Head>
            <title>{data.data.page_title}</title>
                  <meta name="description" content={ htmlToText(data.data.page_description?.toString(), {wordwrap: 200}) }/>
                  <link rel="icon" href="/favicon.ico" />
                  <link rel="canonical" href={`${process.env.url_home}/${data.data.page_category_slug}`} />
                  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                  <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
                  <meta property="og:type" content="article"></meta>
                  <meta property="og:title" content={data.data.page_title}></meta>
                  <meta property="og:description" content={ htmlToText(data.data.page_description?.toString(), {wordwrap: 200}) }></meta>
                  <meta property="og:url" content={`${process.env.url_home}/${data.data.page_category_slug}`}></meta>
                  <meta property="og:site_name" content="TOPNHACAI - Top Nhà Cái Uy Tín Nhất Hiện Nay"></meta>
                  <meta name="google-site-verification" content="mXxun001asqq8FdYYw3SefHH6QmoraXpj7al2rTuNt8" />
                  <script type="application/ld+json"     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}>
                  </script>
            </Head>
        </div>
      )
    }



  
  {/* return (
    <div>  
        {data.data ? (
            <Head>
                <title>{data.data.page_title}</title>
                <meta name="description" content={ htmlToText(data.data.page_description?.toString(), {wordwrap: 200}) }/>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
                <meta property="og:type" content="article"></meta>
                <meta property="og:title" content={data.data.page_title}></meta>
                <meta property="og:description" content={ htmlToText(data.data.page_description?.toString(), {wordwrap: 200}) }></meta>
                <meta property="og:url" content={`${process.env.url_home}/${data.data.page_category_slug}`}></meta>
                <meta property="og:site_name" content="TOPNHACAI - Top Nhà Cái Uy Tín Nhất Hiện Nay"></meta>
                <meta name="google-site-verification" content="mXxun001asqq8FdYYw3SefHH6QmoraXpj7al2rTuNt8" />
                <script type="application/ld+json"     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}>
                
                </script>
            </Head>
        ): data.dataTax ?(
            <Head>
                <title>{data.dataTax.tax_name}</title>
                <meta name="description" content={ htmlToText(data.dataTax.tax_description?.toString(), {wordwrap: 200}) }/>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
                <meta property="og:type" content="article"></meta>
                <meta property="og:title" content={data.dataTax.tax_name}></meta>
                <meta property="og:description" content={ htmlToText(data.dataTax.tax_description?.toString(), {wordwrap: 200}) }></meta>
                <meta property="og:url" content={`${process.env.url_home}/${data.dataTax.tax_slug}`}></meta>
                <meta property="og:site_name" content="TOPNHACAI - Top Nhà Cái Uy Tín Nhất Hiện Nay"></meta>
                <meta name="google-site-verification" content="mXxun001asqq8FdYYw3SefHH6QmoraXpj7al2rTuNt8" />
                <script type="application/ld+json"     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}>
                </script>
            </Head>
        ): ''}
    </div>
  ) */}
}
