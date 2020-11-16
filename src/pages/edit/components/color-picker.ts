import {
  ColorUtils as Color,
  Coordinates,
  DOMUtils as DOM,
  IS_TOUCH,
  HSV,
} from '../../../utils';

const html = /* html */ `
  <div class="color-picker__container">
    <div class="color-picker__saturation">
      <div class="color-picker__saturation-box"></div>
      <div class="color-picker__saturation-handle"></div>
    </div>
    <div class="color-picker__hue">
      <div class="color-picker__hue-slider"></div>
      <div class="color-picker__hue-handle"></div>
    </div>
  </div>
`;

/** TODO */
export class PkColorPicker {
  private id: string;
  // DOM elements
  private saturationBackground: HTMLDivElement;
  private saturation: HTMLDivElement;
  private satHandle: HTMLDivElement;
  private hue: HTMLDivElement;
  private hueHandle: HTMLDivElement;

  // Selected colors in (h,s,l) format
  private currentColor: string;
  private hueColor: string;

  // Current handle positions
  private satPosition = new Coordinates();
  private hueDegrees = 0;

  // Color picker dimentions. This will be dynamic in the future.
  private height = 300;
  private width = 300;

  /** */
  constructor(id: string) {
    this.id = id;

    this.renderColorPicker(this.id);
    this.initColorPicker();
  }

  /** TODO */
  private renderColorPicker(id: string): void {
    // document.getElementById(id)?.
  }

  /** */
  private initColorPicker() {
    this.saturationBackground = DOM.qSelect('.color-picker__saturation');
    this.saturation = DOM.qSelect('.color-picker__saturation-box');
    this.satHandle = DOM.qSelect('.color-picker__saturation-handle');
    this.hue = DOM.qSelect('.color-picker__hue-slider');
    this.hueHandle = DOM.qSelect('.color-picker__hue-handle');

    // TODO remove event listeners when navigating out of the edit page
    IS_TOUCH ? this._initTouchEvents() : this._initMouseEvents();
  }

  /** */
  private _initTouchEvents(): void {
    this.saturation.addEventListener('touchstart', this._initSaturationTouch);
    this.satHandle.addEventListener('touchstart', this._initSaturationTouch);
    this.hue.addEventListener('touchstart', this._initHueTouch);
    this.hueHandle.addEventListener('touchstart', this._initHueTouch);
  }

  /** */
  private _initMouseEvents(): void {
    this.saturation.addEventListener('mousedown', this._initSaturationClick);
    this.satHandle.addEventListener('mousedown', this._initSaturationClick);
    this.hue.addEventListener('mousedown', this._initHueClick);
    this.hueHandle.addEventListener('mousedown', this._initHueClick);
  }

  /** Saturation DOM event related functions */

  private _initSaturationTouch = (e: TouchEvent) => {
    DOM.listen('touchmove', this._onSaturationInteraction);
    DOM.listen('touchend', this._onSaturationRelease);

    this._onSaturationInteraction(e);
  }

  private _initSaturationClick = (e: MouseEvent) => {
    DOM.listen('mousemove', this._onSaturationInteraction);
    DOM.listen('mouseup', this._onSaturationUnclick);

    this._onSaturationInteraction(e);
  }

  /** */
  private _onSaturationInteraction = (e: MouseEvent | TouchEvent) => {
    this.satPosition = DOM.getClampedCoordinates(this.saturation, e);

    this.setSaturationHandlerPosition(this.satPosition);
    this.updateCurrentColor(this.hueDegrees);
  }

  private _onSaturationRelease = (_: TouchEvent) => {
    DOM.ignore('touchmove', this._onSaturationInteraction);
    DOM.ignore('touchend', this._onSaturationRelease);
  }

  private _onSaturationUnclick = (_: MouseEvent) => {
    DOM.ignore('mousemove', this._onSaturationInteraction);
    DOM.ignore('mouseup', this._onSaturationUnclick);
  }

  /** Hue DOM event related functions */

  private _initHueTouch = (e: TouchEvent) => {
    DOM.listen('touchmove', this._onHueInteraction);
    DOM.listen('touchend', this._onHueRelease);

    this._onHueInteraction(e);
  }

  private _initHueClick = (e: MouseEvent) => {
    DOM.listen('mousemove', this._onHueInteraction);
    DOM.listen('mouseup', this._onHueUnclick);

    this._onHueInteraction(e);
  }

  private _onHueInteraction = (e: MouseEvent | TouchEvent) => {
    const { x } = DOM.getClampedCoordinates(this.hue, e);

    this.setHueHandlerPosition(x);
    this.setColorFromHueInteraction(x);
  }

  private _onHueRelease = (_: TouchEvent) => {
    DOM.ignore('touchmove', this._onHueInteraction);
    DOM.ignore('touchend', this._onHueRelease);
  }

  private _onHueUnclick = (_: MouseEvent) => {
    DOM.ignore('mousemove', this._onHueInteraction);
    DOM.ignore('mouseup', this._onHueUnclick);
  }

  /** */
  private setSaturationHandlerPosition({ x, y }: Coordinates): void {
    this.satHandle.style.transform = `translate(${x}px, ${y}px)`;
  }

  /** */
  private setHueHandlerPosition(x: number): void {
    this.hueHandle.style.transform = `translateX(${x}px)`;
  }

  /** */
  private setColorFromHueInteraction(x: number): void {
    this.hueDegrees = x * 360 / this.width; // Hue spectre goes from 0 to 360
    this.hueColor = `hsl(${this.hueDegrees}, 100%, 50%)`;

    this.setHueHandlerColor(this.hueColor);
    this.setSaturationBackgroundGradient(this.hueColor);

    this.updateCurrentColor(this.hueDegrees);
  }

  /** */
  private setSaturationBackgroundGradient(color: string): void {
    const gradient = `linear-gradient(to right, #fff, ${color})`;

    this.saturationBackground.style.background = gradient;
  }

  /** TODO make this a generic function and externalize to color.ts library */
  private updateCurrentColor(hueDegrees: number) {
    const { x, y } = this.satPosition;

    this.setSatHandlerColor(
      Color.hslFromHsv(
        new HSV(
          hueDegrees,
          (x / this.width) * 100,
          (1 - y / this.height) * 100,
        ),
      ),
    );
  }

  /** Sets the @param color to as the current color and the
   * Background color of the saturation handle.
   */
  private setHueHandlerColor(color: string): void {
    this.hueColor = color;
    this.hueHandle.style.backgroundColor = color;
  }

  /** Sets the @param color to as the current color and the
   * Background color of the saturation handle.
   */
  private setSatHandlerColor(color: string): void {
    this.currentColor = color;
    this.satHandle.style.backgroundColor = color;
  }
}
