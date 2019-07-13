import {removeElement, setCtxOfPage} from "./utils";

// favoritesCtx LISTENER
window.document.querySelector(".favorites").addEventListener("click", () => {
    // TODO dodac if sprwdzajacy jaki contex usunac
    removeElement("examples-container");
    removeElement("flip-container");
    setCtxOfPage("favorites");
});


