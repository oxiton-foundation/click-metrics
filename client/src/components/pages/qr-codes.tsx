import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useRef, useState, ChangeEvent } from "react";
import QRCode from "easyqrcodejs";
import "tailwindcss/tailwind.css";
import { message } from "antd";

const QrCode: React.FC = () => {
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const displayQrRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [fgColor, setFgColor] = useState<string>("#000000");
  const [size, setSize] = useState<number>(200);
  const [margin, setMargin] = useState<number>(10);
  const [bgImage, setBgImage] = useState<File | null>(null);

  const generateQRCode = () => {
    if (!text.trim()) {
      message.error("Please enter a text or url.");
      return;
    }
    if (qrCodeRef.current) {
      qrCodeRef.current.innerHTML = "";
      new QRCode(qrCodeRef.current, {
        text: text,
        width: size,
        height: size,
        colorDark: fgColor,
        colorLight: bgColor,
        quietZone: margin,
        backgroundImage: bgImage ? URL.createObjectURL(bgImage) : undefined,
        backgroundImageAlpha: 1,
        autoColor: true,
      });
    }
    if (displayQrRef.current) {
      displayQrRef.current.innerHTML = "";
      new QRCode(displayQrRef.current, {
        text: text,
        width: 200,
        height: 200,
        colorDark: fgColor,
        colorLight: bgColor,
        quietZone: margin,
        backgroundImage: bgImage ? URL.createObjectURL(bgImage) : undefined,
        backgroundImageAlpha: 1,
        autoColor: true,
      });
    }
    message.success("QR code generated successfully!");
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setBgImage(event.target.files[0]);
    }
  };

  const downloadQRCode = (format: "png" | "jpeg" | "svg") => {
    const canvas = qrCodeRef.current?.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.download = `qrcode.${format}`;
      if (format === "svg") {
        const svg = qrCodeRef.current?.querySelector("svg");
        if (svg) {
          const serializer = new XMLSerializer();
          const svgBlob = new Blob([serializer.serializeToString(svg)], {
            type: "image/svg+xml",
          });
          link.href = URL.createObjectURL(svgBlob);
        }
      } else {
        link.href = canvas.toDataURL(`image/${format}`);
        message.success("QR code downloaded successfully!");
      }
      link.click();
    }
  };

  return (
    <div className="mx-auto p-4 w-[95%]">
      <h1 className="text-3xl font-bold mb-4">QR CODE GENERATOR</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        Generate a customized QR code by entering your website, text, or any URL
        below. Adjust colors, size, and format to suit your needs, then download
        your QR code instantly for easy sharing.
      </p>
      <div className="flex flex-wrap w-full justify-center">
        <div className="w-[50%] min-w-[375px]">
          <div className="mt-6">
            <Label htmlFor="url" className="block text-lg font-semibold">
              <span className="inline-block mr-2">🔗</span>Enter Your Url
            </Label>
            <Input
              id="url"
              type="text"
              placeholder="Enter any text or website Url"
              className="w-full p-2 border-2 rounded my-2 bg-white"
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={1000}
            />
          </div>
          <div className="mt-6">
            <Label className="block text-lg font-semibold">
              <span className="inline-block mr-2">🖌️</span>Select Color
            </Label>
            <div className="flex space-x-4 mt-2">
              <div className="w-[50%]">
                <Label htmlFor="background">Background</Label>
                <div
                  style={{ backgroundColor: `${bgColor}` }}
                  className={`border-2 rounded-md`}
                >
                  <Input
                    id="background"
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-full rounded opacity-0"
                  />
                </div>
              </div>
              <div className="w-[50%]">
                <Label htmlFor="foreground">Foreground</Label>
                <div
                  style={{ backgroundColor: `${fgColor}` }}
                  className={`border-2 rounded-md`}
                >
                  <Input
                    id="foreground"
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-full rounded opacity-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <Label htmlFor="size" className="block text-lg font-semibold">
                Select Size
              </Label>
              <input
                type="number"
                value={size}
                onChange={(e) =>
                  setSize(Math.min(16000, Number(e.target.value)))
                }
                className="w-1/3 p-2 border-2 rounded bg-white"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Label htmlFor="margin" className="block text-lg font-semibold">
                Set Margin
              </Label>
              <input
                type="number"
                value={margin}
                onChange={(e) =>
                  setMargin(Math.min(50, Number(e.target.value)))
                }
                className="w-1/3 p-2 border-2 rounded bg-white"
              />
            </div>
          </div>
          <div className="mt-6">
            <Label
              htmlFor="backgroundImage"
              className="block text-lg font-semibold"
            >
              <span className="inline-block mr-2">📷</span>Custom Background
              Image
            </Label>
            <Input
              id="backgroundImage"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 border-2 rounded my-2 bg-white"
            />
          </div>
        </div>
        <div className="mt-6 w-[50%] min-w-[375px] flex flex-col items-center justify-between">
          <Button onClick={generateQRCode}>Generate QR code</Button>
          <div ref={qrCodeRef} className="mt-4 qr-code-container hidden"></div>
          <div ref={displayQrRef} className="mt-4"></div>
          <div className="flex flex-col items-center gap-4 mt-4">
            <Button
              onClick={() => downloadQRCode("png")}
              className="w-[200px] flex gap-2 items-center justify-center bg-[#20954b] text-white px-4 py-2 rounded"
            >
              <svg
                width="20"
                height="15"
                viewBox="0 0 48 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9103 28.5125L33.3303 16.7375H26.2653V0.252441H21.5553V16.7375H14.4902L23.9103 28.5125Z"
                  fill="white"
                />
                <path
                  d="M42.7495 33.2223H5.06939V16.7373H0.359375V33.2223C0.359375 35.8199 2.47181 37.9324 5.06939 37.9324H42.7495C45.347 37.9324 47.4595 35.8199 47.4595 33.2223V16.7373H42.7495V33.2223Z"
                  fill="white"
                />
              </svg>
              Download png
            </Button>
            <Button
              onClick={() => downloadQRCode("jpeg")}
              className="w-[200px] flex gap-2 items-center justify-center bg-[#20954b] text-white px-4 py-2 rounded"
            >
              <svg
                width="20"
                height="15"
                viewBox="0 0 48 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9103 28.5125L33.3303 16.7375H26.2653V0.252441H21.5553V16.7375H14.4902L23.9103 28.5125Z"
                  fill="white"
                />
                <path
                  d="M42.7495 33.2223H5.06939V16.7373H0.359375V33.2223C0.359375 35.8199 2.47181 37.9324 5.06939 37.9324H42.7495C45.347 37.9324 47.4595 35.8199 47.4595 33.2223V16.7373H42.7495V33.2223Z"
                  fill="white"
                />
              </svg>
              Download jpeg
            </Button>
            <Button
              onClick={() => downloadQRCode("svg")}
              className="w-[200px] flex gap-2 items-center justify-center bg-[#20954b] text-white px-4 py-2 rounded"
            >
              <svg
                width="20"
                height="15"
                viewBox="0 0 48 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9103 28.5125L33.3303 16.7375H26.2653V0.252441H21.5553V16.7375H14.4902L23.9103 28.5125Z"
                  fill="white"
                />
                <path
                  d="M42.7495 33.2223H5.06939V16.7373H0.359375V33.2223C0.359375 35.8199 2.47181 37.9324 5.06939 37.9324H42.7495C45.347 37.9324 47.4595 35.8199 47.4595 33.2223V16.7373H42.7495V33.2223Z"
                  fill="white"
                />
              </svg>
              Download svg
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
