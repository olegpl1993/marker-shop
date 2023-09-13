import "./global.scss";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { Providers } from "@/redux/provider";
import { Roboto } from "next/font/google";
import MuiCustomStylesProvider from "./MuiCustomStylesProvider";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic", "latin"],
});

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
        <MuiCustomStylesProvider>
          <body className={`body ${roboto.className}`}>
            <div className="wrapper">
              <div className="headerRow">
                <div className="container">
                  <Header />
                </div>
              </div>
              {children}
            </div>
            <div id="portal-modal"></div>
          </body>
        </MuiCustomStylesProvider>
      </html>
    </Providers>
  );
}
