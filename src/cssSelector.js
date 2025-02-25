class CSSSelector {
  constructor() {
    this.parts = {
      element: '',
      id: '',
      classes: [],
      attributes: [],
      pseudoClasses: [],
      pseudoElements: '',
    };
  }

  element(value) {
    if (this.parts.element) throw new Error('Element can only be set once');
    this.parts.element = value;
    return this;
  }

  id(value) {
    if (this.parts.id) throw new Error('ID can only be set once');
    this.parts.id = `#${value}`;
    return this;
  }

  class(value) {
    this.parts.classes.push(`.${value}`);
    return this;
  }

  attr(value) {
    this.parts.attributes.push(`[${value}]`);
    return this;
  }

  pseudoClass(value) {
    this.parts.pseudoClasses.push(`:${value}`);
    return this;
  }

  pseudoElement(value) {
    if (this.parts.pseudoElements)
      throw new Error('Pseudo-element can only be set once');
    this.parts.pseudoElements = `::${value}`;
    return this;
  }

  stringify() {
    const parts = [
      this.parts.element,
      this.parts.id,
      ...this.parts.classes,
      ...this.parts.attributes,
      ...this.parts.pseudoClasses,
      this.parts.pseudoElements,
    ];
    return parts.join('');
  }
}

export default CSSSelector;
