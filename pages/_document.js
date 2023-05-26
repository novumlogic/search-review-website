import { Html, Head, Main, NextScript } from 'next/document';

export default function Document () {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Google Fonts--> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* <!-- Bootstrap icons--> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
      </Head>
      <body className='inner-page add-gc-profile-rating'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
