import { MdOutlineStar } from "react-icons/md";
import Image from "next/image";
import type { ITechType } from "./AllTypes";
import Link from "next/link";

export function Tech({ tech }: { tech: ITechType }) {
  return (
    <div
      className={
        "grid grid-rows-subgrid row-span-4 shadow-[0_0_15px_rgba(0,0,0,0.15)] md:shadow-[0_0_15px_rgba(0,0,0,0.1)] p-5 rounded-xl relative mx-2 md:mx-0 hover:border-2"
      }
    >
      <div>
        <Image
          className="w-10"
          src={tech.icon}
          height={15}
          width={15}
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
        <Link href={`/technologies/${tech.id}`}>
          <button className="border h-10 w-full mb-2 rounded-xl">
            Add to stack
          </button>
        </Link>
      </div>
        <button style={{backgroundColor:tech.color}} className="absolute right-5 top-5 text-white text-sm font-bold border rounded-full px-4 py-0.5">{tech.badge}</button>
    </div>
  );
}
