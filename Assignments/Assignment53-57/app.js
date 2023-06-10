// EVENTS

// 1. Consider you have 4 images in a file as shown below: 
// Now When you click on an image it should display in a modal.
// Modal code is available in this assignment file.





// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).

let paragraph = document.getElementById("myParagraph");
let fontSize = 16;
function zoomIn() {
    fontSize++;
    paragraph.style.fontSize = fontSize + "px";
}
function zoomOut() {
    fontSize--;
    paragraph.style.fontSize = fontSize + "px";
}


