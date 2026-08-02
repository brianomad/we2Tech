import Document, { Html, Head, Main, NextScript } from 'next/document';

function detectHtmlLang(asPath) {
  const p = asPath ? asPath.split('?')[0] : '';
  if (p.startsWith('/zh-cn')) return 'zh-Hans-CN';
  if (p.startsWith('/zh')) return 'zh-Hant-HK';
  return 'en-HK';
}

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const asPath = ctx.req ? ctx.req.url : '';
    return { ...initialProps, htmlLang: detectHtmlLang(asPath) };
  }

  render() {
    return (
      <Html lang={this.props.htmlLang || 'en-HK'}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <meta name="theme-color" content="#008B8B" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
