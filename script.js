let result = document.getElementById("result");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let reset = document.getElementById("reset");
const calculate_btn = document.getElementById("calculate_btn");


calculate_btn.addEventListener('click', function () {
    const resultHeight = height.value / 100;
    const resultWeight = weight.value;

    let answer = (resultWeight / (resultHeight * resultHeight));
    answer = answer.toFixed(2)
    let message = answer

    if (answer < 18.5) {
        message += " 吃多一點，你體重過輕"
    } else if (answer >= 18.5 && answer < 24) {
        message += " 正常範圍"
    } else if (answer >= 24 && answer < 27) {
        message += " 你過重了喔"
    } else if (answer >= 27 && answer < 30) {
        message += " 有輕度肥胖喔"
    } else if (answer >= 30 && answer < 35) {
        message += " 中度肥胖"
    } else if (answer >= 35) {
        message += " 重度肥胖"
    }
    result.innerText = message
})

reset.addEventListener('click', function () {
    result.innerText = "";
})

