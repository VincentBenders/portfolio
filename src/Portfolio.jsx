import React, { useState } from 'react'
import { Link } from 'react-router'

function Portfolio() {

  return (
        <>
<section >
          <h2 className='font-bold text-8xl'>Mijn Portfolio</h2>
  
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
          <img className="rounded-t-lg" src={'https://demitris.com/cdn/shop/articles/image1_eb503a8a-f1e9-4bb0-ac55-fd0942ae5c95.png?v=1648496730'} alt="" />
      </a>
      <div className="p-5">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">cocktail app</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-white">Voor school moest ik een fullstack applicatie maken waar de front-end is gemaakt met react en de backend is gemaakt met express js.</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> 
            <Link className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'} to={"https://github.com/VincentBenders/react-cocktails"}>Github repo front-end</Link></p>
            <Link className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'} to={"https://github.com/VincentBenders/restful-cocktail"}>Github repo back-end</Link>
         
      </div>
  </div>
</section>
  
  
        </>          
    )
}

export default Portfolio
