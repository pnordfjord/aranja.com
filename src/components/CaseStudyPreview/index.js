import React, { Component } from 'react'
import classNames from 'classnames'
import { H1, Body2 } from '../../typography'
import Section from '../Section'
import Parallax from '../Parallax'
import './styles.css'

class CaseStudyPreview extends Component {
  render() {
    const { title, description, slug, img, alignment, url } = this.props
    return (
      <Section top="medium" bottom="medium">
        <Parallax>
          <a href={url} className={classNames('CaseStudyPreview', alignment === 'right' && 'is-alignedRight')}>
            <div className="CaseStudyPreview-content">
              <div className="CaseStudyPreview-title">
              <H1>
                {title}
              </H1>
              </div>
              <div className="CaseStudyPreview-description">
                <Body2>{description}</Body2>
              </div>
            </div>
            <div className="CaseStudyPreview-background" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="CaseStudyPreview-parallaxTitle">
              {slug}
            </div>
          </a>
        </Parallax>
      </Section>
    )
  }
}

export default CaseStudyPreview