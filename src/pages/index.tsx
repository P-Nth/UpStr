import * as React from "react"
import type { HeadFC } from "gatsby"

const IndexPage = () => {
  return (
      <main>
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
