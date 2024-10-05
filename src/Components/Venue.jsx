import React from 'react'
import ven from "../assets/ven.png"
import dm from "../assets/downimg.png"

const Venue = () => {
  return (
    <div>
        <section class="text-gray-600 body-font pointer-events-none">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div class="text-center lg:w-2/3 w-full">
                    <img class="lg:w-2/6 md:w-3/6 w-3/5 mt-8 mb- object-cover object-center rounded mx-auto flex  p-5 flex-wrap  items-center justify-center" src={ven} alt='Venue' />
                        <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-red-900">కళ్యాణవేదిక</h1>
                        <img class="lg:w-2/6 md:w-3/6 w-3/5  h-20 -mt-4 object-cover object-center rounded mx-auto flex  p-5 flex-wrap  items-center justify-center" src={dm} alt='Sumuhurtam' />
                        <br></br>
                        <br></br>
                        <p class="mb-8 leading-relaxed text-gray-900 text-2xl">  శ్రీ పార్వతి పరమేశ్వర కళ్యాణమండపం (చందా సత్రం) <br></br>శ్రీ ఉమా మార్కండేశ్వర స్వామి వారి ఆలయం ప్రక్కన, గోదావరి గట్టు దగ్గర,<br></br> రాజమహేంద్రవరం.

                        </p>
                    </div>
                </div>
            </section>
      
    </div>
  )
}

export default Venue
