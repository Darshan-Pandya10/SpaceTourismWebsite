import React from 'react'
import { useState , useEffect } from 'react'
import {technology} from '../technologyDb'
import tech1landscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import tech2landscape from '../assets/technology/image-spaceport-landscape.jpg'
import tech3landscape from '../assets/technology/image-space-capsule-landscape.jpg'

import tech1portrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import tech2portrait from '../assets/technology/image-spaceport-portrait.jpg'
import tech3portrait from '../assets/technology/image-space-capsule-portrait.jpg'

const Technology = () => {

const [width, setWidth] = useState(window.innerWidth);

  
 const checkWidth = () => {
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize)
      
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // Empty dependency array to run effect only once after mount

    // No need to return anything from this function
  };

checkWidth()


  const [technologyName , setTechnologyName] = useState('Launch vehicle')
  const showTechnology = technology.filter((tech) => tech.name === technologyName)
  const {name , description } = showTechnology[0]


const showImage =
  (technologyName === 'Launch vehicle' && width > 768) ? tech1portrait :
  (technologyName === 'Spaceport' && width > 768) ? tech2portrait :
  (technologyName === 'Space capsule' && width > 768) ? tech3portrait :
  (width > 768) ? tech1landscape :
  (width <= 768 && technologyName === 'Launch vehicle') ? tech1landscape :
  (width <= 768 && technologyName === 'Spaceport') ? tech2landscape :
  (width <= 768 && technologyName === 'Space capsule') ? tech3landscape :
  tech1landscape;

  
  
  const GetTechnologyName = (technologyName) => {
    setTechnologyName(technologyName)

  }

  console.log(showImage)


  return (
      <main className="w-screen min-h-screen bg-[url('../src/assets/technology/background-technology-mobile.jpg')] sm:bg-[url('../src/assets/technology/background-technology-tablet.jpg')] md:bg-[url('../src/assets/technology/background-technology-desktop.jpg')] bg-cover bg-origin-content bg-center ">


        <div className="page-content min-h-screen pt-40 text-white">
          
        <div className="technology lg:py-12 lg:pb-28 flex flex-col items-center justify-center lg:flex-row-reverse lg: lg:items-center lg:justify-between">
          <img src={showImage} alt="" />


          <div className='flex flex-col items-center justify-center lg:flex-row lg:item-center lg:justify-center'>

          
           <div className="btn-box mx-auto w-fit mt-8 mb-8 flex items-center justify-center lg:flex-col lg:item-center lg:justify-center lg:mx-12">
                 {technology.map((tech , index) => {
                 return <button key={index} onClick={() => GetTechnologyName(tech.name)} 
                 className={`inline w-16 h-16 rounded-[50%] font-semibold ${technologyName === tech.name ? 'text-black bg-white' : 'bg-transparent text-white border-2 border-solid border-white'} m-4`}> 
                   
                   {index+1}
                 </button>
               })}
          </div>
          <div className="technology-details p-4 sm:w-[35rem] mx-auto  mb-12 lg:text-left  text-center lg:mb-30">
             
            <p className='static-text uppercase text-base md:text-xl lg:text-lg tracking-widest'>The Termonology...</p>
            <p className='tech-name mt-0 mb-2 tracking-widest text-[2rem] md:text-[2.5rem] '>{name}</p>
            <p className='tech-description leading-8 tracking-wider text-xl'>{description}</p>
              
           </div>  
           </div>



        </div>
        </div>
    </main>
  )
}

export default Technology
