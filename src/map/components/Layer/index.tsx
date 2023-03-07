import CartoLayer from "./Carto";
import GeoJsonLayer from "./GeoJson";

export const getListOfLayers = () => [
  CartoLayer({
    id: "usa_block_groups",
    details: {
      type: "carto",
      label: "Demographics",
      fill: "#f0f8ff",
      opacity: 0.1,
      stroke: "#dedede",
      strokeSize: 1,
    },
    data: "carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup",
    type: "tileset",
    connection: "carto_dw",
  }),
  CartoLayer({
    id: "airports",
    details: {
      type: "carto",
      label: "Airports",
      fill: "#ffffff",
      stroke: "#000000",
      pointSize: 5,
    },
    data: "carto-demo-data.demo_tables.airports",
    type: "table",
    connection: "carto_dw",
  }),
  CartoLayer({
    id: "retail_stores",
    details: {
      type: "carto",
      label: "Retail Stores",
      fill: "#ffffff",
      stroke: "#000000",
    },
    data: "carto-demo-data.demo_tables.retail_stores",
    type: "table",
    connection: "carto_dw",
  }),
];

export { CartoLayer, GeoJsonLayer };
