import React from 'react';
import './style.css'

const home_section1:React.FC = () => {
    const imagesurl:string = "https://imagetolink.com/ib/j70uBz5FGh.png"
  return (
    <>
    
        
        <h1 style={{fontSize:"25px"}}><b>Your Connections Platform</b></h1><br></br>
        <div className='outer'>
        <div className='flexing'>
            <div className="borderstyling">
            <div className='flexing'><img src={imagesurl} className='imagestyling'></img>
            <div>
            <h2><b>Make it short</b></h2><br></br><a href="/links" className='boxborder'><b>Go to the Link</b></a></div> 
            </div>
            </div>
            {/* 2nd div */}
            <div className="borderstyling">
            <div className='flexing'><img src={"https://imagetolink.com/ib/ieC5MI1Trc.png" } className='imagestyling'></img>
            <div>
            <h2><b>Make it scannable</b></h2><br></br><a href="/qr" className='boxborder'><b>Go to QR Codes</b></a></div> 
            </div>
            
            </div>
            {/* 3div */}
            <div className="borderstyling">
            <div className='flexing'><img src={"https://imagetolink.com/ib/NtvUaB7Tf1.png"} className='imagestyling'></img>
            <div>
                <h2><b>Make a page</b></h2><br></br><a href="/link/in/bio"className='boxborder'><b>Go to Link-in-bio</b></a></div> </div>
            </div>

        </div>
    </div>
    
    
    </>
  )
}

export default home_section1