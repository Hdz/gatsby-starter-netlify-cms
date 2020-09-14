import React from 'react'
import PropTypes from 'prop-types'
import { GoogleMap, Marker } from "react-google-maps"

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes


export const MyMapComponent = (props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 47.330209, lng: -1.5219381 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 47.330209, lng: -1.5219381 }} />}
  </GoogleMap>

export default Content
