let unorderedList = document.querySelector("#parentLi");
console.log(unorderedList);
let listElements = unorderedList.childNodes;
unorderedList.removeChild(listElements[3]);
