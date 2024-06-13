import React, { useState } from "react";
import { message } from "antd";
import defaultQr from "../../assets/qrcode.png";
// import { set } from "react-hook-form";

const Qrcode: React.FC = () => {
  const [img, setImg] = useState<string>(defaultQr);
  const [QrProps, setQrProps] = useState({
    qrinput: "",
    background: "ffffff",
    foreground: "000000",
    margin: 1,
    format: "png",
    size: "150x150",
  });

  const generateQR = async () => {
    try {
      console.log(QrProps);
      if (QrProps.qrinput.trim() === "") {
        message.error("Input cannot be empty");
        return;
      }
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${
        QrProps.size
      }&data=${encodeURIComponent(QrProps.qrinput)}&format=${
        QrProps.format
      }&qzone=${QrProps.margin}&color=${QrProps.foreground}&bgcolor=${
        QrProps.background
      }`;
      setImg(url);
      message.success("QR Code Generated Successfully");
    } catch (error) {
      console.error(error);
      message.error("Try Again");
    }
  };

  const click = () => {
    if (img !== defaultQr) {
      window.open(`/qr/${QrProps.qrinput}`, "_blank");
    }
  };

  const downloadQR = () => {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `qrcode.${QrProps.format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        message.success("Download Successful");
      })
      .catch((error) => {
        console.error(error);
        message.error("Download Failed");
      });
  };

  return (
    <>
      <div className="mx-auto p-4 w-[95%]">
        <h1 className="text-3xl font-bold mb-4">QR CODE GENERATOR</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Generate a customized QR code by entering your website, text, or any
          URL below. Adjust colors, size, and format to suit your needs, then
          download your QR code instantly for easy sharing.
        </p>
        <div className="flex flex-wrap w-full justify-center">
          <div className="w-[50%] min-w-[375px]">
            <div className="mt-6">
              <label className="block text-lg font-semibold">
                <span className="inline-block mr-2">🔗</span>Enter Your Url
              </label>
              <input
                id="url"
                type="text"
                placeholder="Enter any text or website Url"
                className="w-full p-2 border-2 rounded mt-2 bg-white"
                value={QrProps.qrinput}
                onChange={(e) =>
                  setQrProps({ ...QrProps, qrinput: e.target.value })
                }
              />
            </div>
            <div className="mt-6">
              <label className="block text-lg font-semibold">
                <span className="inline-block mr-2">🖌️</span>Choose Color
              </label>
              <div className="flex space-x-4 mt-2">
                <div className="w-[50%]">
                  <label className="block">Background</label>
                  <div
                    style={{ backgroundColor: `#${QrProps.background}` }}
                    className={`border-2 rounded-md`}
                  >
                    <input
                      onChange={(e) => {
                        setQrProps({
                          ...QrProps,
                          background: e.target.value.substring(1),
                        });
                      }}
                      value={QrProps.background}
                      id="background"
                      type="color"
                      className=" w-[200px] rounded opacity-0"
                    />
                  </div>
                  <p>#{QrProps.background}</p>
                </div>
                <div className="w-[50%]">
                  <label className="block">Foreground</label>
                  <div
                    style={{ backgroundColor: `#${QrProps.foreground}` }}
                    className={`border-2 rounded-md`}
                  >
                    <input
                      id="foreground"
                      onChange={(e) => {
                        setQrProps({
                          ...QrProps,
                          foreground: e.target.value.substring(1),
                        });
                      }}
                      type="color"
                      value={QrProps.foreground}
                      className=" w-full rounded opacity-0"
                    />
                  </div>
                  <p>#{QrProps.foreground}</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-lg font-semibold">
                Choose File Format
              </label>
              <div className="flex space-x-4 mt-2">
                <button
                  className={`px-4 py-2 border rounded ${
                    QrProps.format == "png"
                      ? "text-white bg-black"
                      : "hover:bg-[#efefef]"
                  }`}
                  onClick={() => {
                    setQrProps({ ...QrProps, format: "png" });
                  }}
                >
                  png
                </button>
                <button
                  className={`px-4 py-2 border rounded ${
                    QrProps.format == "jpg"
                      ? "text-white bg-black"
                      : "hover:bg-[#efefef]"
                  }`}
                  onClick={() => {
                    setQrProps({ ...QrProps, format: "jpg" });
                  }}
                >
                  jpg
                </button>
                <button
                  className={`px-4 py-2 border rounded ${
                    QrProps.format == "jpeg"
                      ? "text-white bg-black"
                      : "hover:bg-[#efefef]"
                  }`}
                  onClick={() => {
                    setQrProps({ ...QrProps, format: "jpeg" });
                  }}
                >
                  jpeg
                </button>
                <button
                  className={`px-4 py-2 border rounded ${
                    QrProps.format == "svg"
                      ? "text-white bg-black"
                      : "hover:bg-[#efefef]"
                  }`}
                  onClick={() => {
                    setQrProps({ ...QrProps, format: "svg" });
                  }}
                >
                  svg
                </button>
              </div>
            </div>
            <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <div className="w-[50%]">
                <label className="block text-lg font-semibold">
                  Select Size
                </label>
                <select
                  id="size"
                  className="w-full p-2 border-2 rounded bg-white"
                  onChange={(e) => {
                    setQrProps({ ...QrProps, size: e.target.value });
                  }}
                >
                  <option value={"150x150"}>150x150</option>
                  <option value={"200x200"}>200x200</option>
                  <option value={"300x300"}>300x300</option>
                  <option value={"400x400"}>400x400</option>
                  <option value={"500x500"}>500x500</option>
                  <option value={"600x600"}>600x600</option>
                  <option value={"700x700"}>700x700</option>
                </select>
              </div>
              <div className="w-[50%]">
                <label className="block text-lg font-semibold">
                  Set Margin
                </label>
                <select
                  id="margin"
                  className="w-full p-2 border-2 rounded bg-white"
                  onChange={(e) => {
                    setQrProps({
                      ...QrProps,
                      margin: parseInt(e.target.value),
                    });
                  }}
                >
                  <option value={"1"}>1</option>
                  <option value={"2"}>2</option>
                  <option value={"3"}>3</option>
                  <option value={"4"}>4</option>
                  <option value={"5"}>5</option>
                  <option value={"6"}>6</option>
                  <option value={"7"}>7</option>
                  <option value={"8"}>8</option>
                  <option value={"9"}>9</option>
                  <option value={"10"}>10</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-6 w-[50%] min-w-[375px] flex flex-col items-center justify-between">
            <div className="flex flex-col items-center gap-4">
              <button
                className="w-full flex gap-2 items-center justify-center bg-[#20954b] text-white px-4 py-2 rounded"
                onClick={downloadQR}
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
                Download
              </button>
              {img && (
                <img
                  src={img}
                  className="qr-code-image cursor-pointer w-[200px]"
                  onClick={click}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = defaultQr;
                  }}
                  alt="QR Code"
                />
              )}
            </div>
            <button
              onClick={generateQR}
              className="px-4 text-[21px] py-2 bg-blue-500 text-white rounded"
            >
              Generate QR Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qrcode;
