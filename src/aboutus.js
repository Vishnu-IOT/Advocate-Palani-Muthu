import React from 'react'
import Abouthero from './components/About Us/abouthero'
import Officeinfo from './components/About Us/officeinfo'
import Servicestd from './components/About Us/servicestd'
import Legalcomplaince from './components/About Us/legalcomplaince'
import Technicalstd from './components/About Us/technicalstd'
import Adminstration from './components/About Us/adminstration'
import './styles/aboutstyles.css'
import Academictimeline from './components/About Us/academictimeline'

function Aboutus() {
  return (
    <div>
      <Abouthero />
      <Servicestd />
      <Academictimeline />
      <Officeinfo />
      <Legalcomplaince />
      <Technicalstd />
      <Adminstration />
    </div>
  )
}

export default Aboutus
