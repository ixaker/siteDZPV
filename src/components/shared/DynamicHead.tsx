import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
import { DefaultPage, HomeComponentProps, RollersPageProps } from '@/context/withStaticPathsAndProps';

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
          site_name: 'QPART',
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
            href: `https://site.qpart.com.ua/${lang}/`,
          })),
          { rel: 'alternate', hrefLang: 'x-default', href: 'https://site.qpart.com.ua/' },
          { rel: 'manifest', href: `/manifest_${componentProps.lang}.json` },
        ]}
      />
    </>
  );
};

export default DynamicHead;
