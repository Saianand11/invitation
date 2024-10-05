import React from 'react'
import vin from '../assets/vindhu.png'
import dm from '../assets/downimg.png'

const Lunch = () => {
  return (
    <div>
       <section class="text-gray-600 body-font mb-10 pointer-events-none">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div class="text-center lg:w-2/3 w-full">
                    <img class="lg:w-2/6 md:w-3/6 w-3/5 mt-8 mb- object-cover object-center rounded mx-auto flex  p-5 flex-wrap  items-center justify-center" src={vin} alt='vindhu' />
                        <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-red-900">విందు
                        <img class="lg:w-2/6 md:w-3/6 w-3/5  h-20 -mt-4 object-cover object-center rounded mx-auto flex  p-5 flex-wrap  items-center justify-center" src={dm} alt='Sumuhurtam' />
                        </h1>
                        <br></br>
                        <br></br>
                        <p class="mb-8 leading-relaxed text-gray-900 text-2xl">  ది. 20-10-2024 ఆదివారం <br></br>రాత్రి గం॥ 7-00ల నుండి కళ్యాణవేదిక వద్ద </p>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Lunch
