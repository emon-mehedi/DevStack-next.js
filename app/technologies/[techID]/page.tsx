import { MdOutlineStar } from "react-icons/md";
import Image from "next/image";
import type { ITechType } from "../../components/AllTypes";
import React from "react";

const techDetails = async ({
  params,
}: {
  params: Promise<{ techID: string }>;
}) => {
  const { techID } = await params;
  const res = await fetch(`http://localhost:3001/technologies/${techID}`);
  const tech: ITechType = await res.json();

  return (
    <div
      className={
        "grid shadow-[0_0_15px_rgba(0,0,0,0.15)] md:shadow-[0_0_15px_rgba(0,0,0,0.1)] p-5 rounded-xl relative mx-2 md:mx-0"
      }
    >
      <div className="flex flex-col">
        <Image
          className="self-center"
          src={tech.icon}
          height={200}
          width={200}
          alt="icon"
        />
        <h3 className="text-xl font-bold">{tech.name}</h3>
        <p>{tech.description}</p>
      </div>
      <hr />
      <div>
        <div className="flex flex-row justify-between items-center mt-2 mb-4">
          <button className="bg-gray-100 px-2">{tech.category}</button>
          <p>{tech.difficulty}</p>
          <div className="flex flex-row items-center">
            <MdOutlineStar color="#fbbf24" />
            {tech.rating}
          </div>
        </div>
      </div>
      <button
        style={{ backgroundColor: tech.color }}
        className="absolute right-5 top-5 text-white text-sm font-bold border rounded-full px-4 py-0.5"
      >
        {tech.badge}
      </button>
      <p>{tech.blog}</p>
    </div>
  );
};

export default techDetails;
