import { Permanent_Marker } from "next/font/google";
import Link from "next/link";
import "./Logo.scss";

const permanent_marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

function Logo() {
  return (
    <Link href={"/"} className="logo">
      <div className={`logo__text ${permanent_marker.className}`}>MARKER</div>
      <div className="logo__point" />
    </Link>
  );
}

export default Logo;
