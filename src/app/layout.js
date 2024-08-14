import { Amaranth } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const amaranth = Amaranth({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Bond and Beyond Academy",
  description:
    "The premier choice for O/IB/IP Chemistry tuition in Singapore 🇸🇬. With 5+ years of expertise, 80% distinction rates, and a 100% pass rate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-50">
      <body className={amaranth.className}>{children}</body>
    </html>
  );
}
