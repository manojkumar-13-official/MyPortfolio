import { X } from 'lucide-react';
import { Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  const resumeUrl = "https://drive.google.com/file/d/14R8hjhHJ6dttvLow8iSuk_APZle14IDc/preview";
  const resumeDownloadUrl = "https://drive.google.com/uc?export=download&id=14R8hjhHJ6dttvLow8iSuk_APZle14IDc";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeDownloadUrl;
    link.download = 'MANOJKUMAR_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-opacity-10 backdrop-blur-md flex items-center justify-center min-h-screen w-screen z-50 p-2 sm:p-4 md:p-8 lg:p-10">
      <div className="bg-gray-950 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] border-2 border-purple-700 rounded-4xl flex flex-col">
        <div className="flex justify-between items-center px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 lg:py-4 border-b border-gray-700">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">My Resume</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-purple-600 transition"
          >
            <X size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"/>
          </button>
        </div>
        <div className="flex-1 overflow-hidden min-h-0">
          <iframe
            src={resumeUrl}
            className="w-full h-full"
            title="Resume"
            allow="autoplay"
          />
        </div>
        <div className="px-2 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-3 border-t border-gray-700 flex flex-col sm:flex-row gap-1.5 sm:gap-2 md:gap-3">
          <button
            onClick={handleDownload}
            className="bg-purple-700 hover:bg-purple-800 text-white px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer text-xs sm:text-sm md:text-base lg:text-base order-1 sm:order-none"
          >
            <Download size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            Download
          </button>
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full font-semibold transition cursor-pointer text-xs sm:text-sm md:text-base lg:text-base w-full sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;