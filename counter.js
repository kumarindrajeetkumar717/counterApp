const mainTiitle = document.querySelector("#title");
let curValue = 0;

const btnDecrement = document.querySelector(".decrement");
const btnReset = document.querySelector(".reset");
const btnIncerment = document.querySelector(".incerment");

btnIncerment.addEventListener("click", () => {
        curValue++;
        mainTiitle.textContent = curValue;
});


btnDecrement.addEventListener("click", () => {
    curValue--;
    mainTiitle.textContent = curValue;
});


btnReset.addEventListener("click", () => {
    curValue = 0;
    mainTiitle.textContent = curValue;
});

