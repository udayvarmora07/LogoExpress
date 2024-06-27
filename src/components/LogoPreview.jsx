import { icons } from "lucide-react";
import { UpdateStorageContext } from "../context/UpdateStorageContext";
import React, { useContext, useEffect, useState } from "react";
import html2canvas from "html2canvas";

const BASE_URL = "https://logoexpress.tubeguruji.com";

function LogoPreview({ downloadIcon }) {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadPNGLogo();
    }
  }, [downloadIcon]);

  const downloadPNGLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");

    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    })
      .then((canvas) => {
        const pngImg = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngImg;
        downloadLink.download = "LogoExpress.png";
        downloadLink.click();
      })
      .catch((error) => {
        console.error("Oops, something went wrong!", error);
      });
  };

  const Icon = ({ name, size, color, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return null;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-[500px] h-[500px] bg-gray-200 outline-dotted outline-gray-400"
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          id="downloadLogoDiv"
          className="w-full h-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          {storageValue?.icon?.includes(".png") ? (
            <img
              src={`${BASE_URL}/png/${storageValue?.icon}`}
              style={{
                height: storageValue?.iconSize,
                width: storageValue?.iconSize,
                transform: `rotate(${storageValue?.iconRotate}deg)`,
              }}
            />
          ) : (
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              size={storageValue?.iconSize}
              rotate={storageValue?.iconRotate}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
