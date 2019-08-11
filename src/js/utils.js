export let ctxOfPage = "examples";
export let valueOfLastItem = getValueOfLastItem();

export function setCtxOfPage(value) {
    ctxOfPage = value;
}

export function calcHeightOfGivenExample() {
    const examples = window.document.getElementsByClassName("exampleContents");
    let heightExamp = examples[0].getBoundingClientRect().height + 30;

    for (let i = 0; i < examples.length; i++) {
        heightExamp += examples[i].getBoundingClientRect().height + 15;
    }
    return heightExamp;
}

export function calcHeightOfExamplesBox() {
    let firstThreeExamples = window.document.getElementsByClassName("exampleContents");
    let heightExamples = 0;
    heightExamples += firstThreeExamples[0].getBoundingClientRect().height + 30;
    heightExamples += firstThreeExamples[1].getBoundingClientRect().height + 15;
    heightExamples += firstThreeExamples[2].getBoundingClientRect().height + 15;

    return heightExamples;
}

export function getValueOfLastItem() {
    return window.document.querySelectorAll(".navigation-word").length;
}

export function removeElement(className) {
    const wordContent = window.document.querySelector(".word-content");
    const element = window.document.getElementsByClassName(className);
    if (element.length !== 0)
        wordContent.removeChild(element[0]);
}

export function createPopup(evt, str) {
    const popup = window.document.createElement("span");
    popup.className = "popup";
    popup.innerText = str;
    popup.style.left = evt.x + 15 + "px";
    popup.style.top = evt.y - 40 + "px";
    document.body.appendChild(popup);

    setTimeout(() => {
        document.getElementsByClassName("popup")[0].remove();
    }, 800)
}
