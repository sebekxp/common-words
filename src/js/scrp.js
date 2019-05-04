let valueofLastItem = getValueOfLastItem();
const words = OBJWORDS;
let wordContDivIn = [];

document.querySelector("#complete").innerHTML = 0 + " / " + valueofLastItem;

for (let word of words) {
  createNavigationWord(word);
  createContentOfWord(word);
}

function createNavigationWord(wordObj) {
  const navigationWord = document.createElement("div");
  const circleIconDiv = document.createElement("div");
  const blankCircleDiv = document.createElement("p");
  const wordNameDiv = document.createElement("p");
  const deleteElemI = document.createElement("i");

  navigationWord.className = "navigation-word";
  circleIconDiv.className = "circle-icon";
  blankCircleDiv.className = "blank-circle far fa-circle";
  wordNameDiv.className = "words";
  deleteElemI.className = "deleteElem fas fa-times";

  blankCircleDiv.addEventListener("click", progresBar);
  circleIconDiv.addEventListener("click", deleteNavigationWord);

  wordNameDiv.innerHTML = wordObj.wordName;
  navigationWord.addEventListener("mouseover", hoverMouseAndDisplayWordContent);
  circleIconDiv.appendChild(deleteElemI);
  navigationWord.appendChild(circleIconDiv);
  navigationWord.appendChild(blankCircleDiv);
  navigationWord.appendChild(wordNameDiv);

  document.querySelector(".list-of-words").appendChild(navigationWord);
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
  for (let i = 0; i < words.length; i++) {
    if (words[i].wordName === evt.target.innerHTML) {
      wordContDivIn[i].style.display = "";
    } else {
      wordContDivIn[i].style.display = "none";
    }
  }
}

function createContentOfWord({ wordName, wordTranslate, examples }) {
  const keyWordHeader = document.createElement("div");
  const headerH2 = document.createElement("h2");
  const firstExampleWords = document.createElement("div");
  const moreExamples = document.createElement("div");
  const wordContentContainer = document.querySelector(".word-content");

  wordContDivIn.push(document.createElement("div"));

  let exampleContents;
  let example = examples;
  for (var i = 0; i < examples.length; i++) {
    exampleContents = document.createElement("p");
    example[i] = example[i].split(" ");
    for (let j = 0; j < example[i].length; j++) {
      if (example[i][j] === wordName) {
        example[i][j] = "<b>" + example[i][j] + "</b>";
      }
    }
    example[i] = example[i].join(" ");
    exampleContents.innerHTML = example[i];
    firstExampleWords.appendChild(exampleContents);
  }
  exampleContainers = document.createElement("div");

  exampleContainers.className = "examples-container";
  keyWordHeader.className = "key-word-header";
  keyWordHeader.id = "key-word-header";
  headerH2.innerHTML = wordName + " - " + wordTranslate;
  firstExampleWords.className = "first-example-word";
  firstExampleWords.id = "first-example-word";
  moreExamples.id = "more-examples";
  moreExamples.className = "more-examples";
  moreExamples.innerHTML = "More examples";

  keyWordHeader.appendChild(headerH2);
  exampleContainers.appendChild(keyWordHeader);
  exampleContainers.appendChild(firstExampleWords);
  exampleContainers.appendChild(moreExamples);
  if (wordName !== "a")
    wordContDivIn[wordContDivIn.length - 1].style.display = "none";
  wordContDivIn[wordContDivIn.length - 1].appendChild(exampleContainers);
  wordContentContainer.appendChild(wordContDivIn[wordContDivIn.length - 1]);
}

function searchWord() {
  let searchBoxValue = document
    .getElementById("search-box")
    .value.toUpperCase();
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
// examplesssss
document.getElementById("more-examples").addEventListener("click", moreExamplesBtn);

function moreExamplesBtn() {
  const moreExample = document.querySelectorAll(".more-examples p");
  let textBtn = document.getElementById("more-examples");

  let heightExamples = document.getElementById("first-example-word");
  if (textBtn.innerHTML === "Wiecej") {
    for (const it of moreExample) {
      it.style.display = "block";
    }
    heightExamples.style.height = "200px";
    textBtn.innerHTML = "Mniej";
  } else if (textBtn.innerHTML === "Mniej") {
    for (const it of moreExample) {
      it.style.display = "none";
    }
    heightExamples.style.height = "35%";
    textBtn.innerHTML = "Wiecej";
  }
}
