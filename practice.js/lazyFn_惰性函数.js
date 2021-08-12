// 普通函数，每一次执行addEvent，都会去走if分支
function addEvent(element, type, handler) {
  if (window.addEventListener) {
    element.addEventListener(type, handler, false);
  } else if (window.attachEvent) {
    element.attachEvent(`on${type}`, handler);
  } else {
    element[`on${type}`] = handler;
  }
}

// 惰性函数，第一次执行后，函数确定下来了，同时函数也被改写了，以后执行该函数就不会走if分支了

function addEventLazy(element, type, handler) {
  if (window.addEventListener) {
    addEventLazy = function (element, type, handler) {
      element.addEventListener(type, handler, false);
    };
  } else if (window.attachEvent) {
    addEventLazy = function (element, type, handler) {
      element.attachEvent(`on${type}`, handler);
    };
  } else {
    addEventLazy = function (element, type, handler) {
      element[`on${type}`] = handler;
    };
  }
  addEventLazy(element, type, handler);
}
