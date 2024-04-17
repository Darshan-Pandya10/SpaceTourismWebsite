import React, { useState } from 'react'
import { destinations } from '../destinationDb'
import mars from '../assets/destination/image-mars.png'
import moon from '../assets/destination/image-moon.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'


const Destination = () => {

  const [destinationName , setDestinationName] = useState('Mars')
  const showDestination = destinations.filter((destination) => destination.name === destinationName)
  const {name , description ,distance , travel} = showDestination[0]
  const showImage = (destinationName === 'Mars' && mars) || ( destinationName === 'Moon' && moon ) ||  ( destinationName === 'Europa' && europa ) || ( destinationName === 'Titan' && titan ) 
  const GetDestinationName = (e) => {
    setDestinationName(e.target.name)
  }

  return (
      <main className="w-screen min-h-screen bg-[url('../src/assets/destination/background-destination-mobile.jpg')] sm:bg-[url('../src/assets/destination/background-destination-tablet.jpg')] md:bg-[url('../src/assets/destination/background-destination-desktop.jpg')] bg-cover">

        <div className="page-content min-h-screen pt-40 px-4 text-white pb-28">

            <header className='title tracking-widest font-semibold text-xl md:text-2xl'><span className='text-gray-500'>01</span> PICK YOUR DESTINATION</header>

            <div className="destinations p-2  flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-around"> 
              <img src={showImage} className=' w-fit h-fit object-cover sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem] mt-16' alt={`picture of ${destinationName}`}></img>

              <div className="details w-[90vw] sm:w-[60vw] md:w-[30rem] flex-col text-center justify-center items-center md:text-left pb-18">
              <div className="btn-box mx-auto my-16 ">
                {destinations.map((destination , index) => {
                return <button key={index} onClick={(e) => GetDestinationName(e)} 
                className={`${destinationName === destination.name ? 'border-b-4 border-solid border-white' : ''}inline btn text-2xl  text-white p-2 py-4 mx-2`} name={destination.name}> 
                {destination.name}
                </button>
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
                  <p  className='value'>{travel}</p>
                </div>
              </div>
              

              </div>

            </div>
        </div>
    </main>
  )
}

export default Destination
