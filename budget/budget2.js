// var sortLthBtn = document.querySelector('.sort-low-to-high-btn');
// var sortHtlBtn = document.querySelector('.sort-high-to-low-btn');
// var sortAlf = document.querySelector('.sort-alf-btn');

//console.log(sortAlf.classList.value);




var t_income = document.getElementById("t_income");
console.log(t_income);

var t_exp = document.getElementById("t_exp");
console.log(t_exp);

var total_v_e = document.getElementById("total_v_e");

var dates = document.getElementById("dates");


var date = new Date();
date.getMonth();
dates.innerHTML = date;


t_income.innerText = 0;
var sum = 0;
var exp = 0;
var total = 0;
var per = 0;
var per2 = 0;


const renderUirow = function(txnDesc, txnAmt, txnType, per, per2) {


    if (txnType === 'inc') {
        document.querySelector('.middle-income .box').insertAdjacentHTML("beforeend",
            `<div class="content">
                    <div class="item">${txnDesc}</div>
                    <div class="right-middle incomes">${txnAmt}</div>
                    <div >
                    <button class="delete-icon">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                       <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                       <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                      </button>
                    </div>
                  
                </div>
                <hr>`)
    } else {
        document.querySelector('.middle-expenses .box2').insertAdjacentHTML("beforeend",
            `<div class="content">
                    <div class="item">${txnDesc}</div>
                    <div class="right-middle expense">${txnAmt}</div>
                    <div class="percent-box">${per2}</div>
                </div>
                <hr>`)


    }

    // document.querySelector(`${txnType === 'inc' ? ".middle-income .box" : ".middle-expenses .box2"}`).insertAdjacentHTML("beforeend",
    //     `<div class="content">
    //  <div class="item">${txnDesc}</div>

    //  <div class="right-middle incomes" style= "color:${txnType === 'inc' ? 'default' : 'red'}">${txnAmt}</div>

    //  <div class="percent-box">${per}</div>

    //  <div><svg xmlns="http://www.w3.org/2000/svg" class="delete-icon" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    //      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
    //      </svg></div>
    //  </div>

    // <hr>`);

}
var obj = {
    IncArr: [],
    ExpArr: [],
}
var uiObj = {
    txnAmt: this.txnAmt,
    txnDesc: this.txnDesc,
}
var deleteRow = function(event) {
    console.log(event.target);
}

document.getElementById("add-cta").addEventListener("click", function() {

    var budgetPer = document.querySelector('.budget-exp-per');
    let txnType = document.getElementById("txn-type").value;
    let txnAmt = document.getElementById("txn-amt").value;
    let txnDesc = document.getElementById("txn-desc").value;

    console.log(txnType, txnAmt, txnDesc);

    if (txnType === "inc") {

        sum = sum + parseInt(txnAmt);
        t_income.innerHTML = sum;

        obj.IncArr.push(parseInt(txnAmt));
        console.log(obj.IncArr);

    } else if (txnType === "exp") {
        debugger
        exp = exp + parseInt(txnAmt);
        t_exp.innerHTML = exp;


        obj.ExpArr.push(parseInt(txnAmt));
        per2 = Math.round((txnAmt / t_income.innerText) * 100) + "%";

    }

    total = sum - exp;
    total_v_e.innerHTML = total;

    if ((t_income.innerText > 0) && (t_exp.innerText == -0.00)) {
        budgetPer.innerHTML = '--';
    } else {

        per = Math.round((t_exp.innerText / t_income.innerText) * 100) + "%";
        budgetPer.innerHTML = per;
        console.log(per);
    }




    renderUirow(txnDesc, txnAmt, txnType, per, per2);

});



var deleteBtn = document.getElementsByClassName('.delete-icon');
//deleteBtn.addEventListener('click', deleteRow);


















// const updateUi = function(updatedArr, ) {
//     updatedArr.forEach(element => {
//         document.querySelector(`${txnType === 'inc' ? ".middle-income .box" : ".middle-expenses .box2"}`)
//             .innerHTML = `<div class="content">
//      <div class="item">${txnDesc}</div>
//      <div class="right-middle incomes" style= "color:${txnType === 'inc'? 'default': 'red'}">${element}</div>
//      </div>
//     <hr>`
//         console.log("updated");
//     });
// }



// const sortOrder = function(nameClass) {
//     debugger
//     if (nameClass.includes('sort-low-to-high-btn')) {

//         const updatedArr = obj.IncArr.slice().sort((a, b) => a - b);
//         console.log(updatedArr);
//         //updateUi(updatedArr, txnDesc, txnAmt, txnType);
//     } else if (nameClass.includes('sort-high-to-low-btn')) {

//         const updatedArr = obj.IncArr.slice().sort((a, b) => b - a);
//         console.log(updatedArr);

//     } else if (nameClass.includes('sort-high-to-low-btn')) {

//         const updatedArr = obj.IncArr.slice().sort((a, b) => a - b);
//         console.log(updatedArr);
//     }

// }



// sortLthBtn.addEventListener('click', function(e) {

//     var x = e.target.classList.value;
//     console.log(x)
//     sortOrder(x);
// })
// sortHtlBtn.addEventListener('click', function(e) {

//     var y = e.target.classList.value;
//     sortOrder(y);
// })
// sortAlf.addEventListener('click', function(e) {

//     var z = e.target.classList.value;
//     sortOrder(z);
// })

console.log(uiObj);






function Person() {
    this.name = 'John'
}

// adding a prototype
Person.prototype.age = 24;

// creating object
const person = new Person();

// accessing prototype property
console.log(person.__proto__); // { age: 24 }