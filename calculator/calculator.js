// let display = document.querySelector(".display");
// let numbers = document.querySelectorAll("#numbers");
// let equal = document.querySelector("#equal");
// let clear = document.querySelector("#clear");

// let result = ""; 
// numbers.forEach(numbers => {
//     numbers.addEventListener("click",(e)=>{
//         e.preventDefault();
//         result += e.target.textContent ;
//         display.innerHTML = result;
//     })
// });
// clear.addEventListener("click",(e)=>{
//     e.preventDefault();
//     let result = "0";
//     display.innerHTML = result;
// })

        // function viewInDisplay(input) {
        //     if(display.innerHTML === "0"){
        //         display.innerHTML = input.target.textContent;
        //     }
        //     else{
        //         display.innerHTML = display.innerHTML + input;
        //     }
        // }

        // function clearDisplay() {
        //     display.innerHTML = ""
        // }

        // function calculate() {
        //     try{
        //         display.innerHTML = eval(display.innerHTML);
        //     }
        //     catch(error){
        //         display.innerHTML = "Error"
        //     }
        // }
        // function deleteLast() {
        //     display.innerText = display.innerText.slice(0, -1) || "0";
        // }

let display = document.querySelector(".display");
function viewInDisplay(input) {
    // If display shows "0", replace it with the new input
    if (display.innerHTML === "0") {
        display.innerHTML = input;  // Use input directly - if input is 0 replaces with input (ex : 5)
    } else {
        display.innerHTML += input;  // Append the input to the display - if the display contains values (ex-5) it appends another input value to it if we click
    }
}

function clearDisplay() {
    display.innerHTML = "0";  // Reset the display to "0" ;
}

function calculate() {
    try {
        // Evaluate the expression in the display
        display.innerHTML = eval(display.innerHTML);
    } catch (error) {
        display.innerHTML = "Error";  // Show "Error" if something goes wrong
    }
}

function deleteLast() {
    // Remove the last character and if empty, set to "0" 
    display.innerHTML = display.innerHTML.slice(0, -1) || "0" ;
}

