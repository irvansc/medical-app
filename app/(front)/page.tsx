import Brands from "@/components/Frontend/Brands";
import Hero from "@/components/Frontend/Hero";
import Tabbed from "@/components/Frontend/Tabbed";
import React from "react";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Brands />
      <Tabbed />
    </section>
  );
}
