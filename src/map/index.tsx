import Deck from "./components/Deck";
import { getListOfLayers } from "./components/Layer";
import Settings from "./components/Settings";

const Map = () => {
  return (
    <>
      <Settings />
      <Deck layers={getListOfLayers()} />
    </>
  );
};

export default Map;
