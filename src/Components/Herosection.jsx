import React from 'react'
import G1 from '../../src/assets/gpng.png'
import lb from '../../src/assets/leftsban.png'
import rb from '../../src/assets/rightban.png'



const Herosection = () => {
  return (
    <div className="container pointer-events-none w-vw  mx-auto flex  -mt-1 bg-[url('/src/assets/trewq.png')]" >

      <img class="absolute   lg:w-70 md:w-1/5 w-20  top-56 left-1 " src={lb} alt="Workplace" />


      <img class=" float-right  object-right absolute  left-[77%]   top-56   lg:w-70    md:w-1/5 w-20 " src={rb} alt="Workplace" />




      <section class="text-gray-600 body-font  ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center space-x-16  ">

          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col ">

            <div className=" mx-auto flex  p-5 flex-wrap  items-center justify-center  space-x-2  md:space-x-10 text-blue-950 text-lg font-medium">

              <br></br>
              <h1>శ్రీరస్తు</h1>
              <h1>శుభమస్తు </h1>
              <h1>అవిఘ్నమస్తు</h1>

              <br></br>
            </div>

            <img class="lg:w-2/6 md:w-3/6 w-3/5 mt-10  object-cover object-center rounded pointer-events-none" src={G1} alt='om ganesha' />
            <br></br>
            <br></br>
            <div class="text-center lg:w-2/3 w-full md:-mt-12">
              <h1 class="title-font sm:text-4xl text-4xl mb-6 font-medium text-green-900 lg:text-6xl mt-10">సోరపల్లి వారి వివాహ ఆహ్వానం </h1>

              <br></br>
              <p class="mb-8 leading-relaxed text-red-900 md: mt-28 text-3xl sm:text-"> శ్రీ సోరపల్లి చిన్నరామకృష్ణ (లేటు). శ్రీమతి సత్యవతి గార్ల దివ్య ఆశీస్సులతో.... <br></br> సోరపల్లి వెంకట మురళీకృష్ణ శ్రీమతి వరలక్ష్మి దంపతులు వ్రాయు శుభలేఖార్థములు <br></br>మా కుమార్తె</p>

            </div>
          </div>
        </div>

      </section>
    </div>







  )
}

export default Herosection
