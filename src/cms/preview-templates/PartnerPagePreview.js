import React from 'react'
import PropTypes from 'prop-types'
import { PartnerPageTemplate } from '../../templates/partner-page'

const PartnerPagePreview = ({ entry, widgetFor }) => (
  <PartnerPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PartnerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PartnerPagePreview
