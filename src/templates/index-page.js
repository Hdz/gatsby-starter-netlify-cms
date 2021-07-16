import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import GoogleMaps from '../components/GoogleMaps'
import Layout from '../components/Layout'
import Features from '../components/Features'
import cafecharbonImg from '../../static/img/Cafecharbon.png'
import superuImg from '../../static/img/SuperULogo128.png'

import BlogRoll from '../components/BlogRoll'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/swiper.scss';
import '../components/swiper.modules.sass';

SwiperCore.use([Autoplay]);

export const IndexPageTemplate = ({
  mainpitch,
  description,
  intro,
}) => (
  <div>
      
      <Swiper
      freeMode={true}
      loop={true}
      autoplay={true}
      centeredSlides={true}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <SwiperSlide>          
      <a href="https://www.magasins-u.com/" className="swiper-slide">
              <p class="image is-128x128" className="swiper-slide">
                <img
                  src={cafecharbonImg}
                  alt="Cafe Charbon"
                />
              </p>
            </a>
      </SwiperSlide>
      <SwiperSlide>          
        <a href="https://www.magasins-u.com/" className="swiper-slide">
              <p class="image is-128x128" className="swiper-slide">
                <img
                  src={cafecharbonImg}
                  alt="Cafe Charbon"
                />
              </p>
            </a>
      </SwiperSlide>
      <SwiperSlide>
            <a href="https://www.magasins-u.com/" className="swiper-slide">
              <p class="image is-128x128" className="swiper-slide">
                <img
                  src={superuImg}
                  alt="SuperU"
                />
              </p>
            </a>
      </SwiperSlide>
      <SwiperSlide>
            <a href="https://www.magasins-u.com/">
              <p class="image is-128x128">
                <img
                  src={superuImg}
                  alt="SuperU"
                />
              </p>
            </a>
      </SwiperSlide>    
    </Swiper>

      <div
        style={{
          display: 'flex',
          height: '750px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
    <GoogleMaps />
        

      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'right',
          float: 'right',
          flexDirection: 'column',
        }}
      > Test Adresse</div>

    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <p>{description}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      Voir tous les produits
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Les dernières informations du club.
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Lire
                    </Link>
                  </div>
                  <Features gridItems={intro.blurbs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage



export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        
        mainpitch {
          title
          description
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
          }
          heading
          description
        }
        
      }
    }
  }
`
