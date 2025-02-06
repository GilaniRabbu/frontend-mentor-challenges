import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FM Challenges",
  description: "My Complete challenge to the Frontend Mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
