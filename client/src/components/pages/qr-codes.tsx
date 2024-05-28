import QRCode from 'qrcode.react';
import { saveAs } from 'file-saver';
import React, { useState } from 'react';

const QrCodes = ({ url, bgColor = '#FFFFFF', fgColor = '#000000' }: { url: string, bgColor?: string, fgColor?: string }) => {
    const [qrStyle, setQrStyle] = useState({ backgroundColor: bgColor, color: fgColor });

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQrStyle({ ...qrStyle, [e.target.name]: e.target.value });
    };

    const downloadQRCode = () => {
        const canvas = document.getElementById('qrCode') as HTMLCanvasElement;
        if (canvas) {
            canvas.toBlob((blob: any) => {
                saveAs(blob, 'qr_code.png');
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block mb-1">Background Color:</label>
                    <input type="color" name="backgroundColor" value={qrStyle.backgroundColor} onChange={handleColorChange} className="rounded-md border-gray-300" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Foreground Color:</label>
                    <input type="color" name="color" value={qrStyle.color} onChange={handleColorChange} className="rounded-md border-gray-300" />
                </div>
                <QRCode id="qrCode" value={url} size={256} style={qrStyle} />
                <button 
                    onClick={downloadQRCode} 
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Download QR Code
                </button>
            </div>
        </div>
    );
};

export default QrCodes;
