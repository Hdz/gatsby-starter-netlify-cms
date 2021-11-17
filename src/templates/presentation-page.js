import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import * as styles from'../components/partner.modules.sass'

export const PresentationPageTemplate = ({ 
  title, 
  content, 
  contentComponent,
  mainpitch,
  description,
  intro, 
}) => {
  const PageContent = contentComponent || Content


  return (
    <section className={`${styles.section} ${styles.sectionGradient}`}>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <PageContent className="content" content={mainpitch} />

              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PresentationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
})}

const PresentationPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PresentationPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        description={post.frontmatter.description}
        mainpitch={post.frontmatter.description}
      />
    </Layout>
  )
}

PresentationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PresentationPage

export const presentationPageQuery = graphql`
  query PresentationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
