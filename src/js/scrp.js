let valueofLastItem = getValueOfLastItem();
const words = OBJWORDS;

document.querySelector("#complete").innerHTML = 0 + " / " + valueofLastItem;
createContentOfWord(words[0]);

for (let word of words) {
  createNavigationWord(word);
}

function createNavigationWord(wordObj) {
  const wordTitleDiv = document.createElement("div");
  const circleIconDiv = document.createElement("div");
  const blankCircleDiv = document.createElement("p");
  const wordNameDiv = document.createElement("p");
  const deleteElemI = document.createElement("i");

  wordTitleDiv.className = "word-title";
  circleIconDiv.className = "circle-icon";
  blankCircleDiv.className = "blank-circle far fa-circle";
  wordNameDiv.className = "words";
  deleteElemI.className = "deleteElem fas fa-times";

  blankCircleDiv.addEventListener("click", progresBar);
  circleIconDiv.addEventListener("click", deleteNavigationWord);

  wordNameDiv.innerHTML = wordObj.wordName;
  wordTitleDiv.addEventListener("mouseover", hoverMouseAndDisplayWordContent);
  circleIconDiv.appendChild(deleteElemI);
  wordTitleDiv.appendChild(circleIconDiv);
  wordTitleDiv.appendChild(blankCircleDiv);
  wordTitleDiv.appendChild(wordNameDiv);

  document.querySelector(".list-of-words").appendChild(wordTitleDiv);
  valueofLastItem = getValueOfLastItem();
  updateProgressBar();
}

function getValueOfLastItem() {
  return document.querySelectorAll(".word-title").length;
}

function updateProgressBar() {
  const KNOW_WORDS = document.querySelectorAll(".filled-circle");
  const WIDTH = KNOW_WORDS.length * (100 / valueofLastItem);
  document.querySelector("#complete").innerHTML =
    KNOW_WORDS.length + " / " + valueofLastItem;
  document.querySelector(".progBar").style.width = WIDTH + "%";
}

function hoverMouseAndDisplayWordContent(evt) {
  let emptyString = "";
  let index = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].wordName === evt.target.innerHTML) {
      index = i;
    }
  }

  let wordContentAllParagraph = document.querySelectorAll(".word-content p");
  let wordContentAllH2 = document.querySelectorAll(".word-content h2");

  for (let i of wordContentAllParagraph) {
    i.innerHTML = emptyString;
  }
  for (let i of wordContentAllH2) {
    i.innerHTML = emptyString;
  }
  createContentOfWord(words[index]);
}

function createContentOfWord({ wordName, wordTranslate, examples }) {
  const wordContentContainer = document.querySelector(".word-content");
  const nameWord = document.createElement("h2");
  
  nameWord.innerHTML = wordName + " - " + wordTranslate;
  wordContentContainer.appendChild(nameWord);

  let exampleContents = [examples.length];
  for (let example of examples) {
    exampleContents = document.createElement("p");
    exampleContents.innerHTML = example;
    wordContentContainer.appendChild(exampleContents);
  }
}

function searchWord() {
  let searchBoxValue = document.getElementById("search-box").value.toUpperCase();
  let listOfWords = document.getElementsByClassName("list-of-words")[0];
  let wordsContent = listOfWords.getElementsByClassName("words");
  let wordTitle = document.getElementsByClassName("word-title");

  for (let i = 0; i < wordsContent.length; i++) {
    if (wordsContent[i].innerHTML.toUpperCase().includes(searchBoxValue)) {
      wordTitle[i].style.display = "";
    } else {
      wordTitle[i].style.display = "none";
    }
  }
}

function progresBar(evt) {
  if (evt.target.classList[1] === "far") {
    evt.target.className =
      evt.target.classList[0] + " filled-circle fas fa-check-circle";
  } else {
    evt.target.className =
      evt.target.classList[0] + " blank-circle far fa-circle";
  }

  updateProgressBar();
}

function useEnterToCreateNewWord() {
  if (event.which == 13 || event.keyCode == 13) {
    addElement();
  }
}
function addElement() {
  const inputValue = document.querySelector(".input-name").value;
  if (inputValue === "") {
    words.push({
      wordName: "default name",
      wordContent: []
    });
  } else
    words.push({
      wordName: inputValue,
      wordContent: []
    });

  createNavigationWord(words[words.length - 1]);
  document.querySelector(".input-name").value = "";
}


function deleteNavigationWord(evt) {
  evt.currentTarget.parentElement.remove();
  valueofLastItem = getValueOfLastItem();
  updateProgressBar();
}

addListeners();
function addListeners() {
  let allCircleIcon = document.querySelectorAll(".circle-icon");
  for (let i = 0; i < allCircleIcon.length; i++) {
    allCircleIcon[i].addEventListener("click", deleteNavigationWord);
  }

  let allBlankCircle = document.querySelectorAll(".blank-circle");
  for (let i = 0; i < allBlankCircle.length; i++) {
    allBlankCircle[i].addEventListener("click", progresBar);
  }
  document.querySelector("#search-box").addEventListener("keyup", searchWord);
  document
    .querySelector(".circle-icon-add-element")
    .addEventListener("click", addElement);
  document
    .querySelector(".input-name")
    .addEventListener("keypress", useEnterToCreateNewWord);
}
