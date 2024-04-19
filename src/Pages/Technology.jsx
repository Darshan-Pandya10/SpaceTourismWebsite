import React, { useState, useEffect } from 'react';
import { useFetchData } from '../Data/FetchData';

const Technology = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const {loading , technology} = useFetchData()
  console.log(technology)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run effect only once after mount

  const [technologyName, setTechnologyName] = useState('Launch vehicle');

  const GetTechnologyName = (technologyName) => {
    setTechnologyName(technologyName);
  };

    if(loading){
      return <article className="w-screen min-h-screen bg-[url('../src/assets/technology/background-technology-mobile.jpg')] sm:bg-[url('../src/assets/technology/background-technology-tablet.jpg')] md:bg-[url('../src/assets/technology/background-technology-desktop.jpg')] bg-cover bg-origin-content bg-center ">

      <section className="page-content min-h-screen pt-40 px-4 text-white pb-28">
      <div className="loader"></div>
      </section>
    </article>
  }
    const showTechnology = technology ? technology.filter((tech) => tech.name === technologyName) : [{
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    }]
    const { name, description , imgs } = showTechnology[0];

    const showImage =
    (technologyName === 'Launch vehicle' && width > 768) ? imgs[1] :
    (technologyName === 'Spaceport' && width > 768) ? imgs[1] :
    (technologyName === 'Space capsule' && width > 768) ? imgs[1] :
    (width > 768) ? imgs[0] :
    (width <= 768 && technologyName === 'Launch vehicle') ? imgs[0] :
    (width <= 768 && technologyName === 'Spaceport') ? imgs[0] :
    (width <= 768 && technologyName === 'Space capsule') ? imgs[0] :
    imgs[0];


  return (
    <article className="w-screen min-h-screen bg-[url('../src/assets/technology/background-technology-mobile.jpg')] sm:bg-[url('../src/assets/technology/background-technology-tablet.jpg')] md:bg-[url('../src/assets/technology/background-technology-desktop.jpg')] bg-cover bg-origin-content bg-center ">

      <section className="page-content min-h-screen pt-40 text-white">

        <div className="technology lg:py-12 lg:pb-28 flex flex-col items-center justify-center lg:flex-row-reverse lg: lg:items-center lg:justify-between">
          <img src={showImage} alt="" />

          <div className='flex flex-col items-center justify-center lg:flex-row lg:item-center lg:justify-center'>
            <div className="btn-box mx-auto w-fit mt-8 mb-8 flex items-center justify-center lg:flex-col lg:item-center lg:justify-center lg:mx-12">
              {technology.map((tech, index) => {
                return <button key={index} onClick={() => GetTechnologyName(tech.name)} className={`inline w-16 h-16 rounded-[50%] font-semibold ${technologyName === tech.name ? 'text-black bg-white hover:bg-gray-300' : 'bg-transparent text-white border-2 border-solid border-white hover:border-gray-300'}  m-4`}>
                  {index + 1}
                </button>;
              })}
            </div>

            <div className="technology-details p-4 sm:w-[35rem] mx-auto  mb-12 lg:text-left  text-center lg:mb-30">
              <p className='static-text uppercase text-base md:text-xl lg:text-lg tracking-widest'>The Terminology...</p>
              <p className='tech-name mt-0 mb-2 tracking-widest text-[2rem] md:text-[2.5rem] '>{name}</p>
              <p className='tech-description leading-8 tracking-wider text-xl'>{description}</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Technology;
