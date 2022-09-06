
//the original count value 
let count = 0


//counts +1 everytime the button is pressed
let countEL = document.getElementById("count-el")
function increment(){

    count += 1
    countEL.textContent = count
}


//saves the preivous counts under the buttons
let saveEl = document.getElementById("save-el")
function save(){

 let previousValue = count + " - "
  saveEl.textContent += previousValue
  
 
}


//resets the count to 0
function reset(){

countEL.textContent = 0
count = 0

}




