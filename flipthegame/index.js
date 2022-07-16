var box = document.getElementById("box");
var boxs = document.querySelector(".boxs");
var box1 = document.querySelector(".box1");
// var boxes = document.querySelector(".box1");


var tiles = document.getElementById("tiles");
//var submit = document.getElementById("submit");
var startagain = document.querySelector('.startagain');


function myfunction() {
    var j = tiles.value;
    var z = j / 2;
    var arr1 = [];

    for (var i = 0; i < z; i++) {
        arr1.push(Math.floor(Math.random() * 10));
    }

    var arr2 = arr1.concat(arr1);

    for (var i = 0; i < j; i++) {
        box.innerHTML += `
    <div id="box${i+2}" class="box1"><span class="numberRotated hidden">${arr2[i]}</span></div>
    `
    }

    //box.insertAdjacentHTML('afterend', `<div class="startagain"><button>START AGAIN</button></div>`);


    console.log(true);
    console.log(tiles.value);
}


var counter = 0;

var arr = [];


box.addEventListener("click", function(e) {
    //debugger
    ++counter;


    var x = e.target;
    //x.classList.add("rotate");
    var SpanElement = x.firstChild;



    SpanElement.classList.remove("hidden");

    innerValue = SpanElement.innerHTML;






    arr.push({ value: innerValue, SpanElement: SpanElement });
    console.log(arr);

    if (counter % 2 == 0) {

        if (arr[0].value == arr[1].value) {
            console.log(true);
        } else {
            let arrCopy = arr.slice(0);
            setTimeout(() => {

                arrCopy.forEach((el) => {
                    el.SpanElement.classList.add("hidden");
                    // el.SpanElement.classList.add("hideRotatedTile");

                    // setTimeout(() => {
                    //     el.SpanElement.classList.remove("hideRotatedTile");
                    // }, 500);

                })
            }, 500);
        }
        arr.splice(0, arr.length);
    }
})

var startagain = document.querySelector('.startagain');

startagain.addEventListener('click', function() {
    console.log("clicked");
    init();
});



function init() {
    var box1 = document.querySelectorAll(".box1 span");
    box1.forEach((el) => {

        el.classList.add('hidden');

    })
}



















//if (boxs.classList.contains("hidden") == false) {
// startagain.addEventListener('click', init);
//console.log(true);

//}



// var boxes = document.querySelectorAll(".boxs span");
// if (boxs.classList.contains("hidden") == false) {
//     SpanElement.classList.remove("hidden");
//     var a = document.querySelectorAll('.box1 span');
//     boxes.classList.remove("hidden");
//     a.classList.remove("hidden");
// }












// if (box1.classList.contains('hidden') = false)

//     init();

// // console.log(a);








// console.log(startagain);
// startagain.addEventListener('click', function() {
//     console.log("yash");
// })nsole.log(startagain);
// startagain.addEventListener('click', function() {
//     console.log("yash");
// })