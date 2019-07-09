export {createFlashCards}


function createFlashCards({wordName, wordTranslate}) {
    const flipContainer = document.createElement("div");
    const flippable = document.createElement("div");
    const frontFlashCards = document.createElement("div");
    const backFlashCards = document.createElement("div");

    flipContainer.className = "flip-container";
    flippable.className = "flippable";
    frontFlashCards.className = "front";
    backFlashCards.className = "back";

    frontFlashCards.innerHTML = wordName;
    backFlashCards.innerHTML = wordTranslate;

    flippable.addEventListener("click", function () {
        this.classList.toggle("flipme");
    });

    const wordContent = document.querySelector(".word-content");

    flippable.appendChild(frontFlashCards);
    flippable.appendChild(backFlashCards);
    flipContainer.appendChild(flippable);
    wordContent.appendChild(flipContainer);
}