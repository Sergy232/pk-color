import { randomBetween } from './math';
import { memoize } from './memoizer';

export const rgbLinearShade = memoize(_rgbLinearShade);

/** TODO */
export function randomRGBColor(): string {
  const red = randomBetween(0, 255);
  const green = randomBetween(0, 255);
  const blue = randomBetween(0, 255);

  return `rgb(${red},${green},${blue})`;
}

/** Calculates a darker or brighter rgb(a) color given the inputs.
 * @param color color to modify in rgb(a) format.
 * @param percentage Percentage in float format between [-1, 1].
 * percentage > 0 indicates brighten.
 * percentage < 0 indicates darken.
 */
function _rgbLinearShade(color: string, percentage: number): string {
  const [ red, green, blue, alpha ] = color.split(',');
  const darken = percentage < 0;
  const rawRed = red.slice(red[3] == 'a' ? 5 : 4); // handle "rgba" colors
  const multiplier = darken ? (1 + percentage) : (1 - percentage);
  const rest = darken ? 0 : 255 * percentage;

  const resultColor =
    Math.round(+rawRed * multiplier + rest) + ',' +
    Math.round(+green * multiplier + rest) + ',' +
    Math.round(+blue * multiplier + rest);

  return alpha ? `rgba(${resultColor},${alpha})` : `rgb(${resultColor})`;
}
