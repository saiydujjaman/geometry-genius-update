// collect input id to return value
function inputById(id){ 
    const inputId = document.getElementById(id);
    const inputIdValue = inputId.value;

    if (inputIdValue === "" || inputIdValue <= 0 ){
        alert("wrong input");
    }
    else{
        // const inputIdString = inputId.value;
        const triangleValue = parseFloat(inputIdValue);
        inputId.value = "";
        return triangleValue;
    }

};
// collect display string to convert to number
function innerTextInput(id){ 
    const inputId = document.getElementById(id).innerText;
    const triangleValue = parseFloat(inputId);
    return triangleValue;
}
// set the value to show the display
// function setInnerText(id, value){
//     const displayValue = document.getElementById(id);
//     displayValue.innerText = value;
// };
// with default number * 0.5
function multiplyNumber1(num1, num2){
    const triangleB = inputById(num1);
    const triangleH = inputById(num2);
    const total = triangleB * triangleH * 0.5;
    return total.toFixed(2);
};
// without default values
function multiplyNumber2(num1, num2){
    const triangleB = inputById(num1);
    const triangleH = inputById(num2);
    const total = triangleB * triangleH;
    return total.toFixed(2);
};
// create table
function tableDisplay (serial,name,value) {
    const tabileContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${name}</td>
    <td>${value} mc<sup>2</2></td>
    `;
    tabileContainer.appendChild(tr);
    // <td>${<button>convertTo m<sup></sup></button>}</td>
}

// calculate all display show values
function displayTotal(){
    const triangleTotal = innerTextInput('triangle-total');
    const rectangleTotal = innerTextInput('rectangle-total');
    const parallelogramTotal = innerTextInput('parallelogram-total');
    const rhombusTotal = innerTextInput('rhombus-total');
    const pentagonTotal = innerTextInput('pentagon-total');
    const ellipseTotal = innerTextInput('ellipse-total');
    const allTotal = triangleTotal + rectangleTotal + parallelogramTotal + 
    rhombusTotal + pentagonTotal + ellipseTotal;
    setInnerText('all-total', allTotal);
    return allTotal.toFixed;
};
    
let serial = 0;
document.getElementById('triangle-calculate').addEventListener('click',function(){
    const triangleNew = document.getElementById('triangle').innerText;
    const total = multiplyNumber1('triangle-b','triangle-h');
    serial += 1;
    tableDisplay(serial, triangleNew, total);
    // setInnerText("triangle-total",total); 
    // console.log(tableDisplay(1, ellipse, total))

    
});

document.getElementById('rectangle-btn').addEventListener('click',function(){
    const rectangle = document.getElementById('rectangle').innerText;
    const total = multiplyNumber2('rectangle-w','rectangle-l');
    serial += 1;
    tableDisplay(serial, rectangle, total);
    // setInnerText("rectangle-total",total);
    // displayTotal();
});
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const parallelogram = document.getElementById('parallelogram').innerText;
    const total = multiplyNumber2('parallelogram-b','parallelogram-h');
    serial += 1;
    tableDisplay(serial, parallelogram, total);
    // setInnerText("parallelogram-total",total);
    // displayTotal();
});
document.getElementById('rombus-btn').addEventListener('click',function(){
    const rombus = document.getElementById('rombus').innerText;
    const total = multiplyNumber1('rombus-d1','rombus-d2');
    serial += 1;
    tableDisplay(serial, rombus, total);
    // setInnerText("rombus-total",total);
    // displayTotal();
});
document.getElementById('pentagon-btn').addEventListener('click',function(){
    const pentagon = document.getElementById('pentagon').innerText;
    const total = multiplyNumber1('pentagon-p','pentagon-b');
    serial += 1;
    tableDisplay(serial, pentagon, total);
    // setInnerText("pentagon-total",total);
    // displayTotal();
    
});
document.getElementById('ellipse-btn').addEventListener('click',function(){
    const ellipse = document.getElementById('ellipse').innerText;
    const total = multiplyNumber1('ellipse-a','ellipse-b');
    const totalPi = total * Math.PI;
    serial += 1;
    tableDisplay(serial,ellipse, totalPi.toFixed(2));

    // setInnerText("ellipse-total",totalPi.toFixed(2));

});

// const randomColor = document.getElementsByClassName('rendom-color1');
// console.log(randomColor);
// randomly color-1

/*     window.onload = () =>{
    main(randomColor);
}

function main(randomColor) {
    document.getElementById('rendom-color').addEventListener('mouseover', function(e){
        const bgColor = generateRandomColor();
        randomColor.style.backgroundColor = bgColor;
    });
}

function generateRandomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
} */

// randomly color-2

window.onload = () =>{
    const randomColor1 = document.getElementsByClassName('random-color1');
    main(randomColor1);
    console.log(randomColor1);
  }


  
  function main(randomColors) {
    for (let i = 0; i < randomColors.length; i++) {
      randomColors[i].addEventListener('mouseover', function(e){
        const bgColor = generateRandomColor();
        randomColors[i].style.backgroundColor = bgColor;
      });
    }
  }
  
  function generateRandomColor() {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      return `rgb(${red},${green},${blue})`;
  }
  

// function main() {
//     const randomColor = document.getElementsByClassName('rendom-color1');
//     document.getElementsByClassName('rendom-color1').addEventListener('mouseover', function(e){
//         const bgColor = generateRandomColor();
//         randomColor.style.backgroundColor = bgColor;
//     });
// }


// randomly color-3
