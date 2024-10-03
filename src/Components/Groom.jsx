import React from 'react'
import rb from '../../src/assets/vinay.jpg'

const Groom = () => {
  return (
    <div>
        <section class="text-white body-font overflow-hidden ">
        <div class="text-center lg:w-2/3 w-full  container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-large text-gray-900"></h1> 
      <br></br>
      <p class="mb-10 leading-relaxed  text-red-950 text-3xl md:mt-10 "> <h1>  ప॥గో॥ జిల్లా మండపాక గ్రామ వాస్తవ్యులు <br></br>శ్రీ దేవాని సూర్యనారాయణ శ్రీమతి సత్యనాగ కుమారి గార్ల కుమారుడు
 <br></br></h1></p>
     
    </div>


                <div class="container px-5 py-24 mx-auto mt-30">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap ">
                        <img alt="vinay pic" class="lg:w-1/2 w-full lg:h-46 h-46 object-cover object-center rounded"src={rb} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-10 lg:mt-8">
                            <h1 class="text-sm title-font  text-red-900 tracking-widest">వరుడు : చి|| </h1>
                            <br></br> 
                            <h1 class= "text-[#f20c0cf9] flex text-3xl title-font font-medium mb-1">చంద్ర వినయ్ <h1 class="text-sm flex title-font text-gray-600 tracking-widest mt-4 ml-4"> (B.tech)</h1></h1>
                            
                        <br>
                        </br>
                        <br></br>
                        <h1 class=" text-sm title-font text-gray-600  tracking-widest md:mt-20 mb-10"> Details : </h1>
                            <p class="leading-relaxed text-2xl text-blue-800"> తండ్రి : దేవాని సూర్యనారాయణ <br></br> తల్లి : సత్యనాగ కుమారి <br></br>
                            చెల్లి : దుర్గ శిరీష    <br></br> </p>
                            
                           
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Groom
