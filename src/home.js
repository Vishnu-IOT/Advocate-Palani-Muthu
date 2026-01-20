import React from 'react'
import Herosection from './components/Home/herosection'
import Practiceareas from './components/Home/practiceareas'
import Experiencesection from './components/Home/experiencesection'
import Testimonialsection from './components/Home/testimonialsection'
import Acheivementsection from './components/Home/acheivementsection'
import Legalsection from './components/Home/legalsection'
// import ScrollReveal from '../src/helpers/animatedList.js'

function Home() {
  // const items = [<Herosection />, <Practiceareas />, <Experiencesection />, <Acheivementsection />, <Testimonialsection />, <Legalsection />];

  return (
    <div className='appy'>
      {/* <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={3}
        blurStrength={4}
      > */}
        <Herosection />
        <Practiceareas />
        <Experiencesection />
        <Acheivementsection />
        <Testimonialsection />
        <Legalsection />
      {/* </ScrollReveal> */}
    </div>
  )
}

export default Home
