import * as DOM from '../../lib/dom';
import { ColorUtils as Color } from '../../utils/color';

export const edit = /* html */`
  <div>Hello Edit Page</div>
`;

/** TODO wrap this execution inside a function */
const groups = DOM.byTag<SVGGElement>('g');

for (let i = 0; i < groups.length; i++) {
  const group = groups[i];

  const className = group.className.baseVal;

  if (className) {
    // Note SP 31.10.2020 This should go in the edit page in the future.
    group.onmouseenter = () => setActiveState(className, true);
    group.onmouseleave = () => setActiveState(className, false);
    group.onclick = () => changeColor(className);
  }
}

/** Highlight other <g> tags with the same class (color pattern) */
function setActiveState(className: string, activate: boolean) {
  const siblings = DOM.byClass<SVGGElement>(className);

  for (let i = 0; i < siblings.length; i++) {
    const sibling = siblings[i];

    activate ?
      sibling.classList.add('active') :
      sibling.classList.remove('active');
  }
}

/** TODO jsdoc */
function changeColor(className: string) {
  const newColor = Color.randomRGBColor();

  const groups = DOM.byClass<SVGGElement>(className);

  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];

    for (let i = 0; i < group.children.length; i++) {
      const path = group.children[i] as SVGPathElement;

      paintPath(path, newColor);
    }
  }
}

/** TODO jsdoc */
function paintPath(path: SVGPathElement, rgbColor: string) {
  const percentage = 0.3;
  const className = path?.className?.baseVal;

  // TODO enums
  if (className === 'main') {
    path.style.fill = rgbColor;

    return;
  }

  if (className === 'bright') {
    path.style.fill = Color.rgbLinearShade(rgbColor, percentage);

    return;
  }

  if (className === 'dark') {
    path.style.fill = Color.rgbLinearShade(rgbColor, -percentage);

    return;
  }
}
