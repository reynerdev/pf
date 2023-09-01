import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zxx">
        <Head>
            {/* <title>Reyner Loza - Software Engineer</title> */}
            {/* <meta property="og:description" content="Skilled Fullstack in Javascript, React, Typescript, NextJS, AWS Serverless. Check out my portfolio to see my latest projects." /> */}
            {/* <meta name="og:locale" content="en_US" /> */}

          {/* <link rel="icon" type="image/png" href="/images/favicon.png"></link> */}
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
