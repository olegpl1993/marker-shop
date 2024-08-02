import CubeSpinner from "@/shared/components/CubeSpinner/CubeSpinner";
import { Suspense, lazy } from "react";
import "./contacts.scss";

const RenderContacts = lazy(
  () => import("@/app/contacts/components/RenderContacts/RenderContacts")
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
