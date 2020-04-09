var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var ulli = document.querySelectorAll('li')
var delBtn = document.querySelectorAll('button')

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement('button');
	btn.classList.add('DeleteButton');
	li.appendChild(document.createTextNode(input.value + ' '));
	btn.appendChild(document.createTextNode('Delete Item'));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
	doneToggle(li);
	deleteLi(btn);
}

function emptyAnimation(item) {
	item.classList.toggle('empty')
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	} else {
	 	emptyAnimation(input);
	}
}


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	} else if (inputLength() === 0 && event.keyCode === 13) {
	 	emptyAnimation(input);
	}
}

function doneToggleClass(item){
	item.classList.toggle('done')
}

function doneToggle (item) {
	item.addEventListener('click', function(){doneToggleClass(item)});
}

function deleteLi(item) {
	if (item.innerHTML === "Delete Item") {
		item.addEventListener('click', function(){ul.removeChild(item.parentNode)})
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ulli.forEach(doneToggle);

delBtn.forEach(deleteLi);
