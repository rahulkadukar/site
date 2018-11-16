import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PrevIcon from '@material-ui/icons/ArrowBack';
import NextIcon from '@material-ui/icons/ArrowForward';

import 'katex/dist/katex.min.css';

const styles = {
  'flexBox': {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 auto',
    marginTop: '10px',
    maxWidth: '1220px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '10px',
  },

  'heading': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '30px',
  },

  'headingDate': {
    fontSize: '20px'
  },

  'link': {
    textDecoration: 'none',
    marginRight: '10px',
    marginBottom: '40px'
  },

  'linkLeft': {
    textDecoration: 'none',
    marginBottom: '40px'
  },

  'linkRight': {
    textAlign: 'right',
    textDecoration: 'none'
  }
}

const buttonStyles = {
  root: {
    color: '#ff3d00',
    fontFamily: 'Fira Sans',
    fontSize: '20px',
    marginBottom: '40px',
    textDecoration: 'none',
    textTransform: 'none',
  }
};

const MyButton = withStyles(buttonStyles)(Button);

export default ({ data, location, pathContext }) => {
  const post = data.markdownRemark
  const tagArray = post.frontmatter.tags

  return (
      <div>
        <Layout>
          <div>
            <div style={styles.heading}>
              <b>{post.frontmatter.title}</b> &nbsp;
              <span style={styles.headingDate}>{post.frontmatter.date}</span>
            </div>
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
        <div style={styles.flexBox}>
          <div>
          {
            pathContext.prevLink !== 'false' ?
            <Link style={styles.linkLeft} to={pathContext.prevLink}>
              <MyButton color="secondary"><PrevIcon />{pathContext.prev}</MyButton>
            </Link> : ''
          }
          </div>
          <div>
          {
            pathContext.nextLink !== 'false' ?
            <Link style={styles.linkRight} to={pathContext.nextLink}>
              <MyButton color="secondary">{pathContext.next} <NextIcon /></MyButton>
            </Link> : ''
          }
          </div>
        </div>
      </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        tags
        title
      }
    }
  }
`