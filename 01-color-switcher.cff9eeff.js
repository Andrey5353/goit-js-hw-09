!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};var e=null;t.startBtn.addEventListener("click",(function(){t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled",!0),e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.removeAttribute("disabled",!0),t.stopBtn.setAttribute("disabled",!0),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.cff9eeff.js.map