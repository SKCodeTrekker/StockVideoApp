import React, { useState } from 'react';

const UploadPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const handleUpload = async () => {
    // Handle file upload logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Upload your files to start selling
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Drag and Drop Area */}
          <div className="flex-grow flex flex-col items-center justify-center bg-blue-100 border-2 border-dashed border-blue-500 rounded-lg p-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-blue-500 text-4xl mb-3">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <h3 className="text-md font-semibold text-gray-700 mb-1">
                Drag & Drop files or Browse
              </h3>
              <p className="text-gray-500 text-sm">File types: All (0)</p>
              <p className="text-blue-400 text-sm cursor-pointer hover:underline mt-2">
                Use CMD or CTRL to select multiple files
              </p>
            </div>
          </div>


          {/* Right Section - Accordion */}
          <div className="w-full md:w-1/3 bg-gray-50 rounded-lg p-6">
            {/* Accordion Item - Transparent PNG */}
            <div>
              <div
                className="cursor-pointer text-lg font-semibold text-gray-700 py-3"
                onClick={() => toggleSection('png')}
              >
                TRANSPARENT PNG
              </div>
              {openSection === 'png' && (
                <div className="text-gray-600 pl-4">
                  <ul className="list-disc pl-5">
                    <li>Do not include any backgrounds – must be transparent</li>
                    <li>PNG format only</li>
                    <li>Minimum image resolution is 4MP</li>
                    <li>Maximum image resolution is 100MP</li>
                    <li>Maximum file size is 45MB</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion Item - Images */}
            <div className="mt-4">
              <div
                className="cursor-pointer text-lg font-semibold text-gray-700 py-3"
                onClick={() => toggleSection('jpeg')}
              >
                IMAGES (JPEG FILES)
              </div>
              {openSection === 'jpeg' && (
                <div className="text-gray-600 pl-4">
                  <ul className="list-disc pl-5">
                    <li>JPEG format only</li>
                    <li>Minimum image resolution is 4MP</li>
                    <li>Maximum image resolution is 100MP</li>
                    <li>Maximum file size is 45MB</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion Item - Vectors */}
            <div className="mt-4">
              <div
                className="cursor-pointer text-lg font-semibold text-gray-700 py-3"
                onClick={() => toggleSection('vector')}
              >
                VECTORS (AI, EPS, SVG)
              </div>
              {openSection === 'vector' && (
                <div className="text-gray-600 pl-4">
                  <ul className="list-disc pl-5">
                    <li>Min artboard Resolution: 4MP</li>
                    <li>Max artboard resolution: 25MP</li>
                    <li>AI, EPS, SVG Format Only</li>
                    <li>File size max: 45MB</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion Item - Videos */}
            <div className="mt-4">
              <div
                className="cursor-pointer text-lg font-semibold text-gray-700 py-3"
                onClick={() => toggleSection('video')}
              >
                VIDEOS
              </div>
              {openSection === 'video' && (
                <div className="text-gray-600 pl-4">
                  <ul className="list-disc pl-5">
                    <li>
                      <span>Minimum video resolution:</span> 1280x720 (recommend Full HD or 4K)
                    </li>
                    <li>
                      <span>File format:</span> MOV, MP4, MPG, AVI
                    </li>
                    <li>
                      <span>Preferred codecs:</span> h264, ProRes, PNG
                    </li>
                    <li>
                      <span>Duration:</span> at least 5 seconds, not to exceed 60 seconds
                    </li>
                    <li>
                      <span>Maximum file size:</span> 3,900MB (3.9GB)
                    </li>
                    <li>Ensure good lighting and clear audio</li>
                    <li>Use a tripod to avoid shaky footage</li>
                  </ul>
                </div>
              )}
            </div>

            <a href="/guide" className="text-blue-500 hover:underline mt-4 block">
              Contributor submission guide
            </a>
          </div>
        </div>

        <div className="text-right mt-8">
          <button 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200"
            onClick={handleUpload}
          >
            Submit 0 files
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;