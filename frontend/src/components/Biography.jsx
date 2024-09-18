import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className='banner'> 
            <img src={imageUrl} alt="about.png"></img>

        </div>
        <div className='banner'>
            <p>Biography</p>
            <h3>Who we Are</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere cupiditate corporis, fugiat accusamus dolore repellat maxime cum ullam laudantium magni, nihil esse. Itaque modi voluptate obcaecati labore hic aspernatur doloribus, vel eos odit ea consequuntur, exercitationem fuga, soluta laborum est iure voluptatibus cupiditate error quia ratione praesentium aliquid? Porro, voluptatem?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, velit. Maiores quam laudantium temporibus nulla facilis perspiciatis, nisi repellendus atque sapiente voluptatum natus optio dolorum dolore blanditiis sed similique accusantium? Excepturi tempore illum aperiam adipisci?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad cum temporibus dolore.</p>
        </div>
         
    </div>
  )
}

export default Biography