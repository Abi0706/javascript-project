var c = 0 
var x = 1

function but1() {
    c = c + x
    result.innerHTML = c
    if (c % 2 == 0) {
        result.style.color = "green"
    }else{
        result.style.color = "red"
    }
    if (c == 50) {
        x =-1
    }
    if (c == 0) {
        x = 1
    }
}


function resize() {
    var w = img.width
    var h = img.height

    if (w == 200 && h == 200) {
        img.width = 400
        img.height = 400
    }else{
        img.width = 200
        img.height = 200
    }
}


var i = 1
function NEXT() {
    console.log(i);

    i = i + 1
    console.log(i);

    if (i == 4) {
        i = 1
    }
    image.src = `${i}.jpg`
}

let j = 3; 
let totalImages = 3; 

console.log("Vahag")
function PREV() {
    j = j - 1;
    
 
    if (j < 1) {
        j = totalImages;
    }

    console.log(j);

    image.src = `${j}.jpg`;

}