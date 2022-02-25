import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalHero from "../components/globalHero"
import GlobalContact from "../components/globalContact"
import { StructuredText } from "react-datocms"

const theme = {
  colorsBG: {
    primary: `#1d3851`,
    secondary: `#FFF`,
  },
  colorsText: {
    primary: `#333`,
    secondary: `#FFF`,
  },
}

const BlogPost = ({ pageContext: { node } }) => (
  <Layout>
    <Seo title="Post" />
    <GlobalHero
      title={node.title}
      summary={node.excerpt}
    />

    <div style={{
      background: theme.colorsBG.secondary,
      color: theme.colorsText.primary,
    }}>
      <div className="container">
        <div>
          <StructuredText data={node.content}/>
        </div>
      </div>
    </div>

    <GlobalContact />
  </Layout>
)

export default BlogPost
