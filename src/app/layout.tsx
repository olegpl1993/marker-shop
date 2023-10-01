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
  title: "Интернет-магазин MARKER SHOP",
  keywords: "MARKER SHOP, онлайн-магазин, товары для всей семьи",
  openGraph: {
    title: "Интернет-магазин MARKER SHOP",
    images: "../../public/logo.png",
    description: `Интернет-магазин MARKER SHOP: 
    ✓ Электроника, одежда и обувь, бытовая техника, товары для дома и бизнеса 
    ✓ Официальная гарантия 
    ✓ Доставка по всей Украине 🚚 
    ✓ Отзывы покупателей, обзоры и характеристики товаров
    ✓ Выгодные цены и скидки`,
  },
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
