// eslint-disable-next-line no-undef
export {hoverMouseAndDisplayWordContent}
const words = OBJWORDS;














f






// deleteNavigationWord LISTENER
const allCircleIcon = document.querySelectorAll(".circle-icon");
for (let i = 0; i < allCircleIcon.length; i++) {
    allCircleIcon[i].addEventListener("click", deleteNavigationWord);
}

// allBlankCircle LISTENER
const allBlankCircle = document.querySelectorAll(".blank-circle");
for (let i = 0; i < allBlankCircle.length; i++) {
    allBlankCircle[i].addEventListener("click", progresBar);
}
// searchWord LISTENER

document.querySelector("#search-box").addEventListener("keyup", searchWord);




// flash-cardsCtx LISTENER
document.querySelector(".flash-cards").addEventListener("click", () => {
    removeElement("examples-container");
    if (ctxOfPage === "examples" || ctxOfPage === "favorites")
        createFlashCards(words[0]);
    ctxOfPage = "flash-cards"
});

// favoritesCtx LISTENER
document.querySelector(".favorites").addEventListener("click", () => {
    // TODO dodac if sprwdzajacy jaki contex usunac
    removeElement("examples-container");
    removeElement("flip-container");
    ctxOfPage = "favorites";
});

(function setNumberOfLoadedWords(numOfWords) {
    document.querySelector("#complete").innerHTML = 0 + " / " + numOfWords;
})(valueOfLastItem);


