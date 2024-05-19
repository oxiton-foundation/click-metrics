import React from 'react'
import Todo from './todo'
import DonutChart from './DonutChart'

const Middle:React.FC = () => {
  return (
    <>
    <div className='outer'>
    
    <div className='boxing1'>
        <div style={{display:"flex",flexDirection:"row"}}><h1><b>Getting started with Bitely</b></h1>
        
        <DonutChart percentage={25} color="green" /></div>
        

<Todo />

</div>
<div className='boxing2'><img src='https://imagetolink.com/ib/EkxlLLPAmc.png'></img><br></br><h1><b>Replace "bit.ly" with your brand.</b></h1><p>Get a custom domain to create links that represents you. Add your own short domain or choose a complimentary one when you upgrade.</p><br></br>
<button className='btnblue' type='button'>View your plans</button>
</div>
</div>
    </>
  )
}

export default Middle