import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useRef, useState, ChangeEvent } from "react";
import QRCode from "easyqrcodejs";
import "tailwindcss/tailwind.css";
import { message } from "antd";

const QrCode: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generated, setIsGenerated] = useState<boolean>(false);
  const generatedQR = () => {
    setIsGenerated(true);
  };
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const qrCodeSvgRef = useRef<HTMLDivElement>(null);
  const displayQrRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [fgColor, setFgColor] = useState<string>("#000000");
  const [size, setSize] = useState<number>(200);
  const [margin, setMargin] = useState<number>(10);
  const [bgImage, setBgImage] = useState<File | null>(null);
  const [logoImage, setLogoImage] = useState<File | null>(null);
  const bgImageInputRef = useRef<HTMLInputElement>(null);
  const logoImageInputRef = useRef<HTMLInputElement>(null);

  const generateQRCode = () => {
    if (!text.trim()) {
      message.error("Please enter a text or url.");
      return;
    }
    setIsGenerating(true);
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
        logo: logoImage ? URL.createObjectURL(logoImage) : undefined,
        backgroundImageAlpha: 1,
        autoColor: true,
      });
    }
    if (qrCodeSvgRef.current) {
      qrCodeSvgRef.current.innerHTML = "";
      new QRCode(qrCodeSvgRef.current, {
        text: text,
        width: size,
        height: size,
        colorDark: fgColor,
        colorLight: bgColor,
        quietZone: margin,
        backgroundImage: bgImage ? URL.createObjectURL(bgImage) : undefined,
        logo: logoImage ? URL.createObjectURL(logoImage) : undefined,
        backgroundImageAlpha: 1,
        autoColor: true,
        drawer: "svg",
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
        quietZone: Math.min(75, margin),
        backgroundImage: bgImage ? URL.createObjectURL(bgImage) : undefined,
        logo: logoImage ? URL.createObjectURL(logoImage) : undefined,
        backgroundImageAlpha: 1,
        autoColor: true,
      });
    }
    setTimeout(() => {
      setIsGenerating(false);
      message.success("QR code generated successfully!");
    }, 1000);
    generatedQR();
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setBgImage(event.target.files[0]);
    }
  };
  const handleLogoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setLogoImage(event.target.files[0]);
    }
  };
  const removeBackgroundImage = () => {
    setBgImage(null);
    if (bgImageInputRef.current) {
      bgImageInputRef.current.value = "";
    }
  };
  const removeLogo = () => {
    setLogoImage(null);
    if (logoImageInputRef.current) {
      logoImageInputRef.current.value = "";
    }
  };
  const downloadQRCode = (format: "png" | "jpeg" | "svg") => {
    if (!generated) {
      alert("First Generate QR Code to download.");
      return;
    }
    const canvas = qrCodeRef.current?.querySelector("canvas");
    const svg = qrCodeSvgRef.current?.querySelector("svg");

    if (canvas || svg) {
      const link = document.createElement("a");
      link.download = `qrcode.${format}`;

      if (format === "svg" && svg) {
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svg);
        const blob = new Blob([svgString], { type: "image/svg+xml" });
        link.href = URL.createObjectURL(blob);
      } else if (canvas) {
        link.href = canvas.toDataURL(`image/${format}`);
      }
      link.click();
      message.success("QR code downloaded successfully!");
    } else {
      alert("First Generate QR Code to download.");
    }
  };

  const printQRCode = () => {
    const canvas = qrCodeRef.current?.querySelector("canvas");
    if (!canvas) {
      alert("First Generate QR Code to print.");
      return;
    }
    if (canvas) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(
          "<html><head><title>https://click-metrics.vercel.app/</title></head><body>"
        );
        const canvasDataUrl = canvas.toDataURL("image/png");
        printWindow.document.write(`<img src="${canvasDataUrl}" />`);
        printWindow.document.write("</body></html>");
        printWindow.document.close();

        // Add a delay to ensure the image is loaded before printing
        printWindow.onload = () => {
          setTimeout(() => {
            printWindow.print();
            printWindow.close();
          }, 50);
        };
      } else {
        console.error("No QR code found to print.");
      }
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
                  setSize(Math.min(2000, Number(e.target.value)))
                }
                className="w-1/2 p-2 border-2 rounded bg-white"
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
                  setMargin(Math.min(2000, Number(e.target.value)))
                }
                className="w-1/2 p-2 border-2 rounded bg-white"
              />
            </div>
          </div>
          <div className="relative mt-6">
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
              ref={bgImageInputRef}
              className="w-full p-2 border-2 rounded my-2 bg-white"
            />
            {bgImage && (
              <Button
                onClick={removeBackgroundImage}
                className="absolute bottom-[-40px] right-0 z-[1] px-2 py-1 leading-0 h-auto bg-transparent border border-[#af2525] text-[#af2525] hover:bg-[#af2525] hover:text-[#ffffff]"
              >
                Remove Background
              </Button>
            )}
          </div>
          <div className="relative mt-6">
            <Label
              htmlFor="backgroundImage"
              className="block text-lg font-semibold"
            >
              <span className="inline-block mr-2">♉</span>Add a custom Logo
            </Label>
            <Input
              id="qrLogo"
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              ref={logoImageInputRef}
              className="w-full p-2 border-2 rounded my-2 bg-white"
            />
            {logoImage && (
              <Button
                onClick={removeLogo}
                className="absolute bottom-[-40px] right-0 z-[1] px-2 py-1 leading-0 h-auto bg-transparent border border-[#af2525] text-[#af2525] hover:bg-[#af2525] hover:text-[#ffffff]"
              >
                Remove Logo
              </Button>
            )}
          </div>
        </div>
        <div className="w-[50%] min-w-[375px] flex items-center justify-center relative">
          <div className="w-full text-center absolute left-0 bottom-[-50px]">
            <span className="text-red-500">*</span>Note: you may need to
            download qr to view its actual size
          </div>
          <div className="custom-class mt-6 p-6 w-[50%] h-full min-w-[375px] flex flex-col items-center justify-between border-2">
            <Button onClick={generateQRCode} className="px-12 py-6 text-[20px]">
              Generate QR code
            </Button>
            <div
              ref={qrCodeRef}
              className="mt-4 qr-code-container hidden"
            ></div>
            <div
              ref={qrCodeSvgRef}
              className="mt-4 qr-code-container hidden"
            ></div>
            {/* <div className="loader"></div> */}
            <img
              src="/src/assets/default-qr.svg"
              alt="QR Code"
              className={`${!generated ? "w-[200px]" : "hidden"}`}
            />

            <div
              ref={displayQrRef}
              className={`${generated && !isGenerating ? "mt-4" : "hidden"}`}
            ></div>
            <div className={`${!isGenerating ? "hidden" : "loader"}`}></div>

            <div className="flex items-center gap-8 mt-4">
              <Button
                onClick={() => downloadQRCode("png")}
                className="bg-transparent hover:bg-transparent p-0"
              >
                <svg
                  className="w-[45px]"
                  viewBox="0 0 66 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M61.1744 19.9003L42.6309 1.35688C42.3848 1.11096 42.0925 0.91595 41.7709 0.782999C41.4493 0.650048 41.1047 0.581758 40.7567 0.582032H8.96804C7.56289 0.582032 6.21529 1.14022 5.2217 2.13381C4.22811 3.1274 3.66992 4.475 3.66992 5.88015V64.1594C3.66992 65.5646 4.22811 66.9122 5.2217 67.9058C6.21529 68.8993 7.56289 69.4575 8.96804 69.4575H56.6511C58.0562 69.4575 59.4038 68.8993 60.3974 67.9058C61.391 66.9122 61.9492 65.5646 61.9492 64.1594V21.7745C61.9495 21.4265 61.8812 21.0819 61.7482 20.7603C61.6153 20.4387 61.4203 20.1465 61.1744 19.9003ZM43.4058 9.62525L52.906 19.1254H43.4058V9.62525ZM56.6511 64.1594H8.96804V5.88015H38.1077V21.7745C38.1077 22.4771 38.3868 23.1509 38.8836 23.6477C39.3804 24.1445 40.0542 24.4236 40.7567 24.4236H56.6511V64.1594Z"
                    fill="#1B455D"
                  />
                  <rect
                    x="-0.00292969"
                    y="37.4355"
                    width="65.6254"
                    height="19.8987"
                    rx="2.72237"
                    fill="#1B455D"
                  />
                  <path
                    d="M17.312 53.7969V42.746H21.8769C22.7043 42.746 23.4184 42.9079 24.0191 43.2316C24.6234 43.5518 25.0893 43.9997 25.4166 44.5752C25.744 45.1472 25.9077 45.8127 25.9077 46.5717C25.9077 47.3343 25.7404 48.0016 25.4059 48.5736C25.0749 49.142 24.6019 49.5827 23.9867 49.8956C23.3716 50.2086 22.6413 50.3651 21.796 50.3651H18.9793V48.2606H21.2996C21.7024 48.2606 22.0388 48.1905 22.3086 48.0502C22.582 47.9099 22.7888 47.7139 22.9291 47.462C23.0694 47.2066 23.1396 46.9099 23.1396 46.5717C23.1396 46.23 23.0694 45.935 22.9291 45.6868C22.7888 45.435 22.582 45.2407 22.3086 45.104C22.0352 44.9673 21.6988 44.899 21.2996 44.899H19.9829V53.7969H17.312ZM36.6294 42.746V53.7969H34.3631L29.9654 47.4189H29.8953V53.7969H27.2243V42.746H29.523L33.8721 49.1132H33.9638V42.746H36.6294ZM45.561 46.3559C45.4999 46.1293 45.4099 45.9296 45.2912 45.7569C45.1725 45.5807 45.0268 45.4314 44.8541 45.3091C44.6815 45.1868 44.4836 45.095 44.2606 45.0339C44.0376 44.9691 43.7929 44.9368 43.5267 44.9368C42.9908 44.9368 42.5267 45.0663 42.1346 45.3253C41.7461 45.5843 41.4457 45.962 41.2335 46.4584C41.0212 46.9512 40.9151 47.5502 40.9151 48.2553C40.9151 48.9639 41.0176 49.5683 41.2227 50.0683C41.4277 50.5683 41.7245 50.9496 42.113 51.2122C42.5015 51.4748 42.9728 51.6061 43.5267 51.6061C44.016 51.6061 44.4297 51.527 44.7678 51.3687C45.1096 51.2068 45.3686 50.9784 45.5448 50.6834C45.7211 50.3884 45.8092 50.0413 45.8092 49.642L46.3057 49.7014H43.6185V47.7534H48.3831V49.2157C48.3831 50.205 48.1726 51.0521 47.7518 51.7572C47.3345 52.4623 46.7589 53.0037 46.0251 53.3814C45.2948 53.7591 44.4548 53.948 43.5052 53.948C42.4512 53.948 41.5249 53.7195 40.7263 53.2627C39.9277 52.8058 39.3053 52.1547 38.8593 51.3093C38.4132 50.4604 38.1902 49.4531 38.1902 48.2876C38.1902 47.3811 38.3251 46.5771 38.5949 45.8756C38.8647 45.1706 39.2406 44.5734 39.7226 44.0842C40.2082 43.595 40.7694 43.2244 41.4061 42.9726C42.0465 42.7208 42.7353 42.5949 43.4728 42.5949C44.1131 42.5949 44.7085 42.6866 45.2588 42.8701C45.8128 43.0536 46.3021 43.3126 46.7265 43.6471C47.1546 43.9817 47.5018 44.3792 47.768 44.8396C48.0342 45.3001 48.1996 45.8055 48.2644 46.3559H45.561Z"
                    fill="white"
                  />
                  <path
                    d="M21.2205 11.5352H27.6353V20.0882H32.8099L24.4279 28.4702L16.0459 20.0882H21.2205V11.5352Z"
                    fill="#1B455D"
                  />
                </svg>
              </Button>
              <Button
                onClick={() => downloadQRCode("jpeg")}
                className="bg-transparent hover:bg-transparent p-0"
              >
                <svg
                  className="w-[45px]"
                  viewBox="0 0 67 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M62.0943 19.9003L43.5509 1.35688C43.3047 1.11096 43.0124 0.91595 42.6909 0.782999C42.3693 0.650048 42.0246 0.581758 41.6767 0.582032H9.88796C8.48281 0.582032 7.13522 1.14022 6.14163 2.13381C5.14804 3.1274 4.58984 4.475 4.58984 5.88015V64.1594C4.58984 65.5646 5.14804 66.9122 6.14163 67.9058C7.13522 68.8993 8.48281 69.4575 9.88796 69.4575H57.571C58.9762 69.4575 60.3238 68.8993 61.3173 67.9058C62.3109 66.9122 62.8691 65.5646 62.8691 64.1594V21.7745C62.8694 21.4265 62.8011 21.0819 62.6682 20.7603C62.5352 20.4387 62.3402 20.1465 62.0943 19.9003ZM44.3257 9.62525L53.8259 19.1254H44.3257V9.62525ZM57.571 64.1594H9.88796V5.88015H39.0276V21.7745C39.0276 22.4771 39.3067 23.1509 39.8035 23.6477C40.3003 24.1445 40.9741 24.4236 41.6767 24.4236H57.571V64.1594Z"
                    fill="#1B455D"
                  />
                  <rect
                    x="0.916992"
                    y="37.4355"
                    width="65.6254"
                    height="19.8987"
                    rx="2.72237"
                    fill="#1B455D"
                  />
                  <path
                    d="M18.7213 41.746H21.3545V49.3866C21.3509 50.1025 21.18 50.7284 20.8419 51.2644C20.5038 51.7968 20.0361 52.2105 19.439 52.5055C18.8454 52.8005 18.1583 52.948 17.3777 52.948C16.687 52.948 16.0593 52.8275 15.4945 52.5864C14.9333 52.3454 14.4855 51.9713 14.1509 51.4641C13.82 50.9569 13.6563 50.3076 13.6599 49.5161H16.3201C16.3309 49.8003 16.3849 50.0432 16.482 50.2446C16.5827 50.4424 16.7212 50.5917 16.8975 50.6925C17.0737 50.7932 17.2842 50.8435 17.5288 50.8435C17.7842 50.8435 18 50.7896 18.1763 50.6817C18.3526 50.5702 18.4857 50.4065 18.5756 50.1906C18.6691 49.9748 18.7177 49.7068 18.7213 49.3866V41.746ZM23.0313 52.7969V41.746H27.5963C28.4236 41.746 29.1377 41.9079 29.7384 42.2316C30.3428 42.5518 30.8086 42.9997 31.136 43.5752C31.4633 44.1472 31.627 44.8127 31.627 45.5717C31.627 46.3343 31.4597 47.0016 31.1252 47.5736C30.7942 48.142 30.3212 48.5827 29.7061 48.8956C29.0909 49.2086 28.3607 49.3651 27.5153 49.3651H24.6986V47.2606H27.0189C27.4218 47.2606 27.7581 47.1905 28.0279 47.0502C28.3013 46.9099 28.5082 46.7139 28.6485 46.462C28.7888 46.2066 28.8589 45.9099 28.8589 45.5717C28.8589 45.23 28.7888 44.935 28.6485 44.6868C28.5082 44.435 28.3013 44.2407 28.0279 44.104C27.7545 43.9673 27.4182 43.899 27.0189 43.899H25.7023V52.7969H23.0313ZM32.9436 52.7969V41.746H40.649V43.9152H35.6146V46.1815H40.2551V48.356H35.6146V50.6277H40.649V52.7969H32.9436ZM49.5739 45.3559C49.5127 45.1293 49.4228 44.9296 49.3041 44.7569C49.1854 44.5807 49.0397 44.4314 48.867 44.3091C48.6944 44.1868 48.4965 44.095 48.2735 44.0339C48.0504 43.9691 47.8058 43.9368 47.5396 43.9368C47.0036 43.9368 46.5396 44.0663 46.1475 44.3253C45.759 44.5843 45.4586 44.962 45.2464 45.4584C45.0341 45.9512 44.928 46.5502 44.928 47.2553C44.928 47.9639 45.0305 48.5683 45.2356 49.0683C45.4406 49.5683 45.7374 49.9496 46.1259 50.2122C46.5144 50.4748 46.9856 50.6061 47.5396 50.6061C48.0289 50.6061 48.4425 50.527 48.7807 50.3687C49.1224 50.2068 49.3814 49.9784 49.5577 49.6834C49.734 49.3884 49.8221 49.0413 49.8221 48.642L50.3185 48.7014H47.6314V46.7534H52.396V48.2157C52.396 49.205 52.1855 50.0521 51.7646 50.7572C51.3474 51.4623 50.7718 52.0037 50.0379 52.3814C49.3077 52.7591 48.4677 52.948 47.518 52.948C46.464 52.948 45.5377 52.7195 44.7391 52.2627C43.9405 51.8058 43.3182 51.1547 42.8721 50.3093C42.4261 49.4604 42.203 48.4531 42.203 47.2876C42.203 46.3811 42.3379 45.5771 42.6077 44.8756C42.8775 44.1706 43.2535 43.5734 43.7355 43.0842C44.2211 42.595 44.7823 42.2244 45.419 41.9726C46.0593 41.7208 46.7482 41.5949 47.4857 41.5949C48.126 41.5949 48.7213 41.6866 49.2717 41.8701C49.8257 42.0536 50.3149 42.3126 50.7394 42.6471C51.1675 42.9817 51.5146 43.3792 51.7808 43.8396C52.047 44.3001 52.2125 44.8055 52.2773 45.3559H49.5739Z"
                    fill="white"
                  />
                  <path
                    d="M22.1404 11.5352H28.5552V20.0882H33.7298L25.3478 28.4702L16.9658 20.0882H22.1404V11.5352Z"
                    fill="#1B455D"
                  />
                </svg>
              </Button>
              <Button
                onClick={() => downloadQRCode("svg")}
                className="bg-transparent hover:bg-transparent p-0"
              >
                <svg
                  className="w-[45px]"
                  viewBox="0 0 67 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M61.6343 19.9003L43.0909 1.35688C42.8447 1.11096 42.5525 0.91595 42.2309 0.782999C41.9093 0.650048 41.5647 0.581758 41.2167 0.582032H9.428C8.02285 0.582032 6.67525 1.14022 5.68167 2.13381C4.68808 3.1274 4.12988 4.475 4.12988 5.88015V64.1594C4.12988 65.5646 4.68808 66.9122 5.68167 67.9058C6.67525 68.8993 8.02285 69.4575 9.428 69.4575H57.111C58.5162 69.4575 59.8638 68.8993 60.8574 67.9058C61.851 66.9122 62.4092 65.5646 62.4092 64.1594V21.7745C62.4094 21.4265 62.3412 21.0819 62.2082 20.7603C62.0752 20.4387 61.8802 20.1465 61.6343 19.9003ZM43.8658 9.62525L53.3659 19.1254H43.8658V9.62525ZM57.111 64.1594H9.428V5.88015H38.5676V21.7745C38.5676 22.4771 38.8467 23.1509 39.3435 23.6477C39.8403 24.1445 40.5141 24.4236 41.2167 24.4236H57.111V64.1594Z"
                    fill="#1B455D"
                  />
                  <rect
                    x="0.457031"
                    y="37.4355"
                    width="65.6254"
                    height="19.8987"
                    rx="2.72237"
                    fill="#1B455D"
                  />
                  <path
                    d="M23.7452 46.0591C23.7092 45.6634 23.5492 45.3558 23.265 45.1364C22.9844 44.9134 22.5833 44.8019 22.0617 44.8019C21.7163 44.8019 21.4286 44.8468 21.1983 44.9368C20.9681 45.0267 20.7954 45.1508 20.6803 45.3091C20.5652 45.4638 20.5059 45.6418 20.5023 45.8433C20.4951 46.0087 20.5274 46.1544 20.5994 46.2803C20.6749 46.4062 20.7828 46.5178 20.9231 46.6149C21.067 46.7084 21.2397 46.7912 21.4412 46.8631C21.6426 46.935 21.8692 46.998 22.121 47.052L23.0707 47.2678C23.6175 47.3865 24.0995 47.5448 24.5168 47.7426C24.9377 47.9405 25.2903 48.1761 25.5744 48.4495C25.8622 48.7229 26.0799 49.0377 26.2273 49.3938C26.3748 49.7499 26.4504 50.1492 26.454 50.5917C26.4504 51.2896 26.2741 51.8885 25.9252 52.3885C25.5762 52.8886 25.0744 53.2717 24.4197 53.5379C23.7686 53.8041 22.9826 53.9372 22.0617 53.9372C21.1372 53.9372 20.3314 53.7987 19.6443 53.5217C18.9572 53.2447 18.423 52.8238 18.0417 52.259C17.6604 51.6943 17.4643 50.9802 17.4536 50.1168H20.0112C20.0328 50.473 20.1281 50.7698 20.2972 51.0072C20.4663 51.2446 20.6983 51.4245 20.9933 51.5468C21.2919 51.6691 21.6372 51.7302 22.0293 51.7302C22.389 51.7302 22.6948 51.6817 22.9466 51.5845C23.202 51.4874 23.3981 51.3525 23.5348 51.1798C23.6715 51.0072 23.7416 50.8093 23.7452 50.5863C23.7416 50.3777 23.6769 50.1996 23.551 50.0521C23.4251 49.901 23.2308 49.7715 22.9682 49.6636C22.7092 49.5521 22.3782 49.4496 21.9753 49.356L20.8206 49.0862C19.8637 48.8668 19.1101 48.5125 18.5597 48.0232C18.0093 47.5304 17.7359 46.8649 17.7395 46.0267C17.7359 45.3432 17.9194 44.7443 18.2899 44.2299C18.6604 43.7155 19.1731 43.3144 19.8278 43.0266C20.4825 42.7388 21.2289 42.5949 22.0671 42.5949C22.9232 42.5949 23.6661 42.7406 24.2956 43.032C24.9287 43.3198 25.4198 43.7245 25.7687 44.2461C26.1176 44.7677 26.2957 45.372 26.3029 46.0591H23.7452ZM30.3121 42.746L32.7834 50.8399H32.8751L35.3465 42.746H38.3358L34.6072 53.7969H31.0513L27.3227 42.746H30.3121ZM46.1248 46.3559C46.0637 46.1293 45.9738 45.9296 45.855 45.7569C45.7363 45.5807 45.5906 45.4314 45.418 45.3091C45.2453 45.1868 45.0475 45.095 44.8244 45.0339C44.6014 44.9691 44.3568 44.9368 44.0906 44.9368C43.5546 44.9368 43.0905 45.0663 42.6984 45.3253C42.3099 45.5843 42.0095 45.962 41.7973 46.4584C41.5851 46.9512 41.4789 47.5502 41.4789 48.2553C41.4789 48.9639 41.5815 49.5683 41.7865 50.0683C41.9916 50.5683 42.2883 50.9496 42.6768 51.2122C43.0654 51.4748 43.5366 51.6061 44.0906 51.6061C44.5798 51.6061 44.9935 51.527 45.3316 51.3687C45.6734 51.2068 45.9324 50.9784 46.1087 50.6834C46.2849 50.3884 46.3731 50.0413 46.3731 49.642L46.8695 49.7014H44.1823V47.7534H48.9469V49.2157C48.9469 50.205 48.7365 51.0521 48.3156 51.7572C47.8983 52.4623 47.3227 53.0037 46.5889 53.3814C45.8586 53.7591 45.0187 53.948 44.069 53.948C43.015 53.948 42.0887 53.7195 41.2901 53.2627C40.4915 52.8058 39.8692 52.1547 39.4231 51.3093C38.977 50.4604 38.754 49.4531 38.754 48.2876C38.754 47.3811 38.8889 46.5771 39.1587 45.8756C39.4285 45.1706 39.8044 44.5734 40.2864 44.0842C40.7721 43.595 41.3333 43.2244 41.97 42.9726C42.6103 42.7208 43.2992 42.5949 44.0366 42.5949C44.6769 42.5949 45.2723 42.6866 45.8227 42.8701C46.3767 43.0536 46.8659 43.3126 47.2904 43.6471C47.7184 43.9817 48.0656 44.3792 48.3318 44.8396C48.598 45.3001 48.7635 45.8055 48.8282 46.3559H46.1248Z"
                    fill="white"
                  />
                  <path
                    d="M21.6805 11.5352H28.0953V20.0882H33.2699L24.8879 28.4702L16.5059 20.0882H21.6805V11.5352Z"
                    fill="#1B455D"
                  />
                </svg>
              </Button>
              <Button
                onClick={() => printQRCode()}
                className="bg-transparent hover:bg-transparent p-0"
              >
                <svg
                  className="w-[45px]"
                  viewBox="0 0 75 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M54.6923 18.6012V5.72624H20.359V18.6012H16.0673V1.43457H58.984V18.6012H54.6923ZM61.6234 33.6221C62.8393 33.6221 63.8593 33.2101 64.6833 32.3861C65.5073 31.5621 65.9179 30.5435 65.915 29.3304C65.9122 28.1173 65.5016 27.0973 64.6833 26.2704C63.865 25.4436 62.8451 25.0316 61.6234 25.0344C60.4017 25.0373 59.3831 25.4493 58.5677 26.2704C57.7523 27.0916 57.3403 28.1116 57.3317 29.3304C57.3231 30.5492 57.7351 31.5678 58.5677 32.3861C59.4003 33.2043 60.416 33.6164 61.6234 33.6221ZM54.6923 63.1659V43.6903H20.359V63.1659H54.6923ZM58.984 67.4576H16.0673V50.2909H1.37695V27.1846C1.37695 24.7526 2.20238 22.7141 3.85324 21.0689C5.50411 19.4238 7.53979 18.5998 9.96029 18.5969H65.091C67.523 18.5969 69.5615 19.4209 71.2067 21.0689C72.8518 22.7169 73.6744 24.7541 73.6744 27.1803V50.2909H58.984V67.4576ZM69.3827 45.9992V27.1846C69.3827 25.9686 68.9721 24.9486 68.151 24.1246C67.3299 23.3006 66.3099 22.8886 65.091 22.8886H9.96029C8.74431 22.8886 7.72576 23.3006 6.90462 24.1246C6.08348 24.9486 5.67148 25.9686 5.66862 27.1846V45.9992H16.0673V39.3987H58.984V45.9992H69.3827Z"
                    fill="#1B455D"
                  />
                  <path
                    d="M5.66862 22.8929H69.3827M54.6923 18.6012V5.72624H20.359V18.6012H16.0673V1.43457H58.984V18.6012H54.6923ZM61.6234 33.6221C62.8393 33.6221 63.8593 33.2101 64.6833 32.3861C65.5073 31.5621 65.9179 30.5435 65.915 29.3304C65.9122 28.1173 65.5016 27.0973 64.6833 26.2704C63.865 25.4436 62.8451 25.0316 61.6234 25.0344C60.4017 25.0373 59.3831 25.4493 58.5677 26.2704C57.7523 27.0916 57.3403 28.1116 57.3317 29.3304C57.3231 30.5492 57.7351 31.5678 58.5677 32.3861C59.4003 33.2043 60.416 33.6164 61.6234 33.6221ZM54.6923 63.1659V43.6903H20.359V63.1659H54.6923ZM58.984 67.4576H16.0673V50.2909H1.37695V27.1846C1.37695 24.7526 2.20238 22.7141 3.85324 21.0689C5.50411 19.4238 7.53979 18.5998 9.96029 18.5969H65.091C67.523 18.5969 69.5615 19.4209 71.2067 21.0689C72.8518 22.7169 73.6744 24.7541 73.6744 27.1803V50.2909H58.984V67.4576ZM69.3827 45.9992V27.1846C69.3827 25.9686 68.9721 24.9486 68.151 24.1246C67.3299 23.3006 66.3099 22.8886 65.091 22.8886H9.96029C8.74431 22.8886 7.72576 23.3006 6.90462 24.1246C6.08348 24.9486 5.67148 25.9686 5.66862 27.1846V45.9992H16.0673V39.3987H58.984V45.9992H69.3827Z"
                    stroke="#1B455D"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
