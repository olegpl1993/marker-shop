import "./Logo.scss";
import Link from "next/link";
import { Permanent_Marker } from "next/font/google";

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
