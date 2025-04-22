import React, { useState, useRef } from "react";
import { FaDownload } from "react-icons/fa";
import domtoimage from "dom-to-image-more";
import jsPDF from "jspdf";

const PolaroidCreator = () => {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filterValues, setFilterValues] = useState({
    fade: 0.2,
    vintage: 0.3,
    highlights: 0.15,
    grainy: 0.2,
    blur: 0.5,
    retrofilm: 0.3,
  });
  const [downloadTitle, setDownloadTitle] = useState("polaroid");
  const [downloadFormat, setDownloadFormat] = useState("png");
  const fileInputRef = useRef(null);
  const polaroidRefs = useRef({});

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      preview: URL.createObjectURL(file),
      file,
      filter: "none",
      caption: "",
    }));
    setImages((prev) => [...prev, ...previews]);
  };

  const handleFilterChange = (filter) => {
    if (selectedIndex === null) return;
    setImages((prev) =>
      prev.map((img, idx) => (idx === selectedIndex ? { ...img, filter } : img))
    );
  };

  const handleCaptionChange = (caption) => {
    if (selectedIndex === null) return;
    setImages((prev) =>
      prev.map((img, idx) => (idx === selectedIndex ? { ...img, caption } : img))
    );
  };

  const handleSliderChange = (filter, value) => {
    setFilterValues((prev) => ({
      ...prev,
      [filter]: value,
    }));
  };

  const generateFilter = (img) => {
    const value = filterValues[img.filter] ?? 0;
    switch (img.filter) {
      case "fade":
        return `contrast(${100 - value * 10}%) brightness(${100 + value * 10}%)`;
      case "vintage":
        return `sepia(${value}) contrast(90%) saturate(${100 - value * 30}%)`;
      case "highlights":
        return `brightness(${100 - value * 10}%) contrast(${100 - value * 10}%)`;
      case "grainy":
        return `contrast(${100 - value * 5}%) brightness(${100 + value * 5}%) grayscale(${value})`;
      case "blur":
        return `blur(${value}px)`;
      case "retrofilm":
        return `contrast(${1.2 + value}) brightness(${1.05 + value}) sepia(${0.3 + value}) saturate(${0.6 - value / 2}) hue-rotate(${-5 * value}deg) grayscale(${0.1 + value / 2})`;
      default:
        return "none";
    }
  };

  const handleDownload = () => {
    if (selectedIndex === null) return;
    const node = polaroidRefs.current[selectedIndex];
    if (!node) return;

    const imgWrapper = node.querySelector(".filtered-img-wrapper");
    imgWrapper.style.filter = generateFilter(images[selectedIndex]);
    const captionElement = node.querySelector(".caption");
    captionElement.innerText = images[selectedIndex].caption || "";

    document.fonts.ready.then(() => {
      domtoimage.toPng(node, {
        quality: 1,
        height: node.offsetHeight * 2,
        width: node.offsetWidth * 2,
        style: { transform: "scale(2)", transformOrigin: "top left" },
      }).then((dataUrl) => {
        if (downloadFormat === "png" || downloadFormat === "jpg") {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = `${downloadTitle}.${downloadFormat}`;
          link.click();
        } else if (downloadFormat === "pdf") {
          const pdf = new jsPDF();
          pdf.addImage(dataUrl, "PNG", 10, 10, 180, 160);
          pdf.save(`${downloadTitle}.pdf`);
        }
      }).catch((error) => {
        console.error("Error generating image:", error);
      });
    });
  };

  return (
    <div className="text-white poppins px-6 py-10 md:p-12 font-sans">
      <h1 className="text-4xl md:text-5xl logo font-bold text-center mb-10">
        Craft Your Polaroid
      </h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.length === 0 ? (
            <div onClick={() => fileInputRef.current.click()} className="col-span-full flex justify-center items-center text-center p-10 bg-white rounded-xl text-black font-mono shadow-xl cursor-pointer">
              <div className="flex flex-col gap-2 items-center">
                <div className="w-48 h-60 flex items-center justify-center text-gray-600">
                  No image uploaded
                </div>
                <p className="text-sm text-gray-600">Click to upload an image</p>
              </div>
            </div>
          ) : (
            images.map((img, idx) => (
              <div key={idx} ref={(el) => (polaroidRefs.current[idx] = el)} onClick={() => setSelectedIndex(idx)} className={`bg-white shadow-xl cursor-pointer overflow-hidden transition-transform transform hover:scale-105`}>
                <div className="flex flex-col justify-between h-full">
                  <div className="bg-white w-full px-2 pt-[10px] overflow-hidden flex items-center justify-center">
                    <div className="filtered-img-wrapper" style={{ filter: generateFilter(img) }}>
                      <img src={img.preview} alt={`polaroid-${idx}`} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <p className="caption text-sm text-black font-handwritten text-center mb-[30px] px-2 truncate">
                    {img.caption || ""}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="w-full md:w-72 p-5   bg-[#1e1e1e] rounded-xl shadow-lg">
          <h2 className="text-xl  font-semibold mb-4">Filters & Caption</h2>
          {selectedIndex !== null ? (
            <>
              <div className="grid grid-cols-2  gap-3 mb-5">
                {["none", "retrofilm", "vintage", "highlights", "grainy", "blur","fade" ].map(
                  (key) => (
                    <button key={key} onClick={() => handleFilterChange(key)} className={`text-sm px-3 py-1 rounded-full transition-colors ${images[selectedIndex].filter === key ? "bg-pink-500 text-white" : "bg-white text-black"}`}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                  )
                )}
              </div>

              {images[selectedIndex].filter !== "none" && (
                <div className="mb-5">
                  <label className="block text-sm mb-1">
                    {images[selectedIndex].filter} strength
                  </label>
                  <input
                    type="range"
                    min={images[selectedIndex].filter === "blur" ? 0 : 0}
                    max={images[selectedIndex].filter === "blur" ? 5 : 1}
                    step={images[selectedIndex].filter === "blur" ? 0.5 : 0.05}
                    value={filterValues[images[selectedIndex].filter] ?? 0}
                    onChange={(e) =>
                      handleSliderChange(
                        images[selectedIndex].filter,
                        parseFloat(e.target.value)
                      )
                    }
                    className="w-full"
                  />
                </div>
              )}

              <input
                type="text"
                placeholder="Add a caption..."
                value={images[selectedIndex].caption}
                onChange={(e) => handleCaptionChange(e.target.value)}
                className="w-full p-2 focus:outline-none mb-4 rounded bg-white text-black text-sm"
              />

              <select
                value={downloadFormat}
                onChange={(e) => setDownloadFormat(e.target.value)}
                className="w-full p-2 mb-4 rounded bg-white text-black text-sm"
              >
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
                <option value="pdf">PDF</option>
              </select>

              <button onClick={handleDownload} className="w-full py-2 bg-pink-500 hover:bg-pink-600 rounded text-white flex justify-center items-center gap-2">
                <FaDownload />
                Download
              </button>
            </>
          ) : (
            <p className="text-gray-400 text-sm">Click an image to start editing</p>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            className="mt-6 w-full text-sm text-gray-200 bg-transparent hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default PolaroidCreator;
