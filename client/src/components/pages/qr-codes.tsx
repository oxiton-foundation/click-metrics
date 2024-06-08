import React, { useState } from "react";
import "./App.css";
import {message} from "antd";

const Qrcode: React.FC = () => {
  const [img, setImg] = useState<string>("");
  const [qrinput, setQrinput] = useState<string>("Example");

  const generateQR = async () => {
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
        qrinput
      )}`;
      setImg(url);
      message.success("QR Code Generated Successfully");
    } catch (error) {
      console.error(error);
      message.error("Try Again");
    }
  };

  const click = () => {
    window.open(`${qrinput}`, "_blank");
  };

  const downloadQR = () => {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        message.success("Download Successfull");
      });
  };

  return (
    <div className="container">
      <h2>QR CODE GENERATOR</h2>
      <div className="qr-code-box">
        {img && <img src={img} className="qr-code-image" onClick={click} />}
      </div>
      <form className="form_container">
        <label>Enter the link for QR code</label>
        <input
          type="text"
          placeholder="Enter the Link"
          value={qrinput}
          onChange={(e) => setQrinput(e.target.value)}
        />
        <button type="button" onClick={generateQR}>
          Generate the QR
        </button>
        <button type="button" onClick={downloadQR}>
          Download the QR
        </button>
      </form>
    </div>
  );
};

export default Qrcode;
