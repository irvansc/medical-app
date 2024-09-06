import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ServiceProps } from "@/types/types";
export default function ServiceCard({ Service }: { Service: ServiceProps }) {
  return (
    <Link
      href={`/services/${Service.slug}`}
      className="bg-slate-100 rounded-md hover:bg-slate-200 duration-300 flex gap-4 overflow-hidden"
    >
      <Image
        src={Service.image}
        alt={Service.title}
        width={848}
        height={1170}
        className="w-1/3 object-cover aspect-video "
      />
      <div className="flex flex-col w-2/3 py-4">
        <h2>{Service.title}</h2>
        <p className="text-[0.6em]">963 Doctors Available</p>
      </div>
    </Link>
  );
}
