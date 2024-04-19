import React, { useState } from 'react';
import {useFetchData} from '../Data/FetchData'

const Destination = () => {
 
  const {loading , destinations} = useFetchData()
  const [destinationName, setDestinationName] = useState('Mars');
  const showDestination = destinations ? destinations.filter((destination) => destination.name === destinationName) : [{
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    }]
  const GetDestinationName = (name) => {
    setDestinationName(name);
  };


  if(loading){
    return <article className="w-screen min-h-screen bg-[url('../src/assets/destination/background-destination-mobile.jpg')] sm:bg-[url('../src/assets/destination/background-destination-tablet.jpg')] md:bg-[url('../src/assets/destination/background-destination-desktop.jpg')] bg-origin-content bg-center bg-cover">

      <section className="page-content min-h-screen pt-40 px-4 text-white pb-28">
      <div className="loader"></div>
      </section>
    </article>
  }
    const { name, description, distance, travel , img } = showDestination[0];

  return (

    <article className="w-screen min-h-screen bg-[url('../src/assets/destination/background-destination-mobile.jpg')] sm:bg-[url('../src/assets/destination/background-destination-tablet.jpg')] md:bg-[url('../src/assets/destination/background-destination-desktop.jpg')] bg-origin-content bg-center bg-cover">

      <section className="page-content min-h-screen pt-40 px-4 text-white pb-28">

        <header className='title tracking-widest font-semibold text-xl md:text-2xl'><span className='text-gray-500'>01</span> PICK YOUR DESTINATION</header>

       <div className="destinations p-2  flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-around">
        <img src={img} className='w-fit h-fit object-cover sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem] mt-16' alt={`picture of ${destinationName}`} />

          <div className="details w-[90vw] sm:w-[60vw] md:w-[30rem] flex-col text-center justify-center items-center md:text-left pb-18">
            <div className="btn-box mx-auto my-16 ">
              {destinations.map((destination, index) => {
                return <button key={index} onClick={() => GetDestinationName(destination.name)} className={`border-b-4 border-solid ${destinationName === destination.name ? 'border-white '  : 'border-transparent'} hover:border-gray-500 inline btn text-2xl text-white p-2 py-4 mx-2`} name={destination.name}>
                  {destination.name}
                </button>;
              })}
            </div>
            <h1 className='destination-name font-bold text-[2.5rem] uppercase tracking-widest m-4'>{name}</h1>
            <p className='description leading-8 tracking-wider text-xl pb-8'>{description}</p>
            <div className="horizontal-line mx-auto w-full h-[1px] bg-gray-500 mb-8"></div>

            <div className="flex-div flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-around">
              <div className="pb-8">
                <p className='destination-tags'>avg. distance</p>
                <p className='value'>{distance}</p>
              </div>
              <div className="pb-8">
                <p className='destination-tags'>est. travel time</p>
                <p className='value'>{travel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Destination;
