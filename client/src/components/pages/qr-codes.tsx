import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { saveAs } from 'file-saver';

const QrCodes = ({ url }: { url: string }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const downloadQRCode = () => {
        const canvas = document.getElementById('qrCode') as HTMLCanvasElement;
        if (canvas) {
            canvas.toBlob((blob: any) => {
                saveAs(blob, 'qr_code.png');
            });
        }
    };

    

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <QRCode id="qrCode" value={url} size={256} className="rounded-md" />
                <button 
                    onClick={downloadQRCode} 
                    className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Download QR Code
                </button>
            </div>
        </div>
    );
};

export default QrCodes;
