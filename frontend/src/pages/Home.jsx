import React from 'react'
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import MessageForm from '../components/MessageForm';
import Department from '../components/Department';
const Home = () => {
  return (
    <>
    <Hero title={"Welcome to the Zeecare medical Instituent |Trusted Medical HeathCare instituents"} 
    imageUrl={" hero.png"}/>
    <Biography imageUrl={"./about.png"}/>
    <Department/>
    <MessageForm/>
    </>
  )
}

export default Home