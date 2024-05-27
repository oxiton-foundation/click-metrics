import React from 'react'
import { useState } from 'react';
import { Button } from '../ui';
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
const Links = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setIsValid(isValidURL(value));
    };
    return (
        <>
            <div className="ml-24">
                <div className="bg-white w-full h-full">
                    <p className="text-4xl font-bold"><b>Create New</b></p>
                    <div className='mt-4'>
                        <label htmlFor="inputField">Destination</label><br></br>
                        <input
                            type="text"
                            id="inputField"
                            value={inputValue}
                            onChange={handleChange}
                            placeholder='https://example.com/my-long-url'
                            className={`border ${isValid ? 'border-500' : 'border-red-500'} p-2 w-96`}
                        />

                        {!isValid && <span className="text-red-500 m-2">Invalid URL format</span>}
                        <br />
                        <span>You can create 12 more links this month.</span>
                    </div>

                    <div className="mt-10">
                        <label htmlFor='title' className="font-bold"><b>Title</b> (optional)</label><br></br>
                        <input type='text' id='title' className={`border p-2 w-48`} placeholder='My First Blog'/>
                        <Button className="mt-4 m-2">
                            Pick a random title
                        </Button>
                    </div>
                    <div className="">
                        <label htmlFor='description' className="font-bold"><b>Description</b> (optional)</label><br></br>
                        <textarea id='description'className='border w-[600px] p-2' placeholder='My first blog page URL'/>
                    </div>

                    <h1 className="text-2xl font-bold mt-5">Ways to share</h1><h3 className="font-bold">Short link</h3>

                    <div className="flex">
                        <p className='text-2xl font-bold flex items-center'>
                            click.me/
                        </p>
                        <input type='text' id='custom' className="border p-2 w-80 m-2" placeholder='my-first-blog'/>
                    </div>
                    <div>
                        <Button className="mt-4 m-2">
                            Generate short link
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Links;