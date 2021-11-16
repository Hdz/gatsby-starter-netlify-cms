import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 47.3371233,
    lng: -1.5245373,
  },
  zoom: 10,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMaps = () => (
  <div style={{ height: '100%', width: '200%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: {$GOOGLE_API_KEY} }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
    >
      <AnyReactComponent
        lat={47.3305129}
        lng={-1.5218838}
        text={'FCS'}
      />
          
    </GoogleMapReact>
  </div>
)

export default GoogleMaps
