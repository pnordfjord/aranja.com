import React from 'react'
import { Editable } from 'tux'
import Hero from '../../components/Hero'
import Page from '../../components/Page'
import NextUp from '../../components/NextUp'
import ContentSection from '../../components/ContentSection'
import Section from '../../components/Section'

const CaseStudy = ({ content, caseStudy }) => {
  const {
    company,
    heroImage,
    sections = [],
  } = caseStudy.fields
  console.log(sections)
  return (
    <Editable model={content}>
      <Page name="Case study">
        <Hero intro={`Case study: ${company}`} img={heroImage && `${heroImage.fields.file.url}?w=1000`} title="Teamwork is the name of the game" meta/>
        <Section className="CaseStudy-section">
          {sections.map((section, index) => <ContentSection section={section} key={index} />)}
        </Section>
        <NextUp nextPage="Something" url="/" />
      </Page>
    </Editable>
  )
}

export default CaseStudy
