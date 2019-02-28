function openWord(wordName) {

    let wordContent = document.getElementsByClassName("word-content");
    for (var i = 0; i < wordContent.length; i++) {
        wordContent[i].style.display = "none";
    }
    document.getElementById(wordName).style.display = "block";
}
function searchWord() {
    let filter = document.getElementById("search-box").value.toUpperCase();
    let listOfWords = document.getElementsByClassName("list-of-words")[0];
    let button = listOfWords.getElementsByClassName("words");

    for (var i = 0; i < button.length; i++) {
        if (button[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            button[i].style.display = "";
        } else {
            button[i].style.display = "none";
        }
    }
}
let knownWords = 0;

document.querySelector('#search-box').addEventListener('keyup', searchWord);
document.querySelector('.far').addEventListener('click', progresBar);

function progresBar() {
    if(knownWords <= 10)
        document.querySelector('.progBar').style.width = knownWords * 10 + '%';
    if(document.querySelector('.words i').classList[0] === "far")
        document.querySelector('.words i').className = "fas fa-check-circle";
    else
        document.querySelector('.words i').className = "far fa-circle";

    knownWords++;
    console.log(knownWords);
}
