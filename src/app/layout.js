import { Amaranth } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const amaranth = Amaranth({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Bond and Beyond Academy",
  description:
    "Bond and Beyond Academy (The Chemistry Specialist) is the premier choice for specialised O/IB/IP Chemistry Tuition. With over 5 years of experience, 80% distinction rates and 100% pass rates, we are confident that under the guidance of our expert tutors, you will be next to clinch that coveted A! 🇸🇬",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-50">
      <body className={amaranth.className}>{children}</body>
    </html>
  );
}
