import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
import { DefaultPage, HomeComponentProps, RollersPageProps } from '@/context/withStaticPathsAndProps';
import Script from 'next/script';

const DynamicHead: React.FC<HomeComponentProps | RollersPageProps | DefaultPage> = (componentProps) => {
  const pageData = componentProps.translationsPage.metaData;

  const [fullUrl, setFullUrl] = useState('');
  useEffect(() => {
    setFullUrl(window.location.href);
  }, [fullUrl]);

  return (
    <>
      <NextSeo
        title={pageData.title}
        description={pageData.description}
        canonical={fullUrl}
        openGraph={{
          type: 'website',
          url: fullUrl,
          title: pageData.title,
          description: pageData.description,
          images: [
            {
              url: pageData.srcImg,
              width: 200,
              height: 200,
              alt: 'Image for Open Graph',
            },
          ],
          site_name: 'DZPV',
          locale: componentProps.translations.locale,
        }}
        additionalMetaTags={[
          { name: 'keywords', content: pageData.title },
          { name: 'robots', content: 'index, follow' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        ]}
        additionalLinkTags={[
          { rel: 'canonical', href: fullUrl },
          ...componentProps.supportedLanguages.map((lang) => ({
            rel: 'alternate',
            hrefLang: lang,
            href: `https://www.dzpv.dp.ua/${lang}/`,
          })),
          { rel: 'alternate', hrefLang: 'x-default', href: 'https://www.dzpv.dp.ua/' },
          { rel: 'manifest', href: `/manifest_${componentProps.lang}.json` },
        ]}
      />
      <>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KL0QS6LVRZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KL0QS6LVRZ');
      `}
        </Script>
      </>
    </>
  );
};

export default DynamicHead;
