import {createPopup, valueOfLastItem} from "./utils";
import {OBJWORDS as words} from "./objectWord";
import {hoverMouseAndDisplayWordContent} from "./contentOfWord";
import {addFavElemToArray} from "./favorites";

for (let word of words) {
    createNavigationWord(word);
}

export function createNavigationWord(wordObj) {
    const navigationWord = window.document.createElement("div");
    const circleIconDiv = window.document.createElement("div");
    const blankCircleDiv = window.document.createElement("p");
    const wordNameDiv = window.document.createElement("p");
    const deleteElemIcon = window.document.createElement("i");
    const favElemIcon = window.document.createElement("i");

    navigationWord.className = "navigation-word";
    circleIconDiv.className = "circle-icon";
    blankCircleDiv.className = "blank-circle far fa-circle";
    blankCircleDiv.title = "Mark as known word";
    wordNameDiv.className = "words";
    deleteElemIcon.className = "deleteElem fas fa-times";
    deleteElemIcon.title = "Delete word";
    favElemIcon.className = "far fa-star";
    favElemIcon.title = "Add to favorites words";


    blankCircleDiv.addEventListener("click", progresBar);
    circleIconDiv.addEventListener("click", deleteNavigationWord);
    navigationWord.addEventListener("mouseover", hoverMouseAndDisplayWordContent);
    favElemIcon.addEventListener("click", addFavElemToArray);

    wordNameDiv.innerHTML = wordObj.wordName;

    circleIconDiv.appendChild(deleteElemIcon);
    navigationWord.appendChild(circleIconDiv);
    navigationWord.appendChild(blankCircleDiv);
    wordNameDiv.appendChild(favElemIcon);
    navigationWord.appendChild(wordNameDiv);

    window.document.querySelector(".list-of-words").appendChild(navigationWord);
    updateProgressBar();
}

function progresBar(evt) {
    if (evt.target.classList[1] === "far") {
        evt.target.className =
            evt.target.classList[0] + " filled-circle fas fa-check-circle";
        createPopup(evt, "Marked as known word")
    } else {
        evt.target.className =
            evt.target.classList[0] + " blank-circle far fa-circle";
        createPopup(evt, "Marked as unknown word")
    }
    updateProgressBar();
}

function deleteNavigationWord(evt) {
    evt.currentTarget.parentElement.remove();
    createPopup(evt, "The item has been deleted");
    updateProgressBar();
}

function addNewElement() {
    const inputValue = window.document.querySelector(".add-new-elem-input").value;
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
    window.document.querySelector(".add-new-elem-input").value = "";
}

function updateProgressBar() {
    const KNOW_WORDS = window.document.querySelectorAll(".filled-circle");
    const currentProgress = getCurrentProgress(KNOW_WORDS);

    currentProgressInNumber(KNOW_WORDS.length);
    window.document.querySelector(".progBar").style.width = currentProgress + "%";
}

function getCurrentProgress(KNOW_WORDS) {
    const numOfKnownWords = KNOW_WORDS.length;
    const percentageValue = 100 / valueOfLastItem;

    return numOfKnownWords * percentageValue;
}

function currentProgressInNumber(numOfKnownWords) {
    window.document.querySelector("#complete").innerHTML =
        numOfKnownWords + " / " + valueOfLastItem;
}

function useEnterToCreateNewWord() {
    if (event.which === 13 || event.keyCode === 13) {
        addNewElement();
    }
}

(function setNumberOfLoadedWords(numOfWords) {
    window.document.querySelector("#complete").innerHTML = 0 + " / " + numOfWords;
})(valueOfLastItem);

// addNewElement LISTENER
window.document
    .querySelector(".circle-icon-add-element")
    .addEventListener("click", addNewElement);

// useEnterToCreateNewWord LISTENER
window.document
    .querySelector(".add-new-elem-input")
    .addEventListener("keypress", useEnterToCreateNewWord);

// deleteNavigationWord LISTENER
const allCircleIcon = window.document.querySelectorAll(".circle-icon");
for (let i = 0; i < allCircleIcon.length; i++) {
    allCircleIcon[i].addEventListener("click", deleteNavigationWord);
}

// allBlankCircle LISTENER
const allBlankCircle = window.document.querySelectorAll(".blank-circle");
for (let i = 0; i < allBlankCircle.length; i++) {
    allBlankCircle[i].addEventListener("click", progresBar);
}
