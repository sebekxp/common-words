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