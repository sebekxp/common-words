let knownWords = 0;
let valueofLastItem = getValueOfLastItem();
let updatedValueOfProgressBar = 0;
const words = objWords;

document.querySelector('#complete').innerHTML = knownWords + ' / ' + valueofLastItem;


function openWord(evt) {
    console.log(evt.currentTarget)

    let wordContentAllParagraph = document.querySelectorAll('.word-content p');
    let wordContentAllH2 = document.querySelectorAll('.word-content h2');
    for (let i of wordContentAllParagraph) {
        i.innerHTML = "";
    }
    for (let i of wordContentAllH2) {
        i.innerHTML = "";
    }
    

    wordContent.innerHTML = "";
    // for (let i = 0; i < wordContent.length; i++) {
    //     wordContent[i].style.display = "none";
    // }
    // document.getElementById(wordName).style.display = "block";
}
function searchWord() {
    let valeFromSearchBox = document.getElementById("search-box").value.toUpperCase();;
    let listOfWords = document.getElementsByClassName("list-of-words")[0];
    let wordsContent = listOfWords.getElementsByClassName("words");
    let wordTitle = document.getElementsByClassName('word-title');

    for (let i = 0; i < wordsContent.length; i++) {
        if (wordsContent[i].innerHTML.toUpperCase().indexOf(valeFromSearchBox) > -1) {
            wordTitle[i].style.display = "";
        } else {
            wordTitle[i].style.display = "none";
        }
    }
}

function updateProgressBar() {
    knownWords = document.querySelectorAll('.filled-circle');
    updatedValueOfProgressBar = parseInt(knownWords.length * (100 / valueofLastItem), 10);
    document.querySelector('#complete').innerHTML = knownWords.length + ' / ' + valueofLastItem;
    document.querySelector('.progBar').style.width = updatedValueOfProgressBar + '%';
}

function progresBar(evt) {
    if (evt.target.classList[1] === "far") {
        evt.target.className = evt.target.classList[0] + " filled-circle fas fa-check-circle";
    }
    else {
        evt.target.className = evt.target.classList[0] + " blank-circle far fa-circle";
    }

    updateProgressBar();
}
function useEnterToCreateNewWord() {
    if (event.which == 13 || event.keyCode == 13) {
        createNavigationWord();
    }
}
function createContentOfWord({wordName, wordContent}) {

    let wordContentContainer = document.querySelector('.word-content');

    let nameWord = document.createElement("h2")
    nameWord.innerHTML = wordName;
    wordContentContainer.appendChild(nameWord);

    let contents = [wordContent.length]
    for (it of wordContent) {
        contents = document.createElement('p');
        contents.innerHTML = it;
        wordContentContainer.appendChild(contents);
    }
}
function createNavigationWord(wordObj) {
    let wordTitleDiv = document.createElement("div");
    let circleIconDiv = document.createElement("div");
    let blankCircleDiv = document.createElement("p");
    let wordNameDiv = document.createElement("p");
    let deleteElemI = document.createElement("i");

    wordTitleDiv.className = "word-title";
    circleIconDiv.className = "circle-icon";
    blankCircleDiv.className = "blank-circle far fa-circle";
    wordNameDiv.className = "words";
    deleteElemI.className = "deleteElem fas fa-times";

    blankCircleDiv.addEventListener('click', progresBar);
    circleIconDiv.addEventListener('click', deleteNavigationWord);

    wordNameDiv.innerHTML = wordObj.wordName;

    //                         IF USER ADD 
    // ===========================================================================||
    // ||if (document.querySelector('.input-name').value === "")                  ||
    // ||    wordNameDiv.innerHTML = "Default name"                               ||
    // ||else                                                                     ||
    // ||   wordNameDiv.innerHTML = document.querySelector('.input-name').value   ||
    // ||wordNameDiv.setAttribute('contenteditable', "true");                     |
        // wordNameDiv.setAttribute('title', "Click to change the name");|
    // =============================================================================


    wordTitleDiv.addEventListener("mouseover", openWord);
    circleIconDiv.appendChild(deleteElemI);
    wordTitleDiv.appendChild(circleIconDiv);
    wordTitleDiv.appendChild(blankCircleDiv);
    wordTitleDiv.appendChild(wordNameDiv);

    createContentOfWord(wordObj); 

    document.querySelector('.list-of-words').appendChild(wordTitleDiv);
    document.querySelector('.input-name').value = "";

    valueofLastItem = getValueOfLastItem();
    updateProgressBar();

}

function deleteNavigationWord(evt) {
    evt.currentTarget.parentElement.remove();
    valueofLastItem = getValueOfLastItem();
    updateProgressBar();
}

for (let word of words) {
    createNavigationWord(word);
}


let allBlankCircle = document.querySelectorAll('.blank-circle')
for (var i = 0; i < allBlankCircle.length; i++) {
    allBlankCircle[i].addEventListener('click', progresBar);
}

document.querySelector('#search-box').addEventListener('keyup', searchWord);
document.querySelector('.add-element-circle').addEventListener('click', createNavigationWord);
document.querySelector('.input-name').addEventListener('keypress', useEnterToCreateNewWord);

let allCircleIcon = document.querySelectorAll('.circle-icon');
for (var i = 0; i < allCircleIcon.length; i++) {
    allCircleIcon[i].addEventListener('click', deleteNavigationWord);
}

function getValueOfLastItem() {
    return document.querySelectorAll('.word-title').length;
}