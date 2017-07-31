import React from 'react'
import { Editable } from 'tux'
import { Body1, Body2, H1, H3 } from '../typography'
import Lines from '../components/Lines'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import LogoRoll from '../components/LogoRoll'
import TeamGrid from '../components/Team/Grid'
import Section from '../components/Section'
import SectionHero from '../components/SectionHero'
import Careers from '../components/Careers'
import teamHeroPhoto from '../components/Team/Aranja00107.jpg'
import teamHeroPhoto2 from '../components/Team/Aranja00557.jpg'
import '../components/Team/styles.css'

const Team = ({ content, team }) => {
  return (
    <Editable model={content}>
      <div className="Team">
        <div className="Container">
          <Lines />
          <Menu />
          <Section>
            <p className="t-chapter">Who we are</p>
            <H3 className="Team-heading t-transparent">A dedicated team of ambitious developers</H3>
            <SectionHero img={teamHeroPhoto} caption="bla" />
            <H3 bottom="medium" center>
              We team up with some great companies
            </H3>
            <LogoRoll />
            <H3 top="medium" bottom="small" center>
              To make engaging products
            </H3>
            <Body1 className="Team-copy" bottom="large">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt laborum, cum laudantium
              dolorem natus ullam! Autem aperiam, eum deserunt quibusdam error molestias obcaecati,
              ea asperiores delectus reiciendis voluptate minima dolore temporibus, veritatis rerum
              quo at? Nesciunt aliquid sit consectetur, odio voluptate iusto! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Sed reprehenderit atque, necessitatibus iste
              mollitia quo corrupti dolorum officia voluptates, quod.
            </Body1>
            <TeamGrid />
            <H3 top="large" bottom="small" center>
              Play hard, work harder.
            </H3>
            <Body1 className="Team-copy" bottom="medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt laborum, cum laudantium
              dolorem natus ullam! Autem aperiam, eum deserunt quibusdam error molestias obcaecati,
              ea asperiores delectus reiciendis voluptate minima dolore temporibus, veritatis rerum
              quo at? Nesciunt aliquid sit consectetur, odio voluptate iusto, yes I said veritatis
              rerum quo at. Boo yah.
            </Body1>
            <SectionHero img={teamHeroPhoto2} caption="bla" />
            <Careers />
          </Section>
        </div>
        <Footer />
      </div>
    </Editable>
  )
}
export default Team