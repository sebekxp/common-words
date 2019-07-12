// eslint-disable-next-line no-unused-vars
import {ctxOfPage} from "./utils";
import {removeElement} from "./utils";

// favoritesCtx LISTENER
window.document.querySelector(".favorites").addEventListener("click", () => {
    // TODO dodac if sprwdzajacy jaki contex usunac
    removeElement("examples-container");
    removeElement("flip-container");
    ctxOfPage = "favorites";
});


