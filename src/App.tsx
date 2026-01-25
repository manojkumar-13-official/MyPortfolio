import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Header from "./components/Navbar";
import Contact from "./pages/Contact";
import PixelSnow from "./components/PixelSnow";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "relative"}}>
        {/* <PixelSnow
          flakeSize={0.011}
          pixelResolution={500}
          speed={0.6}
          depthFade={20}
          farPlane={13}
          brightness={3}
          density={0.55}
          variant="round"
          direction={360}
        className="min-h-screen"/> */}
      <div className="bg-gray-950 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer/>
      </div>
      </div>
    </>
  );
};

export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Project from "./pages/Project";
// import Header from "./components/Navbar";
// import Contact from "./pages/Contact";
// import PixelSnow from "./components/PixelSnow";

// const App = () => {
//   return (
//     <div style={{ width: "100%", minHeight: "100vh", position: "relative" }}>
//       {/* Background - lowest layer */}
//       <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
//         <PixelSnow
//           flakeSize={0.011}
//           pixelResolution={500}
//           speed={0.6}
//           depthFade={20}
//           farPlane={13}
//           brightness={3}
//           density={0.55}
//           variant="round"
//           direction={360}
//         />
//       </div>

//       {/* Content - middle layer */}
//       <div className="bg-gray-950 bg-opacity-90 min-h-screen relative z-20">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="/project" element={<Project />}></Route>
//           <Route path="/contact" element={<Contact />}></Route>
//         </Routes>
//       </div>

//       {/* Modal portal layer - highest (will render above everything) */}
//       <div id="modal-root" style={{ position: "relative", zIndex: 50 }}></div>
//     </div>
//   );
// };

// export default App;
