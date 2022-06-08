var note = JSON.parse(localStorage.getItem('notes')) || [];
var add = document.getElementById('add');
var text = document.getElementById('text');
var notes = document.getElementsByClassName('notes');
var id = 0;

const callNotes = function() {
    notes[0].innerHTML = '';
    for (let index = 0; index < note.length; index++) {
        if(note[index].backColor === 'red') {
            notes[0].innerHTML += `<div class="box">
            <div class="content">${note[index].value}</div>
            <div class  ="buttons">
                <button class="delete" onclick="deleteNotes(${index})">Delete Note</button>
                <button class="check" onclick="checkNote(${index})">✔</button>
            </div>
        </div>`
        }
        else {
            notes[0].innerHTML += `<div class="boxdone">
            <p class="content">${note[index].value}</p>
            <div class  ="buttons">
                <button class="delete" onclick="deleteNotes(${index})">Delete Note</button>
                <button class="check" onclick="checkNote(${index})">✔</button>
            </div>
            </div>`
        }
    }
}
var id = 0;
add.addEventListener('click', () => {
    note.push({id ,backColor : "red", value : text.value});
    id++;
    localStorage.setItem('notes',JSON.stringify(note));
    callNotes();
});

function checkNote(index) {
    for (let i = 0; i < note.length; i++) {
        if(index === i) {
            if(note[i].backColor === 'green') note[i].backColor = 'red';
            else if(note[i].backColor === 'red') note[i].backColor = 'green';
        }
    }
    localStorage.setItem('notes',JSON.stringify(note));
    callNotes();
}

function deleteNotes(index) {
    console.log(note.length);
    note.splice(index, 1);
    localStorage.setItem('notes',JSON.stringify(note));
    callNotes();
}


callNotes();