import React from 'react';

const HomeIntro: React.FC = () => {
    return (
        <div className="bg-orange-100 m-4 p-4 text-gray-800 py-8 rounded-lg shadow-md">
            <header className="text-gray-800 py-6">
                <h1 className="text-4xl font-bold">Welcome to <span className='text-orange-500'> CLICK MATRICS</span></h1>
                <p className="mt-2 text-lg font-bold">Your powerful URL shortening and analytics platform</p>
            </header>
            <section className="flex flex-col md:flex-row justify-around mt-8 px-4">
                <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/4 mt-4 md:mt-0">
                    <h2 className="text-2xl font-semibold mb-2">Short URLs</h2>
                    <p>Easily generate short and memorable URLs for your links.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/4 mt-4 md:mt-0">
                    <h2 className="text-2xl font-semibold mb-2">QR Codes</h2>
                    <p>Create custom QR codes for your URLs for easy sharing.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/4 mt-4 md:mt-0">
                    <h2 className="text-2xl font-semibold mb-2">Detailed Analytics</h2>
                    <p>Track detailed analytics for each link, including clicks, referrers, and geographic data.</p>
                </div>
            </section>
        </div>
    );
}

export default HomeIntro;
