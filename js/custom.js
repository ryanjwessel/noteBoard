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

    //Append the notes in rows
    $(".note-container").append('<div class="row note-wrap"><div class="row note"><div class="col-xs-12 col-sm-12"><p class="notes note-text">'+note+'</p></div></div></div>');

    //Reset input value
    $('note-content').value = "";
};


$( document ).ready(function() {

  //Load notes in localStorage
  var noteStart = JSON.parse(localStorage.getItem('note'));

  //Loop through notes and display in rows
  for(i = 0; i < noteStart.length; i++) {
    $(".note-container").append('<div class="row note-wrap"><div class="row note"><div class="col-xs-12 col-sm-12"><p class="notes note-text '+i+'">'+noteStart[i]+'</p></div></div></div>');
  };

});
