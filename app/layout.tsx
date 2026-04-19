import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harmonie Massage",
  description: "Site vitrine de message",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="antialiased">
      <body className="">{children}</body>
    </html>
  );
}
