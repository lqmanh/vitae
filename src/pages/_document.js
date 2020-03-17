import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type='module'
            src='https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js'
          />
          <script
            noModule=''
            src='https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js'
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
