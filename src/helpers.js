export function createElementWithClass(tagName, className) {
  const ele = document.createElement(tagName);
  ele.classList.add(className);
  return ele;
}

function createElementViaObject(tagName, props) {
  const ele = document.createElement(tagName);
  Object.entries(props).forEach(([key, value]) => {
    ele.setAttribute(key, value);
  });
  return ele;
}
