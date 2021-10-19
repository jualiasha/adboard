import App from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
import { getFooterLinks, getLogo, getNavLinks } from "../utils/api"
import { Provider } from "react-redux"
import store from "../components/store/store"
import "../styles/sass/index.scss"


const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout
        logo={pageProps.logo}
        copywrite="Copywrite-2021"
        footerMenuLinks={pageProps.footerLinks}
        navLinks={pageProps.navLinks}
      >
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
          />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi

  const navLinks = await getNavLinks()
  const footerLinks = await getFooterLinks()
  const logo = await getLogo()

  return {
    ...appProps,
    pageProps: { navLinks, footerLinks, logo, path: ctx.pathname },
  }
}

export default MyApp
