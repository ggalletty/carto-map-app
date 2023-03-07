import { CompositeLayer } from "@deck.gl/core/typed";
import { RootState, store } from "../../../state/store";

/**
 * Converts hexadecimal colors to an array of RGB colors.
 *
 * @param hex Hexadecimal color to convert in #RRGGBB format (6 characters).
 * @param alpha Alpha value of the color. Use 1 for opaque, 0 for transparent and undefined for RGB.
 */
export const hex2Rgba = (
  hex: string | undefined,
  alpha?: number
): number[] | undefined => {
  if (!hex) return undefined;

  const pairs = hex.match(/[A-F0-9]{2}/gi);
  if (pairs?.length !== 3) throw new Error(`Invalid hex color: ${hex}`);

  const colors = [
    parseInt(pairs[0], 16),
    parseInt(pairs[1], 16),
    parseInt(pairs[2], 16),
  ];

  // Alpha is optional. Deck.gl uses 255 base for alpha.
  if (alpha && !isNaN(alpha)) colors.push(alpha * 255);

  return colors;
};
