import { ITechType } from "../components/AllTypes";
import { Tech } from "../components/Tech";

const Technologies =async()=>{
  const res = await fetch('http://localhost:3001/technologies');
  const techList:ITechType[]= await res.json();

  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-3">
          {techList.map((tech) => (
            <Tech
              key={tech.id}
              tech={tech}
            />
          ))}
        </div>
  );
}

export default Technologies
