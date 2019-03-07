function isWhitespaceNode(node) {
  return !/[^\t\n\r ]/.test(node.textContent);
}

export function generateCfiSteps(target, root = window.document.documentElement) {
  const treeWalker = window.document.createTreeWalker(
    root,
    window.NodeFilter.SHOW_ELEMENT + window.NodeFilter.SHOW_TEXT,
    {
      acceptNode: function (node) {
        if (node.nodeType === window.Node.TEXT_NODE && isWhitespaceNode(node)) {
          return window.NodeFilter.FILTER_REJECT;
        }
        return window.NodeFilter.FILTER_ACCEPT;
      }
    },
    false
  );

  let currentNode;
  if (target.nodeType === window.Node.TEXT_NODE) {
    currentNode = target.parentNode;
  } else {
    currentNode = target;
  }

  treeWalker.currentNode = currentNode;

  const path = [];
  do {
    let index = 1;
    while (treeWalker.previousSibling()) {
      index = index + 1;
    }
    path.push(index * 2);
    currentNode = treeWalker.parentNode();
  } while (currentNode && currentNode !== root);

  return `/${path.reverse().join('/')}`;
}
