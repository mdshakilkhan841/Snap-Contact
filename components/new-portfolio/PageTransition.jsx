"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="cv-page-transition">
      {children}
    </div>
  );
}
