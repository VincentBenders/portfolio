import React, { useState } from 'react'
function Test() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="bg-[#F6F7F8] text-[#001427] p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4D6CFA]">Hey, ik ben Vincent!</h1>
        <p className="mt-4 text-lg">
          Ik ben een technische denker die graag zwakke punten wil versterken en door wil groeien als programmeur.
        </p>
        <p className="mt-2 text-lg text-[#4381C1]">
          Mijn manier van denken is vrij uniek door mijn dyslexie. Ook kan ik goed het perspectief van anderen begrijpen. 
          Ik probeer dan vragen te verzinnen om meer duidelijkheid te krijgen in de denkwijze van anderen.
        </p>
    </section>
    </>
  )
}

export default Test
