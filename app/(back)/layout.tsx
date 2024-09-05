import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h2>Back Layout</h2>
      {children}
    </section>
  );
}
