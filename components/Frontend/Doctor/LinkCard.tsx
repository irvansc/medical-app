import Link from "next/link";
import React from "react";

export default function LinkCard({ className }: { className?: string }) {
  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6">
      <Link
        href="/"
        className={`flex gap-4 bg-slate-800 hover:bg-slate-700 duration-300 text-slate-50 rounded-md py-3 px-6 ${className}`}
      >
        <h2>Anxiety</h2>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link
        href="/"
        className={`flex gap-4 bg-slate-800 hover:bg-slate-700 duration-300 text-slate-50 rounded-md py-3 px-6 ${className}`}
      >
        <h2>Anxiety</h2>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link
        href="/"
        className={`flex gap-4 bg-slate-800 hover:bg-slate-700 duration-300 text-slate-50 rounded-md py-3 px-6 ${className}`}
      >
        <h2>Anxiety</h2>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link
        href="/"
        className={`flex gap-4 bg-slate-800 hover:bg-slate-700 duration-300 text-slate-50 rounded-md py-3 px-6 ${className}`}
      >
        <h2>Anxiety</h2>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link
        href="/"
        className={`flex gap-4 bg-slate-800 hover:bg-slate-700 duration-300 text-slate-50 rounded-md py-3 px-6 ${className}`}
      >
        <h2>Anxiety</h2>
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}
