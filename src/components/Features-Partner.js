import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="">
        <section className="section">
          <article class="">
              <div class="media-content">
                <div class="content">
                <a href={item.link}>
                <figure class="media-left">
                <p className="image is-128x128">
              <PreviewCompatibleImage imageInfo={item} />
              </p>
              </figure>
              <div class="media-content">
                <div class="content">
                    <p>{item.text}</p>
                    </div>
                    </div>
                    </a>
                </div>
              </div>
            </article>


        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      link: PropTypes.string
    })
  ),
}

export default FeatureGrid
