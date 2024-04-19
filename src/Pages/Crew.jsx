import React from 'react';
import { useState } from 'react';
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { useFetchData } from '../Data/FetchData';


const Crew = () => {

  const {loading , crew} = useFetchData()
  const [crewMemberName, setCrewMemberName] = useState('Mark Shuttleworth');
  console.log(crew)
  const showCrewMember = crew ? crew.filter((member) => member.name === crewMemberName) : [{
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    }]
  const GetCrewMemberName = (memberName) => {
    setCrewMemberName(memberName);
  };

   if(loading){
    return  <article className="w-screen min-h-screen bg-[url('../src/assets/crew/background-crew-mobile.jpg')] sm:bg-[url('../src/assets/crew/background-crew-tablet.jpg')] md:bg-[url('../src/assets/crew/background-crew-desktop.jpg')] bg-origin-content bg-center bg-cover">

      <section className="page-content min-h-screen pt-40 px-4 text-white pb-28">
      <div className="loader"></div>
      </section>
    </article>
  }

    const { name, role, bio , img } = showCrewMember[0];
  return (
    <article className="w-screen min-h-screen bg-[url('../src/assets/crew/background-crew-mobile.jpg')] sm:bg-[url('../src/assets/crew/background-crew-tablet.jpg')] md:bg-[url('../src/assets/crew/background-crew-desktop.jpg')] bg-origin-content bg-center bg-cover">
      <section className="page-content min-h-fit pt-40 px-8 text-white">
        <header className='title tracking-widest font-semibold text-xl md:text-2xl'><span className='text-gray-500'>02</span> MEET YOUR CREW</header>

        <section className="crew  flex flex-col items-center justify-center sm:flex-col-reverse sm:items-center sm:justify-center lg:flex-row-reverse lg:items-center lg:justify-center">
          <img src={img} className='w-[20rem] lg:w-[30rem] mt-12 mx-auto h-full object-contain' alt={`image of ${name}`} />
          <div className="horizontal-line mx-auto w-[70vw] sm:hidden h-[1px] bg-gray-500 mb-8"></div>

          <div className="btn-box mx-auto w-fit mt-8 mb-8 lg:mt-28 lg:ml-12 lg:absolute lg:bottom-12 lg:left-8">
            {crew.map((member, index) => {
              return <button key={index} onClick={() => GetCrewMemberName(member.name)} className={'inline hover:bg-gray-600 rounded-[50%] text-white w-4 h-4 m-4'}> {crewMemberName === member.name ? <FaCircle /> : <FaRegCircle />}</button>;
            })}
          </div>

          <div className="crew-details py-4 flex flex-col items-center justify-center sm:w-[30rem] mb-12  text-center sm:flex-col sm:items-center sm:justify-center lg:mb-30">
            <p className='member-role uppercase text-base md:text-xl lg:text-lg tracking-widest'>{role}</p>
            <p className='member-name mt-2 mb-6 tracking-widest text-[2rem] md:text-[2.5rem] '>{name}</p>
            <p className='member-bio leading-8 tracking-wider text-xl'>{bio}</p>
          </div>
        </section>
      </section>
    </article>
  );
};

export default Crew;
