import React from 'react'
import { useState } from 'react';
// Function to validate URL syntax
const isValidURL = (url: string): boolean => {
    const urlPattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?' + // port
        '(\\/[-a-z\\d%_.~+]*)*' + // path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i' // fragment locator
    );
    return !!urlPattern.test(url);
};
const Linkscontent: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setIsValid(isValidURL(value));
    };
    return (
        <>

            <div>
                <h1 className="text-2x1 font-bold"><b>Create New</b></h1>
                <label htmlFor="inputField">Destination</label><br></br>
                <input
                    type="text"
                    id="inputField"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder='https://example.com/my-long-url'
                    className={`border ${isValid ? 'border-500' : 'border-red-500'} p-2 w-96`}
                />

                {!isValid && <span className="text-red-500">Invalid URL format</span>}
                <br />
                <span>You can create 12 more links this month.</span>
            </div>

            <div className="mt-10">
                <label htmlFor='title' className="font-bold"><b>Title</b> (optional)</label><br></br>
                <input type='text' id='title' value={inputValue} onChange={handleChange} className="border p-2 w-900 h-7" />
                <br></br>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Add UTMs to add web traffic in analytical tools.</span>
                </label></div>

            <h1 className="text-2xl font-bold mt-5">Ways to share</h1><h3 className="font-bold">Short link</h3>
            <div className="flex">
                <label htmlFor='domain' className="font-bold">Domain</label><br></br>
                <label htmlFor='custom' className="font-bold ml-50">Custom back-half (optional)</label><br></br>
            </div>
            <div className="flex">

                <input type='text' id='domain' value={inputValue} onChange={handleChange} placeholder='bit.ly' className="border p-2 w-80 m-2" />&#160;/&#160;

                <input type='text' id='custom' value={inputValue} onChange={handleChange} className="border p-2 w-80 m-2" />
            </div>
            <p>You can create 5 more custom back-halves this month.</p>

            <h1 className="text-2xl font-bold mt-5">QR Code(optional)</h1>
            <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Generate a QR code to share it anywhere people can share it.</span>
                </label>



 
            <span className="mt-2">You can create 2 more QR codes this month.</span>

            <div className="mt-5">
                <h1 className="text-2xl font-bold">Link-in-bio(optional)</h1>

                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Add this link in your link-in-bio page</span>
                </label>
              </div>



        </>
    )
}

export default Linkscontent;