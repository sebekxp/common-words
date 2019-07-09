import {valueOfLastItem} from "./utils";
import {getValueOfLastItem} from "./utils";
import {OBJWORDS as words} from "./objectWord";

for (let word of words) {
    createNavigationWord(word);
}

function createNavigationWord(wordObj) {
    const navigationWord = document.createElement("div");
    const circleIconDiv = document.createElement("div");
    const blankCircleDiv = document.createElement("p");
    const wordNameDiv = document.createElement("p");
    const deleteElemIcon = document.createElement("i");
    const favElemIcon = document.createElement("i");

    navigationWord.className = "navigation-word";
    circleIconDiv.className = "circle-icon";
    blankCircleDiv.className = "blank-circle far fa-circle";
    wordNameDiv.className = "words";
    deleteElemIcon.className = "deleteElem fas fa-times";
    favElemIcon.className = "far fa-star";

    blankCircleDiv.addEventListener("click", progresBar);
    circleIconDiv.addEventListener("click", deleteNavigationWord);
    navigationWord.addEventListener("mouseover", hoverMouseAndDisplayWordContent);

    wordNameDiv.innerHTML = wordObj.wordName;

    circleIconDiv.appendChild(deleteElemIcon);
    navigationWord.appendChild(circleIconDiv);
    navigationWord.appendChild(blankCircleDiv);
    wordNameDiv.appendChild(favElemIcon);
    navigationWord.appendChild(wordNameDiv);

    document.querySelector(".list-of-words").appendChild(navigationWord);
    valueOfLastItem = getValueOfLastItem();
    updateProgressBar();
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

function deleteNavigationWord(evt) {
    evt.currentTarget.parentElement.remove();
    valueOfLastItem = getValueOfLastItem();
    updateProgressBar();
}

function addNewElement() {
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
    // When we add new element it has [words.length - 1] index
    createNavigationWord(words[words.length - 1]);
    document.querySelector(".input-name").value = "";
}

function updateProgressBar() {
    const KNOW_WORDS = document.querySelectorAll(".filled-circle");
    const currentProgress = getCurrentProgress(KNOW_WORDS);

    currentProgressInNumber(KNOW_WORDS.length);
    document.querySelector(".progBar").style.width = currentProgress + "%";
}

function getCurrentProgress(KNOW_WORDS) {
    const numOfKnownWords = KNOW_WORDS.length;
    const percentageValue = 100 / valueOfLastItem;

    return numOfKnownWords * percentageValue;
}

function currentProgressInNumber(numOfKnownWords) {
    document.querySelector("#complete").innerHTML =
        numOfKnownWords + " / " + valueOfLastItem;
}

function useEnterToCreateNewWord() {
    if (event.which === 13 || event.keyCode === 13) {
        addNewElement();
    }
}

// addNewElement LISTENER
document
    .querySelector(".circle-icon-add-element")
    .addEventListener("click", addNewElement);

// useEnterToCreateNewWord LISTENER
document
    .querySelector(".input-name")
    .addEventListener("keypress", useEnterToCreateNewWord);


