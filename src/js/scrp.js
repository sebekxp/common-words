let valueOfLastItem = getValueOfLastItem();
// eslint-disable-next-line no-undef
const words = OBJWORDS;
let ctxOfPage = "examples";

document.querySelector("#complete").innerHTML = 0 + " / " + valueOfLastItem;
if (ctxOfPage === "examples")
    createContentOfWord(words[0]);

for (let word of words) {
    createNavigationWord(word);
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
    valueOfLastItem = getValueOfLastItem();
    updateProgressBar();
}

function getValueOfLastItem() {
    return document.querySelectorAll(".navigation-word").length;
}

function updateProgressBar() {
    const KNOW_WORDS = document.querySelectorAll(".filled-circle");
    const WIDTH = KNOW_WORDS.length * (100 / valueOfLastItem);
    document.querySelector("#complete").innerHTML =
        KNOW_WORDS.length + " / " + valueOfLastItem;
    document.querySelector(".progBar").style.width = WIDTH + "%";
}

function removeElement() {
    let wordContent = document.querySelector(".word-content");
    let element = document.getElementsByClassName("examples-container");
    if (element.length !== 0)
        wordContent.removeChild(element[0]);
}

function hoverMouseAndDisplayWordContent(evt) {
    for (let i = 0; i < words.length; i++) {
        if (words[i].wordName === evt.target.innerHTML) {
            if (ctxOfPage === "examples") {
                removeElement();
                createContentOfWord(words[i]);

            } else {
                removeElement();
            }
        }
    }
}

function createContentOfWord({wordName, wordTranslate, examples}) {
    const keyWordHeader = document.createElement("div");
    const headerH2 = document.createElement("h2");
    const firstExampleWords = document.createElement("div");
    const moreExamples = document.createElement("div");
    const wordContentContainer = document.querySelector(".word-content");

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

    keyWordHeader.appendChild(headerH2);

    exampleContainers.appendChild(keyWordHeader);
    exampleContainers.appendChild(firstExampleWords);
    exampleContainers.appendChild(moreExamples);

    wordContentContainer.appendChild(exampleContainers);

    let firstThreeExamples = document.getElementsByClassName("exampleContents");
    let heightExamples = 0;
    heightExamples += firstThreeExamples[0].getBoundingClientRect().height + 30;
    heightExamples += firstThreeExamples[1].getBoundingClientRect().height + 15;
    heightExamples += firstThreeExamples[2].getBoundingClientRect().height + 15;
    firstExampleWords.style.height = heightExamples + "px";
}

function searchWord() {
    let searchBoxValue = document
        .getElementById("search-box")
        .value.toUpperCase();
    let listOfWords = document.getElementsByClassName("list-of-words")[0];
    let wordsContent = listOfWords.getElementsByClassName("words");
    let wordTitle = document.getElementsByClassName("navigation-word");

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
    if (event.which === 13 || event.keyCode === 13) {
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
    valueOfLastItem = getValueOfLastItem();
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

    document.querySelector('.examples').addEventListener('click', () => {
        createContentOfWord(words[0]);
        ctxOfPage = "examples";
    });
    document.querySelector('.flash-cards').addEventListener('click', () => {
        removeElement();
        ctxOfPage = "flash-cards"
    })
}

// example's

function moreExamplesBtn() {
    const moreExample = document.querySelectorAll(".more-examples p");
    let textBtn = document.getElementById("more-examples");
    let heightExamples = document.getElementById("first-example-word");
    if (textBtn.innerHTML === "Wiecej") {
        for (const it of moreExample) {
            it.style.display = "block";
        }

        let examples = document.getElementsByClassName("exampleContents");
        let heightExamp = 0;
        heightExamp += examples[0].getBoundingClientRect().height + 30;
        for (let i = 0; i < examples.length; i++) {
            heightExamp += examples[i].getBoundingClientRect().height + 15;
        }
        heightExamples.style.height = heightExamp + "px";

        textBtn.innerHTML = "Mniej";
    } else if (textBtn.innerHTML === "Mniej") {
        for (const it of moreExample) {
            it.style.display = "none";
        }
        let firstThreeExamples = document.getElementsByClassName("exampleContents");
        let heightExamp = 0;
        heightExamp += firstThreeExamples[0].getBoundingClientRect().height + 30;
        heightExamp += firstThreeExamples[1].getBoundingClientRect().height + 15;
        heightExamp += firstThreeExamples[2].getBoundingClientRect().height + 15;

        heightExamples.style.height = heightExamp + "px";
        textBtn.innerHTML = "Wiecej";
    }
}
