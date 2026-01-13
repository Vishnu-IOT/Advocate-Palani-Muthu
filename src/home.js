import React from 'react'
import Herosection from './components/Home/herosection'
import Practiceareas from './components/Home/practiceareas'
import Experiencesection from './components/Home/experiencesection'
import Testimonialsection from './components/Home/testimonialsection'
import Acheivementsection from './components/Home/acheivementsection'
import Legalsection from './components/Home/legalsection'

function Home() {
  return (
    <div className='appy'>
      <Herosection />
      <Practiceareas />
      <Experiencesection />
      <Acheivementsection />
      <Testimonialsection />
      <Legalsection />
    </div>
  )
}

export default Home
