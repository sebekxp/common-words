// eslint-disable-next-line no-undef
const words = OBJWORDS;
let ctxOfPage = "examples";
let valueOfLastItem = getValueOfLastItem();

// Content of words are created dynamical
// only if user hover right element.
// We want to see the first example right after
// loading the page without hovering on element
createContentOfWord(words[0]);

for (let word of words) {
    createNavigationWord(word);
}

function createContentOfWord({wordName, wordTranslate, examples}) {
    const keyWordHeader = document.createElement("div");
    const headerH2 = document.createElement("h2");
    const firstExampleWords = document.createElement("div");
    const moreExamples = document.createElement("div");

    let exampleContents;
    let example = examples;
    for (let i = 0; i < examples.length; i++) {
        exampleContents = document.createElement("p");
        exampleContents.className = "exampleContents";
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

    const exampleContainers = document.createElement("div");
    exampleContainers.className = "examples-container";

    keyWordHeader.className = "key-word-header";
    keyWordHeader.id = "key-word-header";

    headerH2.innerHTML = wordName + " - " + wordTranslate;

    firstExampleWords.className = "first-example-word";
    firstExampleWords.id = "first-example-word";

    moreExamples.id = "more-examples";
    moreExamples.className = "more-examples";
    moreExamples.innerHTML = "Wiecej";

    moreExamples.addEventListener("click", moreExamplesBtn);
    const wordContentContainer = document.querySelector(".word-content");

    keyWordHeader.appendChild(headerH2);
    exampleContainers.appendChild(keyWordHeader);
    exampleContainers.appendChild(firstExampleWords);
    exampleContainers.appendChild(moreExamples);
    wordContentContainer.appendChild(exampleContainers);

    const heightExamples = calcHeightOfExamplesBox();
    firstExampleWords.style.height = heightExamples + "px";
}

function calcHeightOfExamplesBox() {
    let firstThreeExamples = document.getElementsByClassName("exampleContents");
    let heightExamples = 0;
    heightExamples += firstThreeExamples[0].getBoundingClientRect().height + 30;
    heightExamples += firstThreeExamples[1].getBoundingClientRect().height + 15;
    heightExamples += firstThreeExamples[2].getBoundingClientRect().height + 15;

    return heightExamples;
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

function getValueOfLastItem() {
    return document.querySelectorAll(".navigation-word").length;
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

function hoverMouseAndDisplayWordContent(evt) {
    for (let i = 0; i < words.length; i++) {
        if (words[i].wordName === evt.target.innerText) {
            if (ctxOfPage === "examples") {
                removeElement("examples-container");
                createContentOfWord(words[i]);

            } else if (ctxOfPage === "flash-cards") {
                removeElement("flip-container");
                createFlashCards(words[i]);
            }
        }
    }
}

function removeElement(className) {
    const wordContent = document.querySelector(".word-content");
    const element = document.getElementsByClassName(className);
    if (element.length !== 0)
        wordContent.removeChild(element[0]);
}

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

function searchWord() {
    // We use toUpperCase because we
    // want to ignore case sensitive
    let searchBoxValue = document
        .getElementById("search-box")
        .value.toUpperCase();

    const listOfWords = document.getElementsByClassName("list-of-words")[0];
    const words = listOfWords.getElementsByClassName("words");
    const wordTitle = document.getElementsByClassName("navigation-word");

    for (let i = 0; i < words.length; i++) {
        const wordText = words[i].innerHTML.toUpperCase();
        if (wordText.includes(searchBoxValue)) {
            wordTitle[i].style.display = "";
        } else {
            wordTitle[i].style.display = "none";
        }
    }
}

function moreExamplesBtn() {
    const allExamples = document.querySelectorAll(".more-examples p");
    const textBtn = document.getElementById("more-examples");
    const heightExamples = document.getElementById("first-example-word");

    if (textBtn.innerHTML === "Wiecej") {

        showMoreExamples(allExamples);
        const heightExamp = calcHeightOfGivenExample();
        heightExamples.style.height = heightExamp + "px";
        textBtn.innerHTML = "Mniej";

    } else if (textBtn.innerHTML === "Mniej") {

        showLessExamples(allExamples);
        const heightExamp = calcHeightOfExamplesBox();
        heightExamples.style.height = heightExamp + "px";
        textBtn.innerHTML = "Wiecej";

    }
}

function showMoreExamples(allExamples) {
    for (const it of allExamples) {
        it.style.display = "block";
    }
}

function showLessExamples(allExamples) {
    for (const it of allExamples) {
        it.style.display = "none";
    }
}

function calcHeightOfGivenExample() {
    const examples = document.getElementsByClassName("exampleContents");
    let heightExamp = examples[0].getBoundingClientRect().height + 30;

    for (let i = 0; i < examples.length; i++) {
        heightExamp += examples[i].getBoundingClientRect().height + 15;
    }
    return heightExamp;
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
    if (event.which === 13 || event.keyCode === 13) {
        addNewElement();
    }
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

function deleteNavigationWord(evt) {
    evt.currentTarget.parentElement.remove();
    valueOfLastItem = getValueOfLastItem();
    updateProgressBar();
}

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

// addNewElement LISTENER
document
    .querySelector(".circle-icon-add-element")
    .addEventListener("click", addNewElement);

// useEnterToCreateNewWord LISTENER
document
    .querySelector(".input-name")
    .addEventListener("keypress", useEnterToCreateNewWord);

// examplesCtx LISTENER
document.querySelector(".examples").addEventListener("click", () => {
    removeElement("flip-container");
    if (ctxOfPage === "flash-cards" || ctxOfPage === "favorites")
        createContentOfWord(words[0]);
    ctxOfPage = "examples";
});

// flash-cardsCtx LISTENER
document.querySelector(".flash-cards").addEventListener("click", () => {
    removeElement("examples-container");
    if (ctxOfPage === "examples" || ctxOfPage === "favorites")
        createFlashCards(words[0]);
    ctxOfPage = "flash-cards"
});

// favoritesCtx LISTENER
document.querySelector(".favorites").addEventListener("click", () => {
    removeElement();
    ctxOfPage = "favorites";
});

(function setNumberOfLoadedWords(numOfWords) {
    document.querySelector("#complete").innerHTML = 0 + " / " + numOfWords;
})(valueOfLastItem);


