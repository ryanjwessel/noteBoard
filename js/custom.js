// BEGIN CUSTOM JAVASCRIPT/jQuery HERE

function notePush() {
    //Get value from text input
    var note = JSON.stringify($("#note-content").val()),

    notes = localStorage.getItem('note');

    notes = notes ? JSON.parse(notes) : [];

    //Push note(s) into notes array
    notes.push(note);

    //Stringify the notes
    localStorage.setItem("note", JSON.stringify(notes));
    console.log("The data was saved.");

    //Parse the notes to create an array
    var parseNotes = JSON.parse(localStorage.getItem('note'));
    console.log(parseNotes);

    for(i = 0; i < parseNotes.length; i++) {
      $(".note-container").append("<div class=\"row note-wrap\"><div class=\"row note\"><div class=\"col-xs-12 col-sm-12\"><input type=\"text\" class=\"notes note-text\" maxlength=\"59\" placeholder=\"" + parseNotes[i] + "\"></input></div></div></div>");
    }

};


$( document ).ready(function(parseNotes) {}
