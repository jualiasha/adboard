import React, { FC } from "react"
import Head from "next/head"
import Link from "next/link"
import { useSelector } from "react-redux"
import { AppState } from "../../store/store"
import DoubleFeedLayout from "../../components/DoubleFeedLayout/DoubleFeedLayout"
import CategoryMenu from "../../components/CategoryMenu/CategoryMenu"
import Icon from "../../components/Icon/Icon"
import LoginForm from "../../components/LoginForm/LoginForm"
import { getLoginPage } from "../../utils/api"
import { ILoginPage } from "../../@types"

interface ILoginPageProps {
  loginPage: ILoginPage
}

const LoginPage: FC = () => {
  const ads = useSelector((state: AppState) => state.ads)

  return (
    <>
      <Head>
        <title>Super Awesome Ad Board</title>
        <meta
          name="description"
          content="Categorized and easy to use adBoard with different options"
        />
      </Head>
      <div className="homePage">
        <div className="homePage__categoryheading">
          <h2>Login</h2>
          <Link href="/filter">
            <a className="buttonlink">
              Filter <Icon icon="arrow" variant="filterIcon" />
            </a>
          </Link>
        </div>
        <LoginForm />
      </div>
    </>
  )
}

export default LoginPage

export async function getStaticProps({ params }) {
  const loginPage: any = await getLoginPage()

  return { props: { loginPage } }
}
