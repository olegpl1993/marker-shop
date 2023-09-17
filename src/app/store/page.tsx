import RenderStore from "@/components/RenderStore/RenderStore";
import "./store.scss";
import Settings from "@/components/Settings/Settings";

function Store() {
  return (
    <div className="store">
      <Settings />
      <RenderStore />
    </div>
  );
}

export default Store;
