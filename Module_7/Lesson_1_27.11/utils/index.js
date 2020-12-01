function getRefs(refs) {
  const keys = Object.keys(refs); // []
  for (const key of keys) {
    refs[key] = document.querySelector(`.${key}`);
  }
}

function getRef(refs, cls) {
  refs[`${cls.slice(1)}`] = document.querySelector(cls);
}

function addElement(elementName, cls, place, refs) {
  const element = document.createElement(elementName);
  element.classList.add(cls);
  place.append(element);
  getRef(refs, `.${cls}`);
}

// export { getRefs, getRef, addElement };
