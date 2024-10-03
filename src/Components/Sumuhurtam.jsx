import React from 'react'
import sm from "../assets/sm.png"
import dm from "../assets/downimg.png"

const Sumuhurtam = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div class="text-center lg:w-2/3 w-full">
                    <img class="lg:w-2/6 md:w-3/6 w-3/5 mt-8 mb- object-cover object-center rounded mx-auto flex  p-5 flex-wrap  items-center justify-center" src={sm} alt='Sumuhurtam' />
                        <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-red-900">సుముహూర్తం</h1>
                        <img class="lg:w-2/6 md:w-3/6 w-3/5  h-20 -mt-4 object-cover object-center rounded mx-auto flex  p-5 flex-wrap  items-center justify-center" src={dm} alt='Sumuhurtam' />
                        <br></br>
                        <br></br>
                        <p class="mb-8 leading-relaxed text-gray-900 text-2xl">  స్వస్తిశ్రీ చాంద్రమాన శ్రీ క్రోధినామ సంవత్సర ఆశ్వీయుజ బహుళ చవితి అనగా
                            <br></br> ది. 20-10-2024 ఆదివారం రాత్రి గం॥ 10-54ని॥లకు
                            <br></br>రోహిణి నక్షత్రయుక్త మిధునలఘ్నమందు
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sumuhurtam
