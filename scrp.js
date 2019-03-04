let knownWords = 0;
let valueofLastItem = getValueOfLastItem();

function getValueOfLastItem() {
        return document.querySelectorAll('.word-title').length;
}

function openWord(wordName) {

    let wordContent = document.getElementsByClassName("word-content");
    for (var i = 0; i < wordContent.length; i++) {
        wordContent[i].style.display = "none";
    }
    document.getElementById(wordName).style.display = "block";
}
function searchWord() {
    let valeFromSearchBox = document.getElementById("search-box").value.toUpperCase();;
    let listOfWords = document.getElementsByClassName("list-of-words")[0];
    let wordsContent = listOfWords.getElementsByClassName("words");
    let wordTitle = document.getElementsByClassName('word-title');

    for (var i = 0; i < wordsContent.length; i++) {
        if (wordsContent[i].innerHTML.toUpperCase().indexOf(valeFromSearchBox) > -1) {
            wordTitle[i].style.display = "";
        } else {
            wordTitle[i].style.display = "none";
        }
    }
}

// document.querySelector('.w1').addEventListener('click', progresBar);
// document.querySelector('.w2').addEventListener('click', progresBar);
// document.querySelector('.w3').addEventListener('click', progresBar);
// document.querySelector('.w4').addEventListener('click', progresBar);
// document.querySelector('.w5').addEventListener('click', progresBar);
// document.querySelector('.w6').addEventListener('click', progresBar);
// document.querySelector('.w7').addEventListener('click', progresBar);
// document.querySelector('.w8').addEventListener('click', progresBar);
// document.querySelector('.w9').addEventListener('click', progresBar);
// document.querySelector('.w10').addEventListener('click', progresBar);
let allBlankCircle = document.querySelectorAll('.blank-circle')
for (var i = 0; i < allBlankCircle.length; i++) {
   allBlankCircle[i].addEventListener('click', progresBar);
}


document.querySelector('#search-box').addEventListener('keyup', searchWord);
document.querySelector('.add-element-circle').addEventListener('click', createNavigationWord);

let allCircleIcon = document.querySelectorAll('.circle-icon');
for (var i = 0; i < allCircleIcon.length; i++) {
    allCircleIcon[i].addEventListener('click', deleteNavigationWord);
}

function updateProgresBar() {
    var updatedValueOfProgressBar = parseInt(knownWords * (100 / valueofLastItem), 10);
    document.querySelector('#complete').innerHTML = updatedValueOfProgressBar + ' %';
    document.querySelector('.progBar').style.width = updatedValueOfProgressBar + '%';
}

function progresBar(evt) {
    if (knownWords <= valueofLastItem && evt.target.classList[2] === "far") {
        knownWords++;
    }
    else {
        knownWords--;
    }
    updateProgresBar();
    if (evt.target.classList[2] === "far") {
        evt.target.className = evt.target.classList[0] + " filled-circle fas fa-check-circle";
    }
    else {
        evt.target.className = evt.target.classList[0] + " blank-circle far fa-circle";
    }
}

function createNavigationWord() {
    updateProgresBar();
    var wordTitleDiv = document.createElement("div");
    var circleIconDiv = document.createElement("div");
    var pFirstElem = document.createElement("p");
    var pSecondElem = document.createElement("p");
    var deleteElemI = document.createElement("i");

    deleteElemI.className = "deleteElem fas fa-times";
    circleIconDiv.className = "circle-icon";
    wordTitleDiv.className = "word-title";
    pFirstElem.className = "w" + (valueofLastItem + 1)+ " blank-circle far fa-circle"
    pSecondElem.className = "words";

    pFirstElem.addEventListener('click', progresBar);
    circleIconDiv.addEventListener('click', deleteNavigationWord);

    if (document.querySelector('.input-name').value === "")
        pSecondElem.innerHTML = "Default name"
    else
        pSecondElem.innerHTML = document.querySelector('.input-name').value


    pSecondElem.setAttribute('contenteditable', "true");
    pSecondElem.setAttribute('title', "Click to change the name");
    wordTitleDiv.setAttribute("onmouseover", "openWord('a"+ (valueofLastItem + 1) + "')");
    circleIconDiv.appendChild(deleteElemI);
    wordTitleDiv.appendChild(circleIconDiv);
    wordTitleDiv.appendChild(pFirstElem);
    wordTitleDiv.appendChild(pSecondElem);

    document.querySelector('.list-of-words').appendChild(wordTitleDiv);
    document.querySelector('.input-name').value = "";
    valueofLastItem = getValueOfLastItem();
}

function deleteNavigationWord(evt) {
    updateProgresBar();
    evt.currentTarget.parentElement.remove();
    valueofLastItem = getValueOfLastItem();
}




// document.querySelectorAll('p[class^="w"]:not(div)').forEach((elem) => {
//     elem.addEventListener('click', progresBar);
// })