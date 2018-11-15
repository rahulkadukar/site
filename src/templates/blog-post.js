import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const styles = {
  'link': {
    textDecoration: 'none',
    marginRight: '10px',
    marginBottom: '40px'
  }
}

export default ({ data }) => {
  const post = data.markdownRemark
  const tagArray = post.frontmatter.tags

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <h3>Tags</h3>
        {
          tagArray.map((e, i) => {
            let link = '/tags/' + e.toLowerCase()
            return <Link style={styles.link} to={link} key={i}>{e}</Link>
          })
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        tags
        title
      }
    }
  }
`