import {ctxOfPage, removeElement, setCtxOfPage} from "./utils";
import {OBJWORDS as words} from "./objectWord";
import {addFavElemToArray} from "./favorites";


export function createFlashCards({wordName, wordTranslate}) {
    const flipContainer = window.document.createElement("div");
    const flippable = window.document.createElement("div");
    const frontFlashCards = window.document.createElement("div");
    const backFlashCards = window.document.createElement("div");
    const favElemIcon = window.document.createElement("i");


    flipContainer.className = "flip-container";
    flippable.className = "flippable";
    frontFlashCards.className = "front";
    backFlashCards.className = "back";
    favElemIcon.className = "far fa-star";

    frontFlashCards.innerHTML = wordName;
    backFlashCards.innerHTML = wordTranslate;

    favElemIcon.addEventListener("click", addFavElemToArray);
    flippable.addEventListener("click", function () {
        this.classList.toggle("flipme");
    });

    const wordContent = window.document.querySelector(".word-content");

    frontFlashCards.appendChild(favElemIcon);
    backFlashCards.appendChild(favElemIcon);
    flippable.appendChild(frontFlashCards);
    flippable.appendChild(backFlashCards);
    flipContainer.appendChild(flippable);
    wordContent.appendChild(flipContainer);
}

// flash-cardsCtx LISTENER
window.document.querySelector(".flash-cards").addEventListener("click", () => {
    removeElement("examples-container");
    removeElement("flip-container");
    if (ctxOfPage === "examples" || ctxOfPage === "favorites")
        createFlashCards(words[0]);
    setCtxOfPage("flash-cards");
});

function isFocusOutsideOfTheInputBox() {
    const isFocusOnSearchBox = document.activeElement.className === "search-box";
    const isFocusOnAddNewElemInput = document.activeElement.className === "add-new-elem-input";
    const isFocusOutsideOfTheInputBox = !(isFocusOnSearchBox || isFocusOnAddNewElemInput);

    return isFocusOutsideOfTheInputBox;
}

window.addEventListener("keypress", function (e) {
    if (e.code === "Space" && ctxOfPage === "flash-cards" && isFocusOutsideOfTheInputBox()) {
        document.querySelector(".flippable").classList.toggle("flipme");
    }
});