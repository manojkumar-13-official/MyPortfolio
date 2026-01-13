import React, { useEffect, useRef } from "react";
import "../App.css";

interface ModalProps {
  props: {
    name: string;
    technology: string[];
    github_link: string;
    website_link: string;
  };
  onClose: () => void;
}

const Modal = ({ props, onClose }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
    // Blur the background
    document.body.style.overflow = "hidden";
    document.body.style.filter = "blur(5px)";

    return () => {
      // Remove blur when modal closes
      document.body.style.filter = "none";
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    dialogRef.current?.close();
    onClose();
  };

  return (
    <>
      <style>{`
        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes backdropFadeIn {
          from {
            background-color: rgba(0, 0, 0, 0);
          }
          to {
            background-color: rgba(0, 0, 0, 0.7);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        dialog[open] {
          animation: slideInScale 0.5s ease-out forwards;
        }

        dialog[open]::backdrop {
          animation: backdropFadeIn 0.5s ease-out forwards;
        }

        .modal-header {
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
          border-radius: 12px 12px 0 0;
        }

        .tech-badge {
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          border-left: 3px solid #a855f7;
        }

        .link-button {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
        }

        .section-divider {
          background: linear-gradient(90deg, transparent, #a855f7, transparent);
          height: 2px;
        }

        @media (max-width: 640px) {
          dialog {
            width: 90vw !important;
            max-width: 90vw !important;
          }

          .modal-content {
            padding: 16px !important;
          }

          .close-btn {
            width: 32px !important;
            height: 32px !important;
            margin-right: 8px !important;
            margin-top: 8px !important;
          }

          .tech-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          dialog {
            width: 85vw !important;
            max-width: 85vw !important;
          }

          .tech-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (min-width: 1025px) {
          dialog {
            width: 600px !important;
          }

          .tech-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          border: "none",
          padding: "0",
          backgroundColor: "transparent",
          width: "90%",
          maxWidth: "600px",
        }}
      >
        <div className="bg-gray-950 rounded-2xl shadow-2xl overflow-hidden border border-purple-600/30 modal-content">
          {/* Header Section */}
          <div className="modal-header px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                {props.name}
              </h1>
              <button
                className="close-btn h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center text-lg sm:text-xl font-bold cursor-pointer hover:bg-purple-500 hover:rounded-full text-white transition-all duration-300 rounded-full hover:scale-110"
                onClick={handleClose}
              >
                ✕
              </button>
            </div>
          </div>

          <div className="modal-content px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
            {/* Technologies Section */}
            <div className="info-row">
              <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3 sm:mb-4">
                💻 Technologies Used
              </h2>
              <div className="section-divider mb-3 sm:mb-4"></div>
              <div className="tech-grid grid gap-2 sm:gap-3">
                {props.technology.map((tech, index) => (
                  <div
                    key={tech}
                    className="tech-badge px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-center text-xs sm:text-sm font-semibold text-purple-300 hover:text-purple-200 transition-all duration-300 hover:border-l-purple-400"
                    style={{
                      animationDelay: `${index * 0.05}s`,
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="info-row">
              <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3 sm:mb-4">
                🔗 Links
              </h2>
              <div className="section-divider mb-3 sm:mb-4"></div>
              <div className="space-y-2 sm:space-y-3">
                {/* GitHub Link */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xs sm:text-sm text-gray-400 font-medium min-w-[80px] sm:min-w-[100px]">
                    GitHub
                  </span>
                  <a
                    href={props.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button flex-1 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white text-center truncate"
                  >
                    View Repository
                  </a>
                </div>

                {/* Website Link */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xs sm:text-sm text-gray-400 font-medium min-w-[80px] sm:min-w-[100px]">
                    Website
                  </span>
                  <a
                    href={props.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button flex-1 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white text-center truncate"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Decoration */}
            <div className="section-divider mt-4 sm:mt-6"></div>
            
          </div>
        </div>
      </dialog>,
    </>
  );
};

export default Modal;
