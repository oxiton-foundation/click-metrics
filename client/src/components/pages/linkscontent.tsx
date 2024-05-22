import React from 'react'
import { useState } from 'react';
import './style.css'
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
const Linkscontent:React.FC = () => {
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
                <h1 style={{fontSize:"25px"}}><b>Create New</b></h1>
                <label htmlFor="inputField">Destination</label><br></br>
                <input
                    type="text"
                    id="inputField"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder='https://example.com/my-long-url'
                    style={{ borderColor: isValid ? 'blue' : 'red', width: "800px", border: "2px solid blue" }}
                />
                {!isValid && <span style={{ color: 'red' }}>Invalid URL format</span>}
                <br />
                <span>You can create 12 more links this month.</span>
            </div>
            <div style={{marginTop:"40px"}}>
            <label htmlFor='title'><b>Title</b> (optional)</label><br></br>
            <input type='text' id='title' value={inputValue} onChange={handleChange} style={{ border: "2px solid blue", width: "800px" }} />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <input type="checkbox" id="switch1" /><label id='lab' htmlFor="switch1">Add UTMs to add web traffic in analytical tools.</label>
                <p>Add UTMs to add web traffic in analytical tools.</p></div>
            </div>
            <h1 style={{fontSize:"25px",marginTop:"25px"}}><b>Ways to share</b></h1><h3><b>Short link</b></h3>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <label htmlFor='domain'><b>Domain</b></label><br></br>
                <label htmlFor='custom' style={{ marginLeft: "500px" }}><b>Custom back-half</b> (optional)</label><br></br>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>

                <input type='text' id='domain' value={inputValue} onChange={handleChange} placeholder='bit.ly' style={{ border: "2px solid blue", width: "500px",margin:"10px" }} />&#160;/&#160;

                <input type='text' id='custom' value={inputValue} onChange={handleChange} style={{ border: "2px solid blue", width: "500px",margin:"10px" }} />
            </div>
            <p>You can create 5 more custom back-halves this month.</p>

            <h1 style={{fontSize:"25px",marginTop:"25px"}}><b>QR Code</b>(optional)</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <input type="checkbox" id="switch2" /><label id='lab' htmlFor="switch2">Generate a QR code to share it anywhere people can share it.</label>
                <span>Generate a QR code to share it anywhere people can share it.</span>
            </div>
                <span>You can create 2 more QR codes this month.</span>

            <div style={{marginTop:"15px"}}>
                <h1 style={{fontSize:"25px"}}><b>Link-in-bio</b>(optional)</h1>
                <div style={{ display: "flex", flexDirection: "row" }}>
                <input type="checkbox" id="switch3" /><label id='lab' htmlFor="switch3">Add this link in your link-in-bio page</label>
                <p>Add this link to your Link-in-bio page for people to easily find</p></div>
            </div>

    
    </>
  )
}

export default Linkscontent;