import React, { useRef, useState, ChangeEvent } from 'react';
import QRCode from 'easyqrcodejs';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { message } from 'antd';

const CustomQr: React.FC = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [qrCodeData, setQrCodeData] = useState<string>('');
  const [format, setFormat] = useState<string>('png'); 
  const qrCodeRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleQrCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQrCodeData(event.target.value);
  };

  const handleFormatChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormat(event.target.value);
  };

  const generateQRCode = () => {
    if (qrCodeRef.current) {
      qrCodeRef.current.innerHTML = '';
      if (qrCodeData) {
        const options = {
          text: qrCodeData,
          width: 256,
          height: 256,
          backgroundImage: image as string,
          background: '#ffffff',
          foreground: '#000000',
        };
        const qrCode = new QRCode(qrCodeRef.current, options);

        // Draw QR code on canvas after it's rendered
        requestAnimationFrame(() => {
          const img = qrCodeRef.current?.querySelector('img');
          if (img && canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            const tempImg = new Image();
            tempImg.onload = () => {
              context?.clearRect(0, 0, canvas.width, canvas.height);
              context?.drawImage(tempImg, 0, 0);
            };
            tempImg.src = img.src;
          }
        });
      }
    }
  };

  const downloadQRCode = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const imgToDownload = canvas.toDataURL(`image/${format}`);
      fetch(imgToDownload)
        .then((response) => response.blob())
        .then((blob) => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `qrcode.${format}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          message.success("Download Successful");
        })
        .catch((error) => {
          console.error(error);
          message.error("Download Failed");
        });
    }
  };
  

  return (
    <div className="mx-auto p-6 w-full max-w-4xl bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">CUSTOM BACKGROUND QR CODE GENERATOR</h1>
      <p className="text-center text-gray-600 mb-6">
        Generate a customized QR code by entering your website, text, or any URL below.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col items-start w-full md:w-1/2 p-4">
          <Label htmlFor="qrCodeData" className="block text-lg font-semibold mb-2">
            Enter Your Url
          </Label>
          <Input
            id="qrCodeData"
            type="text"
            placeholder="Enter any text or website URL"
            value={qrCodeData}
            onChange={handleQrCodeChange}
            className="w-full p-2 border-2 rounded mb-4 bg-white"
          />
          <Label htmlFor="backgroundImage" className="block text-lg font-semibold mb-2">
            Custom Background Image
          </Label>
          <Input
            id="backgroundImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border-2 rounded mb-4 bg-white"
          />
          <Label htmlFor="format" className="block text-lg font-semibold mb-2">
            Select Image Format
          </Label>
          <select
            id="format"
            value={format}
            onChange={handleFormatChange}
            className="w-full p-2 border-2 rounded mb-4 bg-white"
          >
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
          </select>
          <Button onClick={generateQRCode} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
            Generate QR Code
          </Button>
          <Button onClick={downloadQRCode} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors mt-2">
            Download QR Code
          </Button>
        </div>
        <div className="flex flex-col items-center mt-6 md:mt-0 md:ml-6">
          <div
            ref={qrCodeRef}
            className="w-64 h-64 flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg"
          ></div>
          <canvas
            ref={canvasRef}
            style={{
              display: 'none',
            }}
            width="256"
            height="256"
          ></canvas>
        </div>
      </div>
    </div>
  );
};

export default CustomQr;
