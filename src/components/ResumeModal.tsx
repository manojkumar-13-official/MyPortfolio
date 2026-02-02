import { X } from 'lucide-react';
import { Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  const resumeUrl = "https://drive.google.com/file/d/14R8hjhHJ6dttvLow8iSuk_APZle14IDc/view?usp=sharing";
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center h-screen w-screen z-50 m-4">
      <div className="bg-gray-950 rounded-lg w-full max-w-4xl h-5/6 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">My Resume</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-purple-600 transition"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={`https://drive.google.com/file/d/14R8hjhHJ6dttvLow8iSuk_APZle14IDc/preview`}
            className="w-full h-full"
            title="Resume"
            allow="autoplay"
          />
        </div>
        <div className="p-4 border-t border-gray-700 flex gap-2">
          <button
            onClick={handleDownload}
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full font-bold transition flex items-center gap-2 cursor-pointer"
          >
            <Download size={18} />
            Download
          </button>
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full font-bold transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;