import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import Hero from '../components/Hero'
const Appointment = () => {
  return (
    <div>
       <div>
        <Hero title={"Schedule Your Appointment |ZeeCare Medical Instituent"}
            imageUrl={"/signin.png"}
        />
        <AppointmentForm/>
        </div>
        </div>
    
  )
}

export default Appointment