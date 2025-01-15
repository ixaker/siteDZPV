import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { getDefaultLanguage } from '@/context/withStaticPathsAndProps';

class MyDocument extends Document<{ lang: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    const lang = getDefaultLanguage(ctx.query.lang as string | undefined);

    return { ...initialProps, lang };
  }

  render() {
    const { lang } = this.props;

    return (
      <Html lang={lang}>
        <Head>
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e31837" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
          <meta property="og:type" content="website" />

          <meta
            name="description"
            content="Для зв'язку з нами, звертайтесь за номером ☎️ +380567214558. Або на електронну адресу 📧: AK.Koshubskiy@gmail.com. Будемо раді співпраці!"
          />

          <meta
            property="og:title"
            content="Дніпропетровський Завод Прокатних Валків | Dnipropetrovsk Rolling Rolls Plant"
          />
          <meta
            property="og:description"
            content="Дніпропетровський завод прокатних валків» (ДЗПВ) - лідер виробник прокатних валків!  Для зв'язку з нами, звертайтесь за номером ☎️ +380567214558. Або на електронну адресу 📧: AK.Koshubskiy@gmail.com. Будемо раді співпраці!"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dzpv.dp.ua/" />
          <meta property="og:image" content="/assets/gallery-photo7f.webp" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <link rel="canonical" href="https://dzpv.dp.ua/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
