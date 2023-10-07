import "./contacts.scss";
import { Suspense, lazy } from "react";
import CubeSpinner from "@/components/CubeSpinner/CubeSpinner";

const RenderContacts = lazy(
  () => import("@/components/RenderContacts/RenderContacts")
);

function Contacts() {
  return (
    <div className="contacts">
      <Suspense
        fallback={
          <div className="cubeSpinnerContainer">
            <CubeSpinner />
          </div>
        }
      >
        <RenderContacts />
      </Suspense>
    </div>
  );
}

export default Contacts;
