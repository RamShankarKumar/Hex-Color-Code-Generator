const outerBox = document.querySelector(".outer-box");
const gen1SpanColor = document.getElementById("gen1-span-color");
const gen1SpanText = document.getElementById("gen1-span-text");
const gen1ButtonGenerate = document.getElementById("gen1-button-generate");
const gen1ButtonReset = document.getElementById("gen1-button-reset");
const colorPicker = document.getElementById("colorPicker");
const gen2SpanColor = document.getElementById("gen2-span-color");
const gen2SpanText = document.getElementById("gen2-span-text");
const gen2ButtonReset = document.getElementById("gen2-button-reset");

gen1ButtonGenerate.addEventListener("click", () => {
    let randomNumber = Math.random().toString(16); // toString take a parameter known as radix. That is if we do not give any parameter then it makes it bydefualt with base 10. that is 0 to 9. If we want to chagne to base 8 or 16 we need to send the parameter.
    randomNumber = randomNumber.substring(2,8);
    outerBox.style.backgroundColor = '#'+randomNumber;
    gen1SpanColor.style.color = '#'+randomNumber;
    gen1SpanText.innerHTML = '#'+randomNumber;
})

gen1ButtonReset.addEventListener("click", () => {
    gen1SpanColor.style.color = '#000000';
    gen1SpanText.innerHTML = '#######';
    outerBox.style.backgroundColor = '#ffffff';
})


colorPicker.addEventListener('input', (event) => {
    const colorPickerValue = colorPicker.value
    outerBox.style.backgroundColor = colorPickerValue;
    gen2SpanColor.style.color = colorPickerValue;
    gen2SpanText.innerHTML = colorPickerValue;
})

gen2ButtonReset.addEventListener("click", () => {
    gen2SpanColor.style.color = '#000000';
    gen2SpanText.innerHTML = '#######';
    outerBox.style.backgroundColor = '#ffffff';
    colorPicker.value = '#6a5acd';
})
