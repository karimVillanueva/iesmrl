import { Inter } from "next/font/google";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IESMERL",
  description: "Instituto de Estudios Superiores en Medicina Regenerativa y Longevidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es_MX">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
