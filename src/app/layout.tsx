import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elite Roofing & Restoration | Free Inspection | North Texas",
  description:
    "High-tier storm damage roofing: free inspections, insurance claim support, fast scheduling, and clean installs across North Texas.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Elite Roofing & Restoration",
    description:
      "Free inspections • Storm damage experts • Insurance claim support • Fast scheduling",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
