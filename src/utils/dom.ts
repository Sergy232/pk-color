import { MathUtils } from './math';

export const IS_TOUCH = 'ontouchstart' in window;

/** Class for bi-dimensional coordinates */
export class Coordinates {
  /** */
  constructor(
    public x: number = 0,
    public y: number = 0,
  ) {}
};

/** */
export class DOMUtils {
  /** Type-safe query selector. */
  public static qSelect<T extends HTMLElement>(selector: string): T {
    const element = document.querySelector<T>(selector);

    if (this._isT(element)) {
      return element;
    }

    throw new Error(`No element in the DOM for the selector ${selector}`);
  }

  /** Given a native HTMLDivElement and an event,
   * returns the coordinates of the event clamped
   * to the bounds of the HTMLDivElement.
   */
  public static getClampedCoordinates(
    element: HTMLDivElement,
    e: MouseEvent | TouchEvent,
  ): Coordinates {
    const { clientX, clientY } =
      DOMUtils.isTouchEvent(e) ? DOMUtils.getTouch(e, 0) : e;

    const { left, top, height, width } = element.getBoundingClientRect();

    return new Coordinates(
      MathUtils.clamp(0, clientX - left, width),
      MathUtils.clamp(0, clientY - top, height),
    );
  }

  /** Type-safe Touch getter. */
  public static getTouch(e: TouchEvent, index: number): Touch {
    const touch = e.touches.item(index);

    if (this._isT(touch)) {
      return touch;
    }

    throw new Error(`No touch element found for event ${e}`);
  }

  /** Determines if an event is a TouchEvent or MouseEvent. */
  public static isTouchEvent(e: TouchEvent | MouseEvent): e is TouchEvent {
    return 'touches' in e;
  }

  /** Adds an event listener.
   * @param event Event to listen to.
   * @param cb Callback function for when the event triggers.
   */
  public static listen(event: string, cb: (e: Event) => any): void {
    document.addEventListener(event, cb);
  }

  /** Removes an event listener.
   * @param event Event to listen to.
   * @param cb Callback function for when the event triggers.
   */
  public static ignore(event: string, cb: (e: Event) => any): void {
    document.removeEventListener(event, cb);
  }

  /** Returns a type predicate indicating if the HTML element
   * @param element exists or not.
   */
  private static _isT<T>(element: T | null): element is T {
    return element !== null;
  }
}
