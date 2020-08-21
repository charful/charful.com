import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Lifestyle for a carbon negative world." />
    <h1>Lifestyle for a carbon negative world.</h1>
    <p>We all want to fight climate change.</p>
    <p>Be <em>charful</em> and let's do that together, everyday.</p>
    {/* <Link to="/blog/">Get onboard</Link> */}
  </Layout>
)

export default IndexPage
