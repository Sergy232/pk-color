import { MathUtils } from './math';
import { memoize } from './memoizer';

/** TODO */
export class HSV {
  /** TODO */
  constructor(
    public h: number,
    public s: number,
    public v: number,
  ) {}
}

/** TODO */
export class ColorUtils {
  public static rgbLinearShade = memoize(_rgbLinearShade);
  public static hslFromHsv = memoize(_hslFromHsv);

  /** TODO */
  public static randomRGBColor(): string {
    const red = MathUtils.randomBetween(0, 255);
    const green = MathUtils.randomBetween(0, 255);
    const blue = MathUtils.randomBetween(0, 255);

    return `rgb(${red},${green},${blue})`;
  }
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
    Math.round(parseInt(rawRed) * multiplier + rest) + ',' +
    Math.round(parseInt(green) * multiplier + rest) + ',' +
    Math.round(parseInt(blue) * multiplier + rest);

  return alpha ? `rgba(${resultColor},${alpha})` : `rgb(${resultColor})`;
}

/** Given a color in HSV format, returns a valid hsl() color definition. */
function _hslFromHsv({ h, s, v }: HSV): string {
  const l = (2 - s / 100) * v / 2; // lightness (0-100)
  const _s = s * v / (l < 50 ? l * 2 : 200 - l * 2); // saturation (0-100)

  return `hsl(${h},${isNaN(_s) ? 0 : _s}%,${l}%)`;
}
