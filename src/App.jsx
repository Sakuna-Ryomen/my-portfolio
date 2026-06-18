import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import NavBar from "./components/section1/NavBar";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import ProjectCardContext from "./Contexts/ProjectCardContext";
import Section5 from "./components/section5/Section5";
import CursorGlow from "./components/CursorGlow";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import ContactSetContext from "./Contexts/ContactSetContext";
import { ContactContext } from "./Contexts/ContactContext";

const AppContent = () => {
  const [click] = useContext(ContactContext);

  return (
    <div
      className="hide-scrollbar scroll-smooth"
      style={{
        height: "100dvh",
        overflowY: "scroll",
        scrollSnapType: click ? "none" : "y mandatory",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Cursor spotlight glow — desktop only */}
      <CursorGlow />

      <div className="fixed w-full top-0 left-0 z-50">
        <NavBar />
      </div>

      {click ? (
        <Routes>
          <Route path="/contact" element={<Section5 />} />
        </Routes>
      ) : (
        <>
          <Section1 />
          <Section2 />
          <Section3 />
          <ProjectCardContext>
            <Section4 />
          </ProjectCardContext>
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <ContactSetContext>
      <AppContent />
    </ContactSetContext>
  );
};

export default App;
