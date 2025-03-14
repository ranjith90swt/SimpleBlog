import React from 'react'
import { Link } from 'react-router-dom'

const BreadScrum = () => {
  return (
    <>
        <section className='py-5'>
           <div className="container">
              <div className="flex items-center">
                 <div className="flex flex-col md:flex-row items-center justify-center w-full relative px-4 min-h-[200px] bg-[url('../src/assets/banner1.jpg')] object-center bg-no-repeat bg-cover bg-center">
                    <div className="bg-[rgba(255,255,255,0.1)]  absolute w-full h-full flex flex-col items-center justify-center">
                    <h2 className='main-title'>Section</h2>
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                    </ul>
                    </div>
                 </div>
              </div>
           </div>
        </section>

    </>
  )
}

export default BreadScrum