import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pain-Free Latch Blueprint | Breastfeeding Guide",
  description:
    "A premium beginner breastfeeding guide for new moms who want a deeper latch, calmer feeds, and less nipple pain."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
