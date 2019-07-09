export {calcHeightOfGivenExample}
export {calcHeightOfExamplesBox}
export {ctxOfPage}
export {valueOfLastItem}
export {getValueOfLastItem}
export {removeElement}

let ctxOfPage = "examples";
let valueOfLastItem = getValueOfLastItem();

function calcHeightOfGivenExample() {
    const examples = document.getElementsByClassName("exampleContents");
    let heightExamp = examples[0].getBoundingClientRect().height + 30;

    for (let i = 0; i < examples.length; i++) {
        heightExamp += examples[i].getBoundingClientRect().height + 15;
    }
    return heightExamp;
}

function calcHeightOfExamplesBox() {
    let firstThreeExamples = document.getElementsByClassName("exampleContents");
    let heightExamples = 0;
    heightExamples += firstThreeExamples[0].getBoundingClientRect().height + 30;
    heightExamples += firstThreeExamples[1].getBoundingClientRect().height + 15;
    heightExamples += firstThreeExamples[2].getBoundingClientRect().height + 15;

    return heightExamples;
}

function getValueOfLastItem() {
    return document.querySelectorAll(".navigation-word").length;
}

function removeElement(className) {
    const wordContent = document.querySelector(".word-content");
    const element = document.getElementsByClassName(className);
    if (element.length !== 0)
        wordContent.removeChild(element[0]);
}
