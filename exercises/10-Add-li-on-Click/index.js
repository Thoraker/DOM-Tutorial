let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let unorderedList = document.querySelector("#myList");
	let listElement = document.createElement("li");
	listElement.innerHTML = "Forth element";
	unorderedList.appendChild(listElement)
});
