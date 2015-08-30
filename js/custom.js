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

    $(".note-container").append('<div class="row note-wrap"><div class="row note"><div class="col-xs-12 col-sm-12"><p class="notes note-text">'+note+'</p></div></div></div>');


};


$( document ).ready(function(notes) {

  for(i = 0; i < notes.length; i++) {
    $(".note-container").append('<div class="row note-wrap"><div class="row note"><div class="col-xs-12 col-sm-12"><p class="notes note-text">'+notes+'</p></div></div></div>');
  };

});
