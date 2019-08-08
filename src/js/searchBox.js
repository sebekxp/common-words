function searchWord() {
    // We use toUpperCase because we
    // want to ignore case sensitive
    let searchBoxValue = window.document
        .getElementById("search-box")
        .value.toUpperCase();

    const listOfWords = window.document.getElementsByClassName("list-of-words")[0];
    const words = listOfWords.getElementsByClassName("words");
    const wordTitle = window.document.getElementsByClassName("navigation-word");

    for (let i = 0; i < words.length; i++) {
        const wordText = words[i].innerHTML.toUpperCase();
        if (wordText.includes(searchBoxValue)) {
            wordTitle[i].style.display = "";
        } else {
            wordTitle[i].style.display = "none";
        }
    }
}

// searchWord LISTENER
document.querySelector("#search-box").addEventListener("keyup", searchWord);

// Clean input when 'X' is clicked.
document.getElementById("search-box-container-delete-icon").addEventListener("click", () => {
    document.getElementById("search-box").value = "";
});