import React from 'react'
import { crew } from '../crewDb'
import { useState } from 'react'
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import crewMember1 from '../assets/crew/image-douglas-hurley.png'
import crewMember2 from '../assets/crew/image-mark-shuttleworth.png'
import crewMember3 from '../assets/crew/image-victor-glover.png'
import crewMember4 from '../assets/crew/image-anousheh-ansari.png'




const Crew = () => {

   const [crewMemberName , setCrewMemberName] = useState('Mark Shuttleworth')
  const showCrewMember = crew.filter((member) => member.name === crewMemberName)
  const {name , role , bio} = showCrewMember[0]
  // console.log(showCrewMember)
  const showImage = (crewMemberName === 'Douglas Hurley' && crewMember1) || ( crewMemberName === 'Mark Shuttleworth' && crewMember2 ) ||  ( crewMemberName === 'Victor Glover' && crewMember3 ) || ( crewMemberName === 'Anousheh Ansari' && crewMember4 ) 
  const GetCrewMemberName = (memberName) => {
    // console.log(memberName)
    setCrewMemberName(memberName)
  }


  return (
     <main className="w-screen min-h-screen bg-[url('../src/assets/crew/background-crew-mobile.jpg')] sm:bg-[url('../src/assets/crew/background-crew-tablet.jpg')] md:bg-[url('../src/assets/crew/background-crew-desktop.jpg')] bg-cover">
        <div className="page-content min-h-fit pt-40 px-8 text-white ">
        <header className='title tracking-widest font-semibold text-xl md:text-2xl'><span className='text-gray-500'>02</span> MEET YOUR CREW</header>



        <div className="crew  flex flex-col items-center justify-center sm:flex-col-reverse sm:items-center sm:justify-center lg:flex-row-reverse lg:items-center lg:justify-center">
         
          <img src={showImage} className='w-[20rem] lg:w-[30rem] mt-12 mx-auto h-full object-contain' alt={`image of ${name}`} />
          <div className="horizontal-line mx-auto w-[70vw] sm:hidden h-[1px] bg-gray-500 mb-8"></div>


          <div className="btn-box mx-auto w-fit mt-8 mb-8 lg:mt-28 lg:ml-12 lg:absolute lg:bottom-12 lg:left-8">
                 {crew.map((member , index) => {
                 return <button key={index} onClick={() => GetCrewMemberName(member.name)} 
                 className={'inline text-white p-2 py-4 mx-2'}> 
                   {crewMemberName === member.name ?  <FaCircle /> : <FaRegCircle />}
                 </button>
               })}
          </div>  

          <div className="crew-details py-4 flex flex-col items-center justify-center sm:w-[30rem] mb-12  text-center sm:flex-col sm:items-center sm:justify-center lg:mb-30">
             
            <p className='member-role uppercase text-base md:text-xl lg:text-lg tracking-widest'>{role}</p>
            <p className='member-name mt-2 mb-6 tracking-widest text-[2rem] md:text-[2.5rem] '>{name}</p>
            <p className='member-bio leading-8 tracking-wider text-xl'>{bio}</p>
              
           </div> 
      
            



        </div>


            
        </div>
    </main>
  )
}

export default Crew





         
