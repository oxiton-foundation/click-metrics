import React from 'react'
import Todo from './todo'
import DonutChart from './DonutChart'

const Middle:React.FC = () => {
  return (
    <>
    <div className="flex justify-center p-5 rounded-2xl mr-16">
    
    <div className="bg-white rounded-lg w-full h-full p-6 flex flex-col">
        <div className='flex flex-row'><h1><b>Getting started with Bitely</b></h1>
        
        <DonutChart percentage={25} color="green" /></div>
        

<Todo />

</div>
<div className="bg-white rounded-lg w-full h-full ml-2 flex-row justify-center p-6"><img src='https://imagetolink.com/ib/EkxlLLPAmc.png' className="mx-auto"></img><br></br><h1><b>Replace "bit.ly" with your brand.</b></h1><p>Get a custom domain to create links that represents you. Add your own short domain or choose a complimentary one when you upgrade.</p><br></br>
<button className="bg-[#0808e9] text-white border-none px-5 py-2.5 rounded-md cursor-pointer hover:bg-[#1780c3]" type='button'>View your plans</button>
</div>
</div>
    </>
  )
}

export default Middle