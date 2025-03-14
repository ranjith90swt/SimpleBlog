import React from 'react'
import Imge from '../assets/banner1.jpg'
import { Link } from 'react-router-dom'
import BreadScrum from '../Components/BreadScrum'
const About = () => {
  return (
    <>

      <BreadScrum />
      <div className="container">
        <div className="mx-auto flex flex-col md:flex-row py-4 lg:py-6">
          <div className="md:w-1/2 w-full px-0 md:pe-5"> 
             <h2 className='main-title'>About Company</h2>
             <p className='mb-3'>
             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
             </p>
             <p className='mb-3'>
             as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
             </p>
             <p className='mb-3'>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             </p>
           
             
              <div className="py-2 mt-6">
                <Link to="/" type='button' className='main-btn'>Back to home</Link>
              </div>
            
          </div>
          <div className="md:w-1/2 w-full px-0 md:ps-5">
             <img src={Imge} alt="" className='w-full mt-3'/>
          </div>
        </div>


       
      </div>

      <section className='bg-gray-100 py-3 md:py-6'>
        <div className="container mx-auto">
          <div className="w-full  mx-auto">
            <h2 className='main-title'> Features</h2>
          </div>
          <div className="flex flex-col md:flex-row md:mt-8 mt-4 mb-4 gap-x-5 mx-auto">
           
            <div className="md:w-1/3 w-full border border-stone-200 bg-white p-3 mb-2">
                <h3 className='text-2xl mb-3'>Mission Code </h3>
                <p className='mb-3'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div className="py-3">
                  <Link className='read-more'>Readmore </Link>
                </div>
            </div>
            <div className="md:w-1/3 w-full border border-stone-200 p-3 bg-white mb-2">
                <h3 className='text-2xl mb-3'>Mission Code </h3>
                <p className='mb-3'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div className="py-3">
                  <Link className='read-more'>Readmore </Link>
                </div>
            </div>
            <div className="md:w-1/3 w-full border border-stone-200 p-3 bg-white mb-2">
                <h3 className='text-2xl mb-3'>Mission Code </h3>
                <p className='mb-3'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div className="py-3">
                  <Link className='read-more'>Readmore </Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About