import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { company } from "@/data/site";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://transez-nigeria.com"),
  title: company.name,
  description: company.tagline
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
