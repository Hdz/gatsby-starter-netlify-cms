import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features-Partner'
import * as styles from'../components/partner.modules.sass'

  export const PartnerPageTemplate = ({
    title,
    intro,
  }) => (
    <div>
    <section className={`${styles.section} ${styles.sectionGradient}`}>
        <div className="container">
          <div className="section">
            <div className="columns">
            </div>
                    <h3 className="has-text-weight-semibold is-size-4">
                      {title}
                    </h3>
                    <br />

                  <Features gridItems={intro.blurbs}/>

          </div>
        </div>
    </section>
    </div>
  )
  
  PartnerPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    intro: PropTypes.shape({
      blurbs: PropTypes.array,
    }),
  }
  
  const PartnerPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
      <Layout>
        <PartnerPageTemplate
          image={frontmatter.image}
          title={frontmatter.title}
          description={frontmatter.description}
          intro={frontmatter.intro}
        />
      </Layout>
    )
  }
  
  PartnerPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
        title: PropTypes.string,

      }),
    }),
  }
  
  export default PartnerPage
  
  
  
  export const pageQuery = graphql`
    query PartnerPageTemplate {
      markdownRemark(frontmatter: { templateKey: { eq: "partner-page" } }) {
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
  
          
          description
          intro {
            blurbs {
              image {
                childImageSharp {
                  fluid(maxWidth: 240, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              text
              link
            }
            heading
            description
          }
          
        }
      }
    }
  `
  