import "./global.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";
import { Providers } from "@/redux/provider";

export const metadata: Metadata = {
  title: "MARKER SHOP",
  description: "Online store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <div className="wrapper">
            <div className="headerRow">
              <div className="container">
                <Header />
              </div>
            </div>
            <div className="container">
              <main>{children}</main>
            </div>
          </div>
          <div className="footerRow">
            <div className="container">
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </Providers>
  );
}
