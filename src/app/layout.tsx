import type { Metadata } from "next";
import "../styles/global.css";
import React from "react";

export const metadata: Metadata = {
  title: "Alif Rachmawan Portfolio",
  description: "Showcasing my projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
