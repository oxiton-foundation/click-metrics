import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { saveAs } from 'file-saver';
import { Box ,useTheme} from '@mui/material';

const QrCodes = ({ url }: { url: string }) => {
   

    const downloadQRCode = () => {
        const canvas = document.getElementById('qrCode') as HTMLCanvasElement;
        if (canvas) {
            canvas.toBlob((blob: any) => {
                saveAs(blob, 'qr_code.png');
            });
        }
    };

    const theme=useTheme()

    return (
        <Box bgcolor={theme.palette.background.paper}className="flex flex-col items-center justify-center min-h-screen ">
            
            <Box className="p-4 rounded-lg shadow-lg">
                <QRCode id="qrCode" value={url} size={256} className="rounded-md" />
                <button 
                    onClick={downloadQRCode} 
                    className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Download QR Code
                </button>
            </Box>
        </Box>
    );
};

export default QrCodes;
