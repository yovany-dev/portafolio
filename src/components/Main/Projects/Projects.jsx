import { CardContainer } from "./CardContainer";
import { IMG } from "../../IMG/IMG";
import { Card } from "./Card/Card";
import { useState, useEffect } from "react";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}data/projects.json`;
    const headers = {
      method: "GET",
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    }
    fetch(url, headers)
    .then(res => res.json())
    .then(data => setData(data))
  },[]);

  return (
    <section className="w-3/4 mx-auto h-screen flex items-center">
      <div className="grid grid-cols-6 grid-rows-[repeat(2,_300px)] gap-8">
        <CardContainer style='col-span-3 p-10 flex items-center'>
          <h2 className="text-[75px] leading-none font-bold text-color-purple">Alguno De Mis Mejores Proyectos</h2>
        </CardContainer>
        <CardContainer style='col-span-3'>
          <IMG name={'animation'} />
        </CardContainer>
        {data.map((item, index) => {
          const {content, footer} = item;
          return (
            <Card key={index} content={content} footer={footer} />
          );
        })}
      </div>
    </section>
  )
}

export { Projects };