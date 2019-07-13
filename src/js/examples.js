import {ctxOfPage, removeElement, setCtxOfPage} from "./utils";
import {createContentOfWord} from "./contentOfWord";
import {OBJWORDS as words} from "./objectWord";

// examplesCtx LISTENER
document.querySelector(".examples").addEventListener("click", () => {
    removeElement("flip-container");
    if (ctxOfPage === "flash-cards" || ctxOfPage === "favorites")
        createContentOfWord(words[0]);
    // ctxOfPage = "examples";
    setCtxOfPage("examples");
});