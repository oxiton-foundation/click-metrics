import React, { useEffect, useRef } from 'react';
import QRCode from 'easyqrcodejs';

interface QRCodeGeneratorProps {
  inp: string;  // QR code data input
  backgroundImage?: string;  // Optional background image URL
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ inp, backgroundImage }) => {
  const qrCodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (qrCodeRef.current && inp) {
      qrCodeRef.current.innerHTML = ''; // Clear previous QR code

      console.log(inp);

      new QRCode(qrCodeRef.current, {
        text: inp,
        width: 256,
        height: 256,
        background: '#ffffff',  // QR Code background color
        foreground: '#000000',  // QR Code foreground (code) color
        backgroundImage: backgroundImage || '',  // Set the background image
        backgroundImageAlpha: 0.5,  // Set the alpha (opacity) of the background image
        correctLevel: QRCode.CorrectLevel.H,  // High error correction
      });
    }
  }, [inp, backgroundImage]);

  return (
    <div
      ref={qrCodeRef}
      style={{
        width: '256px',
        height: '256px',
        background: `url(${backgroundImage || ''}) no-repeat center center`,
        backgroundSize: 'cover',
        marginTop: '20px',
      }}
    >
      {/* QR code will be generated inside this div */}
    </div>
  );
};

export default QRCodeGenerator;
