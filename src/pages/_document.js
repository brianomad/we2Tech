import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
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
