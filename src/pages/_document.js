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
          <link rel="icon" href="/we2Tech.ico" />
          <meta name="theme-color" content="#008B8B" />
          <meta
            name="description"
            content="we2Tech is a Hong Kong-based software development team building mobile apps, websites, UI/UX design and cloud systems — from first idea to launch and beyond."
          />
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
