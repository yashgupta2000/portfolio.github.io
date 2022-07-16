shownotes();
let heading = document.querySelector('.heading');
let addbtn = document.getElementById('addbtn');
let darkMode = document.querySelector('.dark-mode');
let container = document.querySelector('.main-container');
const deleteBtn = document.querySelector('.delete-btn');
addbtn.addEventListener("click", function(e) {

    let addtext = document.getElementById('inputnotes5');
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    } else {

        notesobj = JSON.parse(notes);
    }

    notesobj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtext.value = "";
    console.log(notesobj);
    shownotes();
})

function shownotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    } else {

        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function(element, index) {

        html = html +

            `<div class="notecard card mx-2 my-2" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick = "deleteNotes(this.id)" class="btn btn-primary btn-danger:hover delete-btn">Delete Note</button>
           </div>
        </div>`
    });
    const p = `<div class="no-txt">NOTHING TO SHOW</div>`;

    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    } else
        noteselm.innerHTML = p;
};

function deleteNotes(index) {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    } else {

        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);

    console.log("i will delete" + index);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}


const searchBox = document.getElementById('searchBox');
searchBox.addEventListener("input", function() {
    const searchBoxValue = searchBox.value;
    console.log(searchBoxValue);

    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element) {
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if (cardtxt.includes(searchBoxValue)) {
            element.style.display = 'block'
        } else
            element.style.display = 'none'
    })
})

darkMode.addEventListener('click', function() {
    container.classList.toggle('white-mode');
    heading.classList.toggle('white-mode');

})

console.log(heading);