import * as React from 'react';
import Head from 'next/head';
import {withRouter, Router} from 'next/router';

export interface SeoProps {
  title: string;
  favicon?: '/favicon.ico';
  canonical?: 'https://domscript.pro/';
  description?: string;
  image?: string;
  // jsonld?: JsonLDType | Array<JsonLDType>;
  children?: React.ReactNode;
  isHomePage: boolean;
  searchOrder?: number;
}

export const Seo = withRouter(
  ({
    title,
    favicon = '/favicon.ico',
    canonical = 'https://domscript.pro/',
    description = 'Domscript.pro main site',
    image = '/images/og-home.png',
    router,
    children,
    isHomePage,
    searchOrder,
  }: SeoProps & {router: Router}) => {
    const pageTitle = isHomePage ? 'Domscript.pro' : title + ' – Domscript.pro';
    // Twitter's meta parser is not very good.
    const twitterTitle = pageTitle.replace(/[<>]/g, '');
    return (
      <Head>
        {/* DEFAULT */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {title != null && <title key="title">{pageTitle}</title>}
        <link rel="canonical" href={canonical}></link>
        <link rel="icon" type="image/x-icon" href={favicon} />
        <link rel="apple-touch-icon" href={favicon} />

        {description != null && (
          <meta name="description" key="description" content={description} />
        )}
        <meta property="fb:app_id" content="606893941325399" />
        {/* OPEN GRAPH */}
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:url"
          key="og:url"
          content={`https://domscript.pro${router.asPath.split(/[\?\#]/)[0]}`}
        />
        {title != null && (
          <meta property="og:title" content={pageTitle} key="og:title" />
        )}
        {description != null && (
          <meta
            property="og:description"
            key="og:description"
            content={description}
          />
        )}
        {/* <meta
          property="og:image"
          key="og:image"
          content={`https://domscript.pro${image}`}
        /> */}
        <meta
          property="og:image"
          content="data:image/png;base64,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"
        />
        <meta property="og:image:type" content="image/png" />

        {/* TWITTER */}
        <meta
          name="twitter:card"
          key="twitter:card"
          content="summary_large_image"
        />
        <meta name="twitter:site" key="twitter:site" content="@domscript" />
        <meta
          name="twitter:creator"
          key="twitter:creator"
          content="@domscript"
        />
        {title != null && (
          <meta
            name="twitter:title"
            key="twitter:title"
            content={twitterTitle}
          />
        )}
        {description != null && (
          <meta
            name="twitter:description"
            key="twitter:description"
            content={description}
          />
        )}
        <meta
          name="twitter:image"
          key="twitter:image"
          content={`https://domscript.pro${image}`}
        />
        <meta
          name="google-site-verification"
          content="aecsMu7cqmu3IxlzMSCbs2HeyfF-IADqDZyJKBrpYWw"
        />
        {searchOrder != null && (
          <meta name="algolia-search-order" content={'' + searchOrder} />
        )}
        <link
          rel="preload"
          href="/fonts/Source-Code-Pro-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://react.dev/fonts/Optimistic_Display_W_Md.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://react.dev/fonts/Optimistic_Display_W_SBd.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://react.dev/fonts/Optimistic_Display_W_Bd.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://react.dev/fonts/Optimistic_Text_W_Md.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://react.dev/fonts/Optimistic_Text_W_Bd.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://react.dev/fonts/Optimistic_Text_W_Rg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://react.dev/fonts/Optimistic_Text_W_It.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {children}
      </Head>
    );
  }
);
