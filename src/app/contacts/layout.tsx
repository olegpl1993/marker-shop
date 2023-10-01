import "../global.scss";
import Footer from "@/components/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="container">
        <main className="main">{children}</main>
      </div>
      <div className="footerRow">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}
