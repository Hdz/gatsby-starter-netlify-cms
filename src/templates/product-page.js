import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import boutiqueFCSImg1 from "../../static/img/boutiquefcs-1.png";
import boutiqueFCSImg2 from "../../static/img/boutiquefcs-2.png";


export const ProductPageTemplate = ({ image, title }) => (
  <div className="content">
    <div className="full-width-image-container margin-top-0">
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 #000, -0.5rem 0 0 #000",
          backgroundColor: "#000",
          color: "white",
          padding: "1rem",
        }}
      >
        La boutique du FCS
      </h2>
    </div>
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "-1%",
          marginBottom: "2%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "Center" }}>
          <a
            href="https://www.helloasso.com/associations/futsal-club-suceen/evenements/boutique-club"
            style={{ display: "flex", justifyContent: "Center" }}
          >
            <img
              src={boutiqueFCSImg1}
              alt="Boutique 1"
              style={{ width: "70%" }}
            />
          </a>
        </div>

        <div style={{ display: "flex", justifyContent: "Center" }}>
          <a
            href="https://www.helloasso.com/associations/futsal-club-suceen/evenements/boutique-club"
            style={{ display: "flex", justifyContent: "Center" }}
          >
            <img
              src={boutiqueFCSImg2}
              alt="Boutique 2"
              style={{ width: "70%", height: "100%" }}
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
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
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
