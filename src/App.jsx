import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
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
        <Header />
        <Main />
      </div>
    </>
  )
}

export default App;
