import utils from "src/libs/utils";
import { on } from "src/libs/event";

const context = "vue-outclick-context";
let nodeList = [];
let createDocumentHandler = function(el, binding) {
  return function(e) {
    if (!e.target || el.contains(e.target)) {
      return;
    }

    el[context] && el[context].method && el[context].method(e);
  };
};

on(document, "mousedown", function(e) {
  nodeList.forEach(node => node[context].documentHandler(e));
});

export default {
  bind(el, binding) {
    nodeList.push(el);

    el[context] = {
      id: utils.guid(),
      documentHandler: createDocumentHandler(el, binding),
      method: binding.value
    };
  },
  update(el, binding) {
    el[context].documentHandler = createDocumentHandler(el, binding);
    el[context].method = binding.value;
  },
  unbind(el) {
    let i = 0;
    let length = nodeList.length;

    for (; i < length; i++) {
      let node = nodeList[i];

      if (node[context].id === el[context].id) {
        nodeList.splice(i, 1);
        break;
      }
    }

    delete el[context];
  }
};