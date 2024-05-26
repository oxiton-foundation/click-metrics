import React from 'react';

const HomeSection1 = () => {
    const imagesUrl = "https://imagetolink.com/ib/j70uBz5FGh.png";

    return (
        <>
            <h1 className="text-2xl font-bold">Your Connections Platform</h1>
            <div className="flex justify-center">
                <div className="border border-gray-300 rounded-md p-4 m-4 flex items-center">
                    <img src={imagesUrl} className="w-24 h-16 mr-4" alt="Make it short" />
                    <div>
                        <h2 className="font-bold">Make it short</h2>
                        <a href="/links" className="border border-blue-500 p-2 inline-block">Go to the Link</a>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-md p-4 m-4 flex items-center">
                    <img src="https://imagetolink.com/ib/ieC5MI1Trc.png" className="w-24 h-16 mr-4" alt="Make it scannable" />
                    <div>
                        <h2 className="font-bold">Make it scannable</h2>
                        <a href="/qr" className="border border-blue-500 p-2 inline-block">Go to QR Codes</a>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-md p-4 m-4 flex items-center">
                    <img src="https://imagetolink.com/ib/NtvUaB7Tf1.png" className="w-24 h-16 mr-4" alt="Make a page" />
                    <div>
                        <h2 className="font-bold">Make a page</h2>
                        <a href="/link/in/bio" className="border border-blue-500 p-2 inline-block">Go to Link-in-bio</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeSection1;
