import {OBJWORDS as words} from "./objectWord";
import {calcHeightOfExamplesBox, calcHeightOfGivenExample, ctxOfPage, removeElement} from "./utils";
import {createFlashCards} from "./flashCards";


// Content of words are created dynamical
// only if user hover right element.
// We want to see the first example right after
// loading the page without hovering on element
createContentOfWord(words[0]);

export function createContentOfWord({wordName, wordTranslate, examples}) {
    const keyWordHeader = window.document.createElement("div");
    const headerH2 = window.document.createElement("h2");
    const firstExampleWords = window.document.createElement("div");
    const moreExamples = window.document.createElement("div");

    let exampleContents;
    let example = examples;
    for (let i = 0; i < examples.length; i++) {
        exampleContents = window.document.createElement("p");
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

    const exampleContainers = window.document.createElement("div");
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
    const wordContentContainer = window.document.querySelector(".word-content");

    keyWordHeader.appendChild(headerH2);
    exampleContainers.appendChild(keyWordHeader);
    exampleContainers.appendChild(firstExampleWords);
    exampleContainers.appendChild(moreExamples);
    wordContentContainer.appendChild(exampleContainers);

    const heightExamples = calcHeightOfExamplesBox();
    firstExampleWords.style.height = heightExamples + "px";
}

export function hoverMouseAndDisplayWordContent(evt) {
    for (let i = 0; i < words.length; i++) {
        if (words[i].wordName === evt.target.innerText) {
            if (ctxOfPage === "examples" || ctxOfPage === "favorites") {
                removeElement("examples-container");
                createContentOfWord(words[i]);
            } else if (ctxOfPage === "flash-cards") {
                removeElement("flip-container");
                createFlashCards(words[i]);
            }
        }
    }
}

function moreExamplesBtn() {
    const allExamples = window.document.querySelectorAll(".more-examples p");
    const textBtn = window.document.getElementById("more-examples");
    const heightExamples = window.document.getElementById("first-example-word");

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

