/* eslint-disable @next/next/no-title-in-document-head */
import { Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <html>
      <Head>
        <title>Firebase Auth Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  );
};

export default MyDocument;
