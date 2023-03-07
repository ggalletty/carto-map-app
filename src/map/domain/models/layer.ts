// In the map domain, this represents the data that is used to visualize a layer.

export type LayerData = {
  /** Layer fill color. Note this might not be supported by all composite layers. */
  fill?: string;
  /** Layer name or description. */
  label: string;
  /** Layer opacity. */
  opacity?: number;
  /** Determines the size for point layers. */
  pointSize?: number;
  /** Layer stroke color. */
  stroke?: string;
  /** Layer stroke width. */
  strokeSize?: number;
  /** Layer type. */
  type: "carto" | "geojson";
  /** Layer visibility state. */
  visible?: boolean;
};
