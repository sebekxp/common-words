import {removeElement, setCtxOfPage} from "./utils";
import {OBJWORDS as words} from "./objectWord";
import {createNavigationWord} from "./navigationWord";


export const favWords = [];

export function addFavElemToArray(evt) {
    favWords.push(evt.currentTarget.parentElement.textContent);
}

function createFavNavigationWords() {
    for (let favWord of favWords) {
        for (let word of words) {
            if (word.wordName === favWord)
                createNavigationWord(word);
        }
    }

}

function deleteAllNavigationWords() {
    document.querySelectorAll(".navigation-word").forEach(el => el.remove());
}

// favoritesCtx LISTENER
window.document.querySelector(".favorites").addEventListener("click", () => {
    // TODO dodac if sprwdzajacy jaki contex usunac
    removeElement("examples-container");
    removeElement("flip-container");
    setCtxOfPage("favorites");
    deleteAllNavigationWords();
    createFavNavigationWords();
});


