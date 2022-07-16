var i = Math.floor(Math.random() * 1000);
fetchApi();

function fetchApi() {
    fetch("https://type.fit/api/quotes").then((response) => {
        return response.json();
    }).then((data) => {
        var apiData = data;
        console.log(apiData);
        renderUi(apiData);
    })
}

/////////////////////////////selector////////////////////////////////////////////////

var nextButton = document.querySelector('.button-right');
var previousButton = document.querySelector('.button-left');
var newQuoteButton = document.querySelector('.new-quotes');
var slider = document.querySelector('.slider');
var sliders = document.querySelectorAll('.sliders');
var quoteContent = document.querySelector('.quotecontent span');;

var activeSlideNum = 1;
var maxSlideCount = 3;
var cardWidth = 700;

///////////////////////////////NextButton///////////////////////////////////////////

nextButton.addEventListener('click', function() {
    // renderUi();
    // debugger
    //transalteX css pick
    //if last side is there (disable cta slide and return)
    // update transalteX 
    //activeslide increment
    //remove and add css class

    if (!nextButton.classList.contains("disabled")) {
        if (activeSlideNum == 1) {
            console.log("inner" + activeSlideNum);
            previousButton.classList.remove("disabled");

        }
        if (activeSlideNum == maxSlideCount - 1) {
            nextButton.classList.add("disabled");
        }

        if (nextButton.classList.contains("newQuote")) {

            if ((activeSlideNum == maxSlideCount - 1)) {
                nextButton.classList.add("disabled");
            }

            maxSlideCount = 6;
        }

        activeSlideNum++;

        slider.style.transform = `translateX(-${cardWidth * (activeSlideNum - 1)}px)`;

        //document.querySelector('.active-slider-card').classList.remove("active-slider-card");

        //document.getElementById(`cardNumber${activeSlideNum}`).classList.add("active-slider-card");
        console.log(activeSlideNum);
        console.log(maxSlideCount);
    }
})

///////////////////////////////PreviousButton////////////////////////////////////
previousButton.addEventListener('click', function() {

    if (!previousButton.classList.contains("disabled")) {
        if (activeSlideNum == maxSlideCount) {

            nextButton.classList.remove("disabled");

        }
        if (activeSlideNum == 2) {
            previousButton.classList.add("disabled");
        }

        activeSlideNum--;


        slider.style.transform = `translateX(-${cardWidth * (activeSlideNum - 1)}px)`;
        //document.querySelector('.active-slider-card').classList.remove("active-slider-card");
        //document.getElementById(`cardNumber${activeSlideNum}`).classList.add("active-slider-card");
        console.log("h" + activeSlideNum);
        console.log("h" + maxSlideCount);
    }

})

//////////////////////////////////Rendering Data///////////////////////////////////
function renderUi(apiData) {


    for (var j = 1; j <= maxSlideCount; j++) {
        var i = Math.floor(Math.random() * 1000);
        slider.innerHTML += `<div class="sliders " id="cardNumber${activeSlideNum}">
            <div class="quotecontent">

                <span id="quote${j}">${apiData[i].text}</span>
            </div>
            <div class="quoteauthor">
                <span id="author${j}">${apiData[i].author}</span>
            </div>

        </div>`
    }

}

newQuoteButton.addEventListener('click', function() {

    fetchApi();

    nextButton.classList.add('newQuote');
    nextButton.classList.remove("disabled");

})