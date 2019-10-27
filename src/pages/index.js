import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Banner from "../components/banner"

import SEO from "../components/seo"

//scss
import "../styles/styles.scss"
import "normalize.css"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header />
    <Banner />
  </div>
)

export default IndexPage
