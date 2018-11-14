import React from "react"
import Layout from "../components/layout"

const styles = {
  'title': {
    fontSize: '30px'
  }
}

export default () => (
  <Layout>
    <p style={styles.title}>About Me</p>
    <p>My name is Rahul Kadukar. </p>
  </Layout>
)
