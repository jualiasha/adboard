import App from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
import { getFooterLinks, getLogo, getNavLinks } from "../utils/api"
import { Provider } from "react-redux"
import store from "../store/store"
import "../styles/sass/index.scss"
import React from "react"
import Navbar from "../components/Navbar"

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Navbar logo={pageProps.logo} navLinks={pageProps.navLinks} />
      <Layout
        logo={pageProps.logo}
        copywrite="Copywrite-2021"
        footerMenuLinks={pageProps.footerLinks}
        navLinks={pageProps.navLinks}
      >
        <Head>
          <title>Add board</title>
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
  const appProps = await App.getInitialProps(ctx)

  const navLinks = await getNavLinks()
  const footerLinks = await getFooterLinks()
  const logo = await getLogo()

  return {
    ...appProps,
    pageProps: { navLinks, footerLinks, logo, path: ctx.pathname },
  }
}

export default MyApp
