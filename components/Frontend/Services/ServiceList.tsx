import React from "react";
import ServiceCard from "@/components/Frontend/Services/ServiceCard";
import { ServiceProps } from "@/types/types";

export default function ServiceList({ data }: { data: ServiceProps[] }) {
  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6">
      {data && data.length > 0 ? (
        data.map((service, i) => {
          return <ServiceCard key={i} Service={service} />;
        })
      ) : (
        <p>No services available</p>
      )}
    </div>
  );
}
