import React, { FC } from "react"
import Button from "../components/Buttons/Button"
import { getHomePage } from "../utils/api"

interface TestPageProps {
  homePage: any
}

const TestPage: FC<TestPageProps> = ({ homePage }) => {
  const { buttonType, disabled, variant, size, buttonText } = homePage.Button
  return (
    <div>
      <Button
        size={size}
        type={buttonType}
        disabled={disabled}
        variant={variant}
        handleClick={(event: any) => console.log(event.target)}
      >
        {buttonText}
      </Button>
    </div>
  )
}

export async function getStaticProps() {
  const homePage = await getHomePage()
  return { props: { homePage } }
}

export default TestPage
