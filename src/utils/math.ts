/** TODO */
export class MathUtils {
  /** */
  public static randomBetween(min: number, max: number): number {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  /** */
  public static clamp(min: number, val: number, max: number) {
    return Math.max(min, Math.min(max, val));
  }
}
