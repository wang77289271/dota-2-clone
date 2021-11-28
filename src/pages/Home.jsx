import React from 'react'
import HomepageHeader from '../components/HomepageHeader'
import HomepageNews from '../components/HomepageNews'
import NavbarMain from '../components/NavbarMain'
import HomepageBattleSection from '../components/HomepageBattleSection'
import HomepageChooseSection from '../components/HomepageChooseSection'
import HomeProCircuitSection from '../components/HomeProCircuitSection'
import HomeJoinBattleSection from '../components/HomeJoinBattleSection'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <NavbarMain />
      <HomepageHeader />
      <HomepageNews />
      <HomepageBattleSection />
      <HomepageChooseSection />
      <HomeProCircuitSection />
      <HomeJoinBattleSection />
      <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div`
  ${mobile({ width: '100%', overflow: 'hidden' })}
`
