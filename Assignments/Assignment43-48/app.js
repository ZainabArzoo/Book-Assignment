// EVENTS 

// 1. Show an alert box on click on a link.
function hello() {
    alert("welcome")
}
hello()


// 2. Display some Mobile images in browser. On click on an 
// image Show the message in alert to user.

function clickImg() {
    alert("image")
}
clickImg()





// 3. Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be 
// deleted. 
// Before delete
// After click on delete button on “Mark ” row

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}






// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.






// 5. Show a counter in browser. Counter should increase on click on increase 
// button and decrease on click on decrease button. And show updated counter 
// value in browser.


var counter = 0;
var counterElement = document.getElementById("counter");
var increaseBtn = document.getElementById("increaseBtn");
var decreaseBtn = document.getElementById("decreaseBtn");

increasecounter.addEventListener("click", function () {
    counter++;
    counterElement.textContent = counter;
});

decreasecounter.addEventListener("click", function () {
    if (counter > 0) {
        counter--;
        counterElement.textContent = counter;
    }
});




