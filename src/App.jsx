// import { Header } from "./components/Header/Header";
// import { Main } from "./components/Main/Main";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', `${import.meta.env.BASE_URL}particlesJS/particles.config.json`);
  }, []);

  return (
    <>
      <div id="particles-js" className="w-screen h-screen fixed top-0 -z-10"></div>
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl text-center font-bold mb-4 text-[#0096ff]">Sitio en construcción</h1>
          <p className="text-lg text-center">¡Próximamente una nueva versión esta por llegar!</p>
          <p className="text-lg text-center font-semibold">contacto@yovanymorales.com</p>
        </div>
        {/* <Header className="hidden" /> */}
        {/* <Main /> */}
      </div>
    </>
  )
}

export default App;
