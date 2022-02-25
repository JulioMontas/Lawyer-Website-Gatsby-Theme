import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import * as praticeAreasStyles from "../../components/praticeAreasList.module.css"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

const theme = {
  colorsBG: {
    primary: `#1d3851`,
    secondary: `#FFF`,
    test: `green`,
  },
  colorsText: {
    primary: `#333`,
    secondary: `#FFF`,
  },
}

const BlogPage = ({data}) => (
  <Layout>
    <Seo title="Blog" />
    <GlobalHero
      title= "Blog"
      summary= "Etiam hendrerit ipsum at enim fermentum."
    />
    <div style={{background: theme.colorsBG.secondary}}>
    <div className="container">
      <div
        className={praticeAreasStyles.wrapper}
        style={{padding:`6rem 1rem 6rem`}}
      >
      {data.allDatoCmsPost.nodes.map(data => (
        <Link
          to={'/blog/' + data.slug}
          style={{color: theme.colorsText.primary}}
        >
          <h3>
            {data.title}
          </h3>
        </Link>
      ))}
      </div>
    </div>
    </div>
    <GlobalContact />
  </Layout>
)

export const query = graphql`{
    allDatoCmsPost {
      nodes {
        id
        slug
        title
        excerpt
      }
    }
  }
`

export default BlogPage
