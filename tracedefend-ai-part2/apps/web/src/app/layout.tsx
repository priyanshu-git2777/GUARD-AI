import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TraceDefend AI",
  description:
    "AI-assisted application error and defensive security log analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
