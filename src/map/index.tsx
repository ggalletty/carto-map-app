import Deck from "./components/Deck";
import { getListOfLayers } from "./components/Layer";

const Map = () => {
  return <Deck layers={getListOfLayers()} />;
};

export default Map;
