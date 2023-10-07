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
  metadataBase: new URL("https://marker-shop.vercel.app/"),
  title: "Интернет-магазин MARKER",
  keywords: "MARKER, онлайн-магазин, товары для всей семьи",
  description: `Интернет-магазин MARKER: 
  ✓ Часы, посуда, покрывала, товары для дома и бизнеса 
  ✓ Официальная гарантия 
  ✓ Доставка по всей Украине 🚚 
  ✓ Обзоры и характеристики товаров
  ✓ Выгодные цены и скидки`,
  openGraph: {
    title: "Интернет-магазин MARKER",
    images: "logo.png",
    description: `Интернет-магазин MARKER: 
    ✓ Электроника, часы, бытовая техника, товары для дома и бизнеса 
    ✓ Официальная гарантия 
    ✓ Доставка по всей Украине 🚚 
    ✓ Обзоры и характеристики товаров
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
      <html lang="ru">
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
