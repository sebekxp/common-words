/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/contentOfWord.js":
/*!*********************************!*\
  !*** ./src/js/contentOfWord.js ***!
  \*********************************/
/*! exports provided: createContentOfWord, hoverMouseAndDisplayWordContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContentOfWord\", function() { return createContentOfWord; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hoverMouseAndDisplayWordContent\", function() { return hoverMouseAndDisplayWordContent; });\n/* harmony import */ var _objectWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWord */ \"./src/js/objectWord.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _flashCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flashCards */ \"./src/js/flashCards.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Content of words are created dynamical\r\n// only if user hover right element.\r\n// We want to see the first example right after\r\n// loading the page without hovering on element\r\ncreateContentOfWord(_objectWord__WEBPACK_IMPORTED_MODULE_0__[\"OBJWORDS\"][0]);\r\n\r\nfunction createContentOfWord({wordName, wordTranslate, examples}) {\r\n    const keyWordHeader = window.document.createElement(\"div\");\r\n    const headerH2 = window.document.createElement(\"h2\");\r\n    const firstExampleWords = window.document.createElement(\"div\");\r\n    const moreExamples = window.document.createElement(\"div\");\r\n\r\n    let exampleContents;\r\n    let example = examples;\r\n    for (let i = 0; i < examples.length; i++) {\r\n        exampleContents = window.document.createElement(\"p\");\r\n        exampleContents.className = \"exampleContents\";\r\n        example[i] = example[i].split(\" \");\r\n        for (let j = 0; j < example[i].length; j++) {\r\n            if (example[i][j] === wordName) {\r\n                example[i][j] = \"<b>\" + example[i][j] + \"</b>\";\r\n            }\r\n        }\r\n        example[i] = example[i].join(\" \");\r\n        exampleContents.innerHTML = example[i];\r\n        firstExampleWords.appendChild(exampleContents);\r\n    }\r\n\r\n    const exampleContainers = window.document.createElement(\"div\");\r\n    exampleContainers.className = \"examples-container\";\r\n\r\n    keyWordHeader.className = \"key-word-header\";\r\n    keyWordHeader.id = \"key-word-header\";\r\n\r\n    headerH2.innerHTML = wordName + \" - \" + wordTranslate;\r\n\r\n    firstExampleWords.className = \"first-example-word\";\r\n    firstExampleWords.id = \"first-example-word\";\r\n\r\n    moreExamples.id = \"more-examples\";\r\n    moreExamples.className = \"more-examples\";\r\n    moreExamples.innerHTML = \"Wiecej\";\r\n\r\n    moreExamples.addEventListener(\"click\", moreExamplesBtn);\r\n    const wordContentContainer = window.document.querySelector(\".word-content\");\r\n\r\n    keyWordHeader.appendChild(headerH2);\r\n    exampleContainers.appendChild(keyWordHeader);\r\n    exampleContainers.appendChild(firstExampleWords);\r\n    exampleContainers.appendChild(moreExamples);\r\n    wordContentContainer.appendChild(exampleContainers);\r\n\r\n    const heightExamples = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calcHeightOfExamplesBox\"])();\r\n    firstExampleWords.style.height = heightExamples + \"px\";\r\n}\r\n\r\nfunction hoverMouseAndDisplayWordContent(evt) {\r\n    for (let i = 0; i < _objectWord__WEBPACK_IMPORTED_MODULE_0__[\"OBJWORDS\"].length; i++) {\r\n        if (_objectWord__WEBPACK_IMPORTED_MODULE_0__[\"OBJWORDS\"][i].wordName === evt.target.innerText) {\r\n            if (_utils__WEBPACK_IMPORTED_MODULE_1__[\"ctxOfPage\"] === \"examples\") {\r\n                Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"removeElement\"])(\"examples-container\");\r\n                createContentOfWord(_objectWord__WEBPACK_IMPORTED_MODULE_0__[\"OBJWORDS\"][i]);\r\n            } else if (_utils__WEBPACK_IMPORTED_MODULE_1__[\"ctxOfPage\"] === \"flash-cards\") {\r\n                Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"removeElement\"])(\"flip-container\");\r\n                Object(_flashCards__WEBPACK_IMPORTED_MODULE_2__[\"createFlashCards\"])(_objectWord__WEBPACK_IMPORTED_MODULE_0__[\"OBJWORDS\"][i]);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction moreExamplesBtn() {\r\n    const allExamples = window.document.querySelectorAll(\".more-examples p\");\r\n    const textBtn = window.document.getElementById(\"more-examples\");\r\n    const heightExamples = window.document.getElementById(\"first-example-word\");\r\n\r\n    if (textBtn.innerHTML === \"Wiecej\") {\r\n\r\n        showMoreExamples(allExamples);\r\n        const heightExamp = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calcHeightOfGivenExample\"])();\r\n        heightExamples.style.height = heightExamp + \"px\";\r\n        textBtn.innerHTML = \"Mniej\";\r\n\r\n    } else if (textBtn.innerHTML === \"Mniej\") {\r\n\r\n        showLessExamples(allExamples);\r\n        const heightExamp = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calcHeightOfExamplesBox\"])();\r\n        heightExamples.style.height = heightExamp + \"px\";\r\n        textBtn.innerHTML = \"Wiecej\";\r\n\r\n    }\r\n}\r\n\r\nfunction showMoreExamples(allExamples) {\r\n    for (const it of allExamples) {\r\n        it.style.display = \"block\";\r\n    }\r\n}\r\n\r\nfunction showLessExamples(allExamples) {\r\n    for (const it of allExamples) {\r\n        it.style.display = \"none\";\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/contentOfWord.js?");

/***/ }),

/***/ "./src/js/examples.js":
/*!****************************!*\
  !*** ./src/js/examples.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _contentOfWord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentOfWord */ \"./src/js/contentOfWord.js\");\n/* harmony import */ var _objectWord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objectWord */ \"./src/js/objectWord.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// examplesCtx LISTENER\r\ndocument.querySelector(\".examples\").addEventListener(\"click\", () => {\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"removeElement\"])(\"flip-container\");\r\n    if (_utils__WEBPACK_IMPORTED_MODULE_0__[\"ctxOfPage\"] === \"flash-cards\" || _utils__WEBPACK_IMPORTED_MODULE_0__[\"ctxOfPage\"] === \"favorites\")\r\n        Object(_contentOfWord__WEBPACK_IMPORTED_MODULE_1__[\"createContentOfWord\"])(_objectWord__WEBPACK_IMPORTED_MODULE_2__[\"OBJWORDS\"][0]);\r\n    // ctxOfPage = \"examples\";\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"setCtxOfPage\"])(\"examples\");\r\n});\n\n//# sourceURL=webpack:///./src/js/examples.js?");

/***/ }),

/***/ "./src/js/favorites.js":
/*!*****************************!*\
  !*** ./src/js/favorites.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\n// favoritesCtx LISTENER\r\nwindow.document.querySelector(\".favorites\").addEventListener(\"click\", () => {\r\n    // TODO dodac if sprwdzajacy jaki contex usunac\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"removeElement\"])(\"examples-container\");\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"removeElement\"])(\"flip-container\");\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"setCtxOfPage\"])(\"favorites\");\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/favorites.js?");

/***/ }),

/***/ "./src/js/flashCards.js":
/*!******************************!*\
  !*** ./src/js/flashCards.js ***!
  \******************************/
/*! exports provided: createFlashCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFlashCards\", function() { return createFlashCards; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _objectWord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWord */ \"./src/js/objectWord.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createFlashCards({wordName, wordTranslate}) {\r\n    const flipContainer = window.document.createElement(\"div\");\r\n    const flippable = window.document.createElement(\"div\");\r\n    const frontFlashCards = window.document.createElement(\"div\");\r\n    const backFlashCards = window.document.createElement(\"div\");\r\n\r\n    flipContainer.className = \"flip-container\";\r\n    flippable.className = \"flippable\";\r\n    frontFlashCards.className = \"front\";\r\n    backFlashCards.className = \"back\";\r\n\r\n    frontFlashCards.innerHTML = wordName;\r\n    backFlashCards.innerHTML = wordTranslate;\r\n\r\n    flippable.addEventListener(\"click\", function () {\r\n        this.classList.toggle(\"flipme\");\r\n    });\r\n\r\n    const wordContent = window.document.querySelector(\".word-content\");\r\n\r\n    flippable.appendChild(frontFlashCards);\r\n    flippable.appendChild(backFlashCards);\r\n    flipContainer.appendChild(flippable);\r\n    wordContent.appendChild(flipContainer);\r\n}\r\n\r\n// flash-cardsCtx LISTENER\r\nwindow.document.querySelector(\".flash-cards\").addEventListener(\"click\", () => {\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"removeElement\"])(\"examples-container\");\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"removeElement\"])(\"flip-container\");\r\n    if (_utils__WEBPACK_IMPORTED_MODULE_0__[\"ctxOfPage\"] === \"examples\" || _utils__WEBPACK_IMPORTED_MODULE_0__[\"ctxOfPage\"] === \"favorites\")\r\n        createFlashCards(_objectWord__WEBPACK_IMPORTED_MODULE_1__[\"OBJWORDS\"][0]);\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"setCtxOfPage\"])(\"flash-cards\");\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/flashCards.js?");

/***/ }),

/***/ "./src/js/navigationWord.js":
/*!**********************************!*\
  !*** ./src/js/navigationWord.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _objectWord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWord */ \"./src/js/objectWord.js\");\n/* harmony import */ var _contentOfWord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contentOfWord */ \"./src/js/contentOfWord.js\");\n\r\n\r\n\r\n\r\nfor (let word of _objectWord__WEBPACK_IMPORTED_MODULE_1__[\"OBJWORDS\"]) {\r\n    createNavigationWord(word);\r\n}\r\n\r\nfunction createNavigationWord(wordObj) {\r\n    const navigationWord = window.document.createElement(\"div\");\r\n    const circleIconDiv = window.document.createElement(\"div\");\r\n    const blankCircleDiv = window.document.createElement(\"p\");\r\n    const wordNameDiv = window.document.createElement(\"p\");\r\n    const deleteElemIcon = window.document.createElement(\"i\");\r\n    const favElemIcon = window.document.createElement(\"i\");\r\n\r\n    navigationWord.className = \"navigation-word\";\r\n    circleIconDiv.className = \"circle-icon\";\r\n    blankCircleDiv.className = \"blank-circle far fa-circle\";\r\n    wordNameDiv.className = \"words\";\r\n    deleteElemIcon.className = \"deleteElem fas fa-times\";\r\n    favElemIcon.className = \"far fa-star\";\r\n\r\n    blankCircleDiv.addEventListener(\"click\", progresBar);\r\n    circleIconDiv.addEventListener(\"click\", deleteNavigationWord);\r\n    navigationWord.addEventListener(\"mouseover\", _contentOfWord__WEBPACK_IMPORTED_MODULE_2__[\"hoverMouseAndDisplayWordContent\"]);\r\n\r\n    wordNameDiv.innerHTML = wordObj.wordName;\r\n\r\n    circleIconDiv.appendChild(deleteElemIcon);\r\n    navigationWord.appendChild(circleIconDiv);\r\n    navigationWord.appendChild(blankCircleDiv);\r\n    wordNameDiv.appendChild(favElemIcon);\r\n    navigationWord.appendChild(wordNameDiv);\r\n\r\n    window.document.querySelector(\".list-of-words\").appendChild(navigationWord);\r\n    // valueOfLastItem = getValueOfLastItem();\r\n    updateProgressBar();\r\n}\r\n\r\nfunction progresBar(evt) {\r\n    if (evt.target.classList[1] === \"far\") {\r\n        evt.target.className =\r\n            evt.target.classList[0] + \" filled-circle fas fa-check-circle\";\r\n    } else {\r\n        evt.target.className =\r\n            evt.target.classList[0] + \" blank-circle far fa-circle\";\r\n    }\r\n    updateProgressBar();\r\n}\r\n\r\nfunction deleteNavigationWord(evt) {\r\n    evt.currentTarget.parentElement.remove();\r\n    // valueOfLastItem = getValueOfLastItem();\r\n    updateProgressBar();\r\n}\r\n\r\nfunction addNewElement() {\r\n    const inputValue = window.document.querySelector(\".input-name\").value;\r\n    if (inputValue === \"\") {\r\n        _objectWord__WEBPACK_IMPORTED_MODULE_1__[\"OBJWORDS\"].push({\r\n            wordName: \"default name\",\r\n            wordContent: []\r\n        });\r\n    } else\r\n        _objectWord__WEBPACK_IMPORTED_MODULE_1__[\"OBJWORDS\"].push({\r\n            wordName: inputValue,\r\n            wordContent: []\r\n        });\r\n    // When we add new element it has [words.length - 1] index\r\n    createNavigationWord(_objectWord__WEBPACK_IMPORTED_MODULE_1__[\"OBJWORDS\"][_objectWord__WEBPACK_IMPORTED_MODULE_1__[\"OBJWORDS\"].length - 1]);\r\n    window.document.querySelector(\".input-name\").value = \"\";\r\n}\r\n\r\nfunction updateProgressBar() {\r\n    const KNOW_WORDS = window.document.querySelectorAll(\".filled-circle\");\r\n    const currentProgress = getCurrentProgress(KNOW_WORDS);\r\n\r\n    currentProgressInNumber(KNOW_WORDS.length);\r\n    window.document.querySelector(\".progBar\").style.width = currentProgress + \"%\";\r\n}\r\n\r\nfunction getCurrentProgress(KNOW_WORDS) {\r\n    const numOfKnownWords = KNOW_WORDS.length;\r\n    const percentageValue = 100 / _utils__WEBPACK_IMPORTED_MODULE_0__[\"valueOfLastItem\"];\r\n\r\n    return numOfKnownWords * percentageValue;\r\n}\r\n\r\nfunction currentProgressInNumber(numOfKnownWords) {\r\n    window.document.querySelector(\"#complete\").innerHTML =\r\n        numOfKnownWords + \" / \" + _utils__WEBPACK_IMPORTED_MODULE_0__[\"valueOfLastItem\"];\r\n}\r\n\r\nfunction useEnterToCreateNewWord() {\r\n    if (event.which === 13 || event.keyCode === 13) {\r\n        addNewElement();\r\n    }\r\n}\r\n\r\n(function setNumberOfLoadedWords(numOfWords) {\r\n    window.document.querySelector(\"#complete\").innerHTML = 0 + \" / \" + numOfWords;\r\n})(_utils__WEBPACK_IMPORTED_MODULE_0__[\"valueOfLastItem\"]);\r\n\r\n// addNewElement LISTENER\r\nwindow.document\r\n    .querySelector(\".circle-icon-add-element\")\r\n    .addEventListener(\"click\", addNewElement);\r\n\r\n// useEnterToCreateNewWord LISTENER\r\nwindow.document\r\n    .querySelector(\".input-name\")\r\n    .addEventListener(\"keypress\", useEnterToCreateNewWord);\r\n\r\n// deleteNavigationWord LISTENER\r\nconst allCircleIcon = window.document.querySelectorAll(\".circle-icon\");\r\nfor (let i = 0; i < allCircleIcon.length; i++) {\r\n    allCircleIcon[i].addEventListener(\"click\", deleteNavigationWord);\r\n}\r\n\r\n// allBlankCircle LISTENER\r\nconst allBlankCircle = window.document.querySelectorAll(\".blank-circle\");\r\nfor (let i = 0; i < allBlankCircle.length; i++) {\r\n    allBlankCircle[i].addEventListener(\"click\", progresBar);\r\n}\n\n//# sourceURL=webpack:///./src/js/navigationWord.js?");

/***/ }),

/***/ "./src/js/objectWord.js":
/*!******************************!*\
  !*** ./src/js/objectWord.js ***!
  \******************************/
/*! exports provided: OBJWORDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/js/searchBox.js":
/*!*****************************!*\
  !*** ./src/js/searchBox.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function searchWord() {\r\n    // We use toUpperCase because we\r\n    // want to ignore case sensitive\r\n    let searchBoxValue = window.document\r\n        .getElementById(\"search-box\")\r\n        .value.toUpperCase();\r\n\r\n    const listOfWords = window.document.getElementsByClassName(\"list-of-words\")[0];\r\n    const words = listOfWords.getElementsByClassName(\"words\");\r\n    const wordTitle = window.document.getElementsByClassName(\"navigation-word\");\r\n\r\n    for (let i = 0; i < words.length; i++) {\r\n        const wordText = words[i].innerHTML.toUpperCase();\r\n        if (wordText.includes(searchBoxValue)) {\r\n            wordTitle[i].style.display = \"\";\r\n        } else {\r\n            wordTitle[i].style.display = \"none\";\r\n        }\r\n    }\r\n}\r\n\r\n// searchWord LISTENER\r\nwindow.document.querySelector(\"#search-box\").addEventListener(\"keyup\", searchWord);\n\n//# sourceURL=webpack:///./src/js/searchBox.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: ctxOfPage, valueOfLastItem, setCtxOfPage, calcHeightOfGivenExample, calcHeightOfExamplesBox, getValueOfLastItem, removeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctxOfPage\", function() { return ctxOfPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"valueOfLastItem\", function() { return valueOfLastItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCtxOfPage\", function() { return setCtxOfPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcHeightOfGivenExample\", function() { return calcHeightOfGivenExample; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcHeightOfExamplesBox\", function() { return calcHeightOfExamplesBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getValueOfLastItem\", function() { return getValueOfLastItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeElement\", function() { return removeElement; });\nlet ctxOfPage = \"examples\";\r\nlet valueOfLastItem = getValueOfLastItem();\r\n\r\nfunction setCtxOfPage(value) {\r\n    ctxOfPage = value;\r\n}\r\n\r\nfunction calcHeightOfGivenExample() {\r\n    const examples = window.document.getElementsByClassName(\"exampleContents\");\r\n    let heightExamp = examples[0].getBoundingClientRect().height + 30;\r\n\r\n    for (let i = 0; i < examples.length; i++) {\r\n        heightExamp += examples[i].getBoundingClientRect().height + 15;\r\n    }\r\n    return heightExamp;\r\n}\r\n\r\nfunction calcHeightOfExamplesBox() {\r\n    let firstThreeExamples = window.document.getElementsByClassName(\"exampleContents\");\r\n    let heightExamples = 0;\r\n    heightExamples += firstThreeExamples[0].getBoundingClientRect().height + 30;\r\n    heightExamples += firstThreeExamples[1].getBoundingClientRect().height + 15;\r\n    heightExamples += firstThreeExamples[2].getBoundingClientRect().height + 15;\r\n\r\n    return heightExamples;\r\n}\r\n\r\nfunction getValueOfLastItem() {\r\n    return window.document.querySelectorAll(\".navigation-word\").length;\r\n}\r\n\r\nfunction removeElement(className) {\r\n    const wordContent = window.document.querySelector(\".word-content\");\r\n    const element = window.document.getElementsByClassName(className);\r\n    if (element.length !== 0)\r\n        wordContent.removeChild(element[0]);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/navigationWord.js ./src/js/favorites.js ./src/js/searchBox.js ./src/js/flashCards.js ./src/js/contentOfWord.js ./src/js/utils.js ./src/js/examples.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/navigationWord.js */\"./src/js/navigationWord.js\");\n__webpack_require__(/*! ./src/js/favorites.js */\"./src/js/favorites.js\");\n__webpack_require__(/*! ./src/js/searchBox.js */\"./src/js/searchBox.js\");\n__webpack_require__(/*! ./src/js/flashCards.js */\"./src/js/flashCards.js\");\n__webpack_require__(/*! ./src/js/contentOfWord.js */\"./src/js/contentOfWord.js\");\n__webpack_require__(/*! ./src/js/utils.js */\"./src/js/utils.js\");\nmodule.exports = __webpack_require__(/*! ./src/js/examples.js */\"./src/js/examples.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/navigationWord.js_./src/js/favorites.js_./src/js/searchBox.js_./src/js/flashCards.js_./src/js/contentOfWord.js_./src/js/utils.js_./src/js/examples.js?");

/***/ })

/******/ });